import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Trash2, X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import CatalogImage from '@/components/CatalogImage';
import useEditMode from '@/hooks/useEditMode';
import { useLanguage } from '@/contexts/LanguageContext';
import pb from '@/lib/pocketbaseClient';

/**
 * Product image gallery: main view + optional thumbnails + zoom lightbox.
 * Accepts a single imageUrl and/or images[] of strings / { url, alt }.
 *
 * In "Select and edit" mode (detected via useEditMode), an owner-only area is
 * exposed to add extra gallery images. The visual editor intercepts normal
 * button clicks and blocks dialog typing, so the add control is an <img> with
 * data-edit-assisted-id — clicking it opens the builder's native image picker.
 * Chosen URLs are saved to PocketBase so public/live visitors see them too.
 * Remove controls use a window-capture interceptor so they still work under
 * the editor. Add/remove UI is never rendered for public visitors.
 */
function normalizeGallerySources({ imageUrl, images, basePath, title, subtitle }) {
  const list = [];
  const push = (url, alt) => {
    if (!url || typeof url !== 'string') return;
    const trimmed = url.trim();
    if (!trimmed) return;
    if (list.some((x) => x.url === trimmed)) return;
    list.push({ url: trimmed, alt: alt || title });
  };

  // The main image (imageUrl) is the canonical first/main image. Gallery
  // images are appended AFTER it, in their original order, so a newly added
  // image is never promoted to the main slot merely because it was saved last.
  push(imageUrl, title);

  if (Array.isArray(images)) {
    images.forEach((item, i) => {
      if (typeof item === 'string') push(item, `${title} (${i + 1})`);
      else if (item && typeof item === 'object') push(item.url || item.src, item.alt || `${title} (${i + 1})`);
    });
  }

  if (list.length === 0 && basePath) {
    list.push({ url: null, alt: title, useCatalog: true });
  }

  return list;
}

/** Accept CDN/picker URLs (with or without a file extension). */
const isImageUrl = (value) => {
  const v = (value || '').trim();
  if (!/^https?:\/\/\S+/i.test(v)) return false;
  if (/^https?:\/\/localhost\b/i.test(v)) return false;
  return true;
};

/** Dashed “add image” placeholder shown in the assisted edit slot. */
const ADD_SLOT_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="128" viewBox="0 0 160 128">' +
      '<rect x="1" y="1" width="158" height="126" rx="12" fill="#eef3fb" stroke="#3b5bdb" stroke-width="2" stroke-dasharray="6 4"/>' +
      '<path d="M80 44v40M60 64h40" stroke="#3b5bdb" stroke-width="3.5" stroke-linecap="round"/>' +
      '</svg>',
  );

const ProductGallery = ({
  imageUrl,
  images,
  basePath,
  title,
  subtitle = '',
  tone = 'navy',
  aspect = 'aspect-[4/3]',
  zoomLabel = 'Agrandir l’image',
  closeLabel = 'Fermer',
  prevLabel = 'Image précédente',
  nextLabel = 'Image suivante',
  supplierId = '',
  productId = '',
  labels,
  bare = false,
}) => {
  const editMode = useEditMode();
  const { t } = useLanguage();
  // Label source: defaults to the product gallery strings, but event/other
  // surfaces can pass their own via the `labels` prop.
  const L = labels || t.products;

  const storageKey = useMemo(
    () => `medicalex-gallery-${supplierId}-${productId}`,
    [supplierId, productId],
  );

  // Owner-added gallery images, persisted to PocketBase so public/live
  // visitors see them too (localStorage was browser-local only).
  const [extraImages, setExtraImages] = useState([]);
  const addSlotRef = useRef(null);
  const persistingRef = useRef(new Set());
  const removeExtraRef = useRef(async () => {});

  const persistExtraImage = useCallback(
    async (url) => {
      const value = (url || '').trim();
      if (!supplierId || !productId || !isImageUrl(value)) return false;
      if (persistingRef.current.has(value)) return false;

      let alreadyPresent = false;
      setExtraImages((prev) => {
        if (prev.includes(value)) {
          alreadyPresent = true;
          return prev;
        }
        return [...prev, value];
      });
      if (alreadyPresent) return true;

      persistingRef.current.add(value);
      try {
        await pb.collection('product_gallery_images').create(
          { supplierId, productId, imageUrl: value },
          { requestKey: `add-gallery-${supplierId}-${productId}-${value.slice(-24)}` },
        );
        return true;
      } catch (err) {
        // The unique index (supplierId, productId, imageUrl) rejects a
        // re-create of an already-persisted image. That means the image IS
        // already saved — treat it as success and keep it in the gallery.
        const details = err?.response?.data;
        const isAlreadySaved =
          err?.status === 400 &&
          details &&
          typeof details === 'object' &&
          Object.values(details).some(
            (d) => d && d.code === 'validation_not_unique',
          );
        if (isAlreadySaved) return true;
        setExtraImages((prev) => prev.filter((u) => u !== value));
        return false;
      } finally {
        persistingRef.current.delete(value);
      }
    },
    [supplierId, productId],
  );

  const handleRemoveExtra = useCallback(
    async (url) => {
      setExtraImages((prev) => prev.filter((u) => u !== url));
      try {
        const records = await pb.collection('product_gallery_images').getFullList({
          filter: pb.filter('supplierId = {:s} && productId = {:p} && imageUrl = {:u}', {
            s: supplierId,
            p: productId,
            u: url,
          }),
        });
        await Promise.all(
          records.map((r, i) =>
            pb
              .collection('product_gallery_images')
              .delete(r.id, { requestKey: `del-gallery-${r.id}-${i}` })
              .catch(() => {}),
          ),
        );
      } catch {
        /* ignore — local state already updated */
      }
    },
    [supplierId, productId],
  );

  removeExtraRef.current = handleRemoveExtra;

  useEffect(() => {
    if (!supplierId || !productId) return undefined;

    let cancelled = false;

    const loadRemote = async () => {
      try {
        const records = await pb.collection('product_gallery_images').getFullList({
          filter: pb.filter('supplierId = {:s} && productId = {:p}', {
            s: supplierId,
            p: productId,
          }),
          sort: 'created',
        });
        if (cancelled) return;
        const urls = records.map((r) => r.imageUrl).filter(Boolean);
        setExtraImages(urls);

        // One-time migration: if the owner previously added images via the
        // old localStorage path, push them into PocketBase so they appear
        // live, then clear the local cache.
        try {
          const raw = localStorage.getItem(storageKey);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
              const local = parsed.filter((u) => typeof u === 'string' && u && !urls.includes(u));
              await Promise.all(
                local.map((url, i) =>
                  pb
                    .collection('product_gallery_images')
                    .create(
                      { supplierId, productId, imageUrl: url },
                      { requestKey: `migrate-gallery-${supplierId}-${productId}-${i}` },
                    )
                    .catch(() => {}),
                ),
              );
              if (local.length) {
                const merged = [...urls, ...local];
                if (!cancelled) setExtraImages(merged);
              }
              localStorage.removeItem(storageKey);
            }
          }
        } catch {
          /* ignore malformed local cache */
        }
      } catch (err) {
        // Network/PB unavailable — fall back to any local cache so the
        // editor still works offline-ish.
        try {
          const raw = localStorage.getItem(storageKey);
          if (raw && !cancelled) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) setExtraImages(parsed.filter((u) => typeof u === 'string'));
          }
        } catch {
          /* ignore */
        }
      }
    };

    void loadRemote();

    // Keep every viewer in sync when the owner adds/removes images elsewhere.
    const unsub = pb
      .collection('product_gallery_images')
      .subscribe('*', (e) => {
        const rec = e.record;
        if (!rec || rec.supplierId !== supplierId || rec.productId !== productId) return;
        setExtraImages((prev) => {
          if (e.action === 'delete') return prev.filter((u) => u !== rec.imageUrl);
          if (e.action === 'create' && !prev.includes(rec.imageUrl)) return [...prev, rec.imageUrl];
          return prev;
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      void pb.collection('product_gallery_images').unsubscribe('*').catch(() => {});
      if (unsub && typeof unsub.then === 'function') unsub.then((fn) => { try { fn && fn(); } catch { /* ignore */ } });
    };
  }, [storageKey, supplierId, productId]);

  // When the builder image picker writes a new src onto the add-slot <img>,
  // persist that URL to PocketBase and reset the slot for the next add.
  useEffect(() => {
    if (!editMode) return undefined;
    const img = addSlotRef.current;
    if (!img) return undefined;

    const capture = () => {
      const src = (img.getAttribute('src') || '').trim();
      if (!src || src === ADD_SLOT_PLACEHOLDER || src.startsWith('data:')) return;
      if (!isImageUrl(src)) return;
      void persistExtraImage(src).finally(() => {
        if (addSlotRef.current) {
          addSlotRef.current.setAttribute('src', ADD_SLOT_PLACEHOLDER);
        }
      });
    };

    const obs = new MutationObserver(capture);
    obs.observe(img, { attributes: true, attributeFilter: ['src'] });
    capture();
    return () => obs.disconnect();
  }, [editMode, persistExtraImage, supplierId, productId, extraImages.length]);

  // Visual editor swallows button clicks in Select & edit. Intercept remove
  // controls at window capture so our handlers still run.
  useEffect(() => {
    if (!editMode) return undefined;

    const stopEditor = (event) => {
      const interactive = event.target?.closest?.('[data-gallery-interactive="remove"]');
      if (!interactive) return;
      event.stopImmediatePropagation();
    };

    const onClick = (event) => {
      const interactive = event.target?.closest?.('[data-gallery-interactive="remove"]');
      if (!interactive) return;
      event.stopImmediatePropagation();
      event.preventDefault();
      const url = interactive.getAttribute('data-gallery-url') || '';
      if (url) void removeExtraRef.current(url);
    };

    window.addEventListener('mousedown', stopEditor, true);
    window.addEventListener('mouseup', stopEditor, true);
    window.addEventListener('pointerdown', stopEditor, true);
    window.addEventListener('pointerup', stopEditor, true);
    window.addEventListener('click', onClick, true);

    return () => {
      window.removeEventListener('mousedown', stopEditor, true);
      window.removeEventListener('mouseup', stopEditor, true);
      window.removeEventListener('pointerdown', stopEditor, true);
      window.removeEventListener('pointerup', stopEditor, true);
      window.removeEventListener('click', onClick, true);
    };
  }, [editMode]);

  const baseSources = useMemo(
    () => normalizeGallerySources({ imageUrl, images, basePath, title, subtitle }),
    [imageUrl, images, basePath, title, subtitle],
  );

  // Merge owner-added images after the product's own images.
  const sources = useMemo(() => {
    if (extraImages.length === 0) return baseSources;
    const extras = extraImages
      .map((url, i) => ({ url, alt: `${title} (${baseSources.length + i + 1})`, extra: true }))
      .filter((e) => !baseSources.some((b) => b.url === e.url));
    return [...baseSources, ...extras];
  }, [baseSources, extraImages, title]);

  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [nativeZoom, setNativeZoom] = useState(false);
  const nativeZoomRef = useRef(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const panRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef(null);
  const zoomContainerRef = useRef(null);
  const zoomImgRef = useRef(null);

  // Keep a ref in sync with nativeZoom so pointer handlers can read the
  // current mode without stale closures.
  useEffect(() => {
    nativeZoomRef.current = nativeZoom;
  }, [nativeZoom]);

  const resetPan = useCallback(() => {
    setPan({ x: 0, y: 0 });
    panRef.current = { x: 0, y: 0 };
  }, []);

  useEffect(() => {
    setActive(0);
    setNativeZoom(false);
    resetPan();
  }, [title, imageUrl, images, extraImages, resetPan]);

  const go = useCallback(
    (dir) => {
      if (sources.length < 2) return;
      setActive((i) => (i + dir + sources.length) % sources.length);
      setNativeZoom(false);
      resetPan();
    },
    [sources.length, resetPan],
  );

  const closeLightbox = useCallback(() => {
    setLightbox(false);
    setNativeZoom(false);
    resetPan();
  }, [resetPan]);

  const openZoom = () => {
    setNativeZoom(false);
    resetPan();
    setLightbox(true);
  };

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, go, closeLightbox]);

  // --- Native-size pan (mouse drag + touch drag) ---
  const computePanBounds = useCallback(() => {
    const c = zoomContainerRef.current;
    const img = zoomImgRef.current;
    if (!c || !img) return { maxX: 0, maxY: 0 };
    const maxX = Math.max(0, (img.clientWidth - c.clientWidth) / 2);
    const maxY = Math.max(0, (img.clientHeight - c.clientHeight) / 2);
    return { maxX, maxY };
  }, []);

  const onZoomPointerDown = useCallback((e) => {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseX: panRef.current.x,
      baseY: panRef.current.y,
      moved: false,
      pointerId: e.pointerId,
    };
    // Pointer capture is only useful for panning, which happens in native mode.
    if (nativeZoomRef.current) {
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    }
  }, []);

  const onZoomPointerMove = useCallback((e) => {
    const d = dragRef.current;
    if (!d) return;
    // Panning only applies in native-size mode.
    if (!nativeZoomRef.current) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (!d.moved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) d.moved = true;
    if (!d.moved) return;
    const { maxX, maxY } = computePanBounds();
    const nx = Math.max(-maxX, Math.min(maxX, d.baseX + dx));
    const ny = Math.max(-maxY, Math.min(maxY, d.baseY + dy));
    panRef.current = { x: nx, y: ny };
    setPan({ x: nx, y: ny });
  }, [computePanBounds]);

  const onZoomPointerUp = useCallback((e) => {
    const d = dragRef.current;
    dragRef.current = null;
    try { e.currentTarget?.releasePointerCapture?.(e.pointerId); } catch { /* ignore */ }
    // A click (no meaningful movement) toggles between fitted and native-size.
    if (d && !d.moved) {
      setNativeZoom((z) => {
        if (z) {
          resetPan();
          return false;
        }
        return true;
      });
    }
  }, [resetPan]);

  const onZoomPointerCancel = useCallback(() => {
    dragRef.current = null;
  }, []);

  const count = sources.length;
  const current = sources[Math.min(active, Math.max(0, count - 1))] || sources[0];
  const hasThumbs = count > 1;
  // Show the thumbnail strip when there are multiple images OR when the owner
  // is editing (so the "add image" space is reachable even for single-image
  // products). Public visitors never get editMode, so single-image products
  // keep their original no-shift layout.
  const showStrip = hasThumbs || editMode;

  const renderMain = (srcItem, extraClass) => {
    if (!srcItem) return null;
    if (srcItem.useCatalog || !srcItem.url) {
      return (
        <CatalogImage
          basePath={basePath}
          title={title}
          subtitle={subtitle}
          tone={tone}
          aspect={aspect}
          className={extraClass}
          imgClassName="object-contain bg-white"
        />
      );
    }
    return (
      <div className={cn('relative overflow-hidden bg-white', aspect, extraClass)}>
        <img
          src={srcItem.url}
          alt={srcItem.alt || title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    );
  };

  const thumbSrc = (srcItem) => {
    if (!srcItem || srcItem.useCatalog || !srcItem.url) return null;
    return srcItem.url;
  };

  return (
    <div className="space-y-3">
      <div className={cn('group relative overflow-hidden', bare ? '' : 'rounded-3xl border border-brand-blue/10 bg-white shadow-sm')}>
        {renderMain(current)}

        <button
          type="button"
          onClick={openZoom}
          aria-label={zoomLabel}
          className="absolute bottom-3 right-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/15 bg-white/95 text-brand-navy shadow-md transition-transform hover:scale-105 hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        >
          <ZoomIn className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>

        <button
          type="button"
          onClick={openZoom}
          className="absolute inset-0 z-0 cursor-zoom-in bg-transparent"
          aria-label={zoomLabel}
        />
      </div>

      {showStrip && (
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 sm:gap-3">
            {sources.map((src, i) => {
              const isActive = i === active;
              const tUrl = thumbSrc(src);
              return (
                <div
                  key={`${src.url || 'demo'}-${i}`}
                  className="relative shrink-0"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`${title} — ${i + 1}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative h-16 w-20 overflow-hidden rounded-lg border-2 bg-white transition-colors sm:h-20 sm:w-24',
                      isActive
                        ? 'border-brand-blue ring-1 ring-brand-blue/30'
                        : 'border-brand-blue/15 hover:border-brand-blue/40',
                    )}
                  >
                    {tUrl ? (
                      <img src={tUrl} alt="" className="h-full w-full object-contain p-1" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-brand-mist text-[10px] font-semibold text-brand-blue">
                        {i + 1}
                      </div>
                    )}
                  </button>
                  {editMode && src.extra && (
                    <span
                      role="button"
                      tabIndex={0}
                      data-gallery-interactive="remove"
                      data-gallery-url={src.url}
                      aria-label={L.galleryRemove}
                      title={L.galleryRemove}
                      className="absolute -right-2 -top-2 z-10 inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-brand-blue/20 bg-white text-brand-blue shadow-md transition-transform hover:scale-105 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  )}
                </div>
              );
            })}

            {editMode && supplierId && productId && (
              <div
                className="flex shrink-0 flex-col items-center gap-1"
                title={L.galleryAddHint}
              >
                {/*
                  Native builder image target: Select & edit opens the parent
                  image picker on click. A MutationObserver persists the chosen
                  URL to PocketBase, then resets this slot.
                */}
                <img
                  ref={addSlotRef}
                  data-edit-assisted-id={`medicalex-gallery-add-${supplierId}-${productId}`}
                  src={ADD_SLOT_PLACEHOLDER}
                  alt={L.galleryAddLabel}
                  className="h-16 w-20 cursor-pointer rounded-lg object-contain sm:h-20 sm:w-24"
                />
                <span className="pointer-events-none max-w-[6.5rem] text-center text-[9px] font-semibold leading-tight text-brand-blue sm:text-[10px]">
                  {L.galleryAddButton}
                </span>
              </div>
            )}
          </div>

          {hasThumbs && count > 3 && (
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={nextLabel}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white shadow-md transition-transform hover:bg-brand-navy active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          )}
        </div>
      )}

      {lightbox && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-navy/25 p-3 backdrop-blur-[2px] sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div
            className="relative flex h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-[2px] bg-white shadow-[0_18px_70px_rgba(20,32,55,0.3)] sm:h-[calc(100dvh-3rem)] sm:w-[calc(100vw-3rem)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center gap-3 border-b border-brand-blue/10 px-4 py-3 pr-16 sm:px-6 sm:py-4 sm:pr-20">
              <p className="min-w-0 truncate font-display text-sm font-semibold text-brand-navy sm:text-base">
                {title}
                {subtitle ? (
                  <span className="ml-2 font-mono text-xs font-medium text-brand-blue/70">Réf. {subtitle}</span>
                ) : null}
              </p>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label={closeLabel}
              className="absolute right-3 top-3 z-20 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-brand-blue text-white shadow-lg transition-colors hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 sm:right-4 sm:top-4 sm:h-14 sm:w-14"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.25} aria-hidden />
            </button>

            <div className="relative min-h-0 flex-1 overflow-hidden">
              {hasThumbs && (
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={prevLabel}
                  className="absolute left-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue/15 bg-white text-brand-navy shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue sm:left-4"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden />
                </button>
              )}

              <div
                ref={zoomContainerRef}
                className={cn(
                  'absolute inset-0 flex items-center justify-center',
                  nativeZoom ? 'overflow-hidden' : 'overflow-visible',
                )}
                style={nativeZoom ? { touchAction: 'none' } : undefined}
              >
                {current?.url && !current.useCatalog ? (
                  <img
                    ref={zoomImgRef}
                    src={current.url}
                    alt={current.alt || title}
                    role="button"
                    tabIndex={0}
                    draggable={false}
                    aria-label={nativeZoom ? L.galleryZoomOutHint : L.galleryZoomInHint}
                    title={nativeZoom ? L.galleryZoomOutHint : L.galleryZoomInHint}
                    onPointerDown={onZoomPointerDown}
                    onPointerMove={onZoomPointerMove}
                    onPointerUp={onZoomPointerUp}
                    onPointerCancel={onZoomPointerCancel}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setNativeZoom((z) => !z);
                        resetPan();
                      }
                    }}
                    className={cn(
                      'block h-auto w-auto select-none object-contain',
                      nativeZoom
                        ? 'max-h-none max-w-none cursor-grab active:cursor-grabbing'
                        : 'max-h-[calc(100dvh-9rem)] max-w-[calc(100vw-4rem)] cursor-zoom-in sm:max-h-[calc(100dvh-10rem)] sm:max-w-[calc(100vw-8rem)]',
                    )}
                    style={nativeZoom ? { transform: `translate(${pan.x}px, ${pan.y}px)` } : undefined}
                  />
                ) : (
                  <div className="max-h-[calc(100dvh-9rem)] w-full max-w-3xl overflow-hidden rounded-xl sm:max-h-[calc(100dvh-10rem)]">
                    <CatalogImage
                      basePath={basePath}
                      title={title}
                      subtitle={subtitle}
                      tone={tone}
                      aspect="aspect-[4/3]"
                      imgClassName="object-contain bg-white"
                    />
                  </div>
                )}
              </div>

              {hasThumbs && (
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={nextLabel}
                  className="absolute right-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue/15 bg-white text-brand-navy shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue sm:right-4"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden />
                </button>
              )}
            </div>

            {hasThumbs && (
              <div className="flex shrink-0 justify-center gap-2 border-t border-brand-blue/10 px-4 py-3">
                {sources.map((src, i) => (
                  <button
                    key={`lb-${src.url || i}`}
                    type="button"
                    onClick={() => {
                      setActive(i);
                      setNativeZoom(false);
                    }}
                    aria-label={`${title} — ${i + 1}`}
                    className={cn(
                      'h-2.5 w-2.5 rounded-full transition-colors',
                      i === active ? 'bg-brand-blue' : 'bg-brand-blue/25 hover:bg-brand-blue/60',
                    )}
                  />
                ))}
              </div>
            )}

            {current?.url && !current.useCatalog && (
              <p className="shrink-0 border-t border-brand-blue/10 px-4 py-2 text-center text-[11px] font-medium text-muted-foreground">
                {nativeZoom ? `${L.galleryPanHint} · ${L.galleryZoomOutHint}` : L.galleryZoomInHint}
              </p>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ProductGallery;
