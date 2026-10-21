import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Package, Building2, Stethoscope, Layers } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  catalogSuppliers,
  isDirectCatalogSupplier,
  groupCatalogPath,
  productCatalogPath,
} from '@/data/products';
import { cn } from '@/lib/utils';

function normalize(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function buildIndex() {
  const items = [];
  for (const s of catalogSuppliers) {
    items.push({
      kind: 'supplier',
      id: `s-${s.id}`,
      title: s.name,
      subtitle: s.shortName,
      href: `/products/${s.slug}`,
      haystack: normalize(
        [s.name, s.shortName, s.focus?.fr, s.focus?.en, s.specialties?.fr, s.specialties?.en].join(
          ' ',
        ),
      ),
      brand: s.name,
    });

    const direct = isDirectCatalogSupplier(s);
    const groups = s.specialtyGroups || s.specialties || [];

    for (const g of groups) {
      items.push({
        kind: direct ? 'type' : 'specialty',
        id: `sp-${s.id}-${g.id}`,
        title: g.titleFr,
        titleEn: g.titleEn,
        subtitle: s.shortName || s.name,
        href: groupCatalogPath(s, g),
        haystack: normalize(
          [g.titleFr, g.titleEn, s.name, s.shortName, ...(g.productIds || [])].join(' '),
        ),
        brand: s.name,
      });
    }

    if (!direct) {
      for (const g of s.typeGroups || s.types || []) {
        items.push({
          kind: 'type',
          id: `ty-${s.id}-${g.id}`,
          title: g.titleFr,
          titleEn: g.titleEn,
          subtitle: s.shortName || s.name,
          href: `/products/${s.slug}/par-type/${g.slug}`,
          haystack: normalize(
            [g.titleFr, g.titleEn, s.name, s.shortName, ...(g.productIds || [])].join(' '),
          ),
          brand: s.name,
        });
      }
    }

    for (const p of s.productList || s.products || []) {
      const firstSpec = groups.find((g) => (g.productIds || []).includes(p.id));
      const firstType = (s.typeGroups || s.types || []).find((g) =>
        (g.productIds || []).includes(p.id),
      );

      items.push({
        kind: 'product',
        id: `p-${s.id}-${p.id}`,
        title: p.name,
        subtitle: p.ref ? `Réf. ${p.ref}` : s.shortName || s.name,
        href: productCatalogPath(s, p),
        haystack: normalize(
          [
            p.name,
            p.ref,
            p.description,
            p.descriptionEn,
            p.applications,
            p.applicationsEn,
            p.technical,
            p.technicalEn,
            s.name,
            s.shortName,
            firstSpec?.titleFr,
            firstSpec?.titleEn,
            firstType?.titleFr,
            firstType?.titleEn,
            ...(p.indications || []).flatMap((i) => [i.fr, i.en]),
          ].join(' '),
        ),
        brand: s.name,
      });
    }
  }
  return items;
}

const KIND_ICON = {
  product: Package,
  specialty: Stethoscope,
  type: Layers,
  supplier: Building2,
};

const CatalogSearch = ({ className, compact = false, variant = 'default', onNavigate }) => {
  const { t, lang } = useLanguage();
  const listId = useId();
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(0);

  const index = useMemo(() => buildIndex(), []);

  const results = useMemo(() => {
    const q = normalize(query).trim();
    if (q.length < 2) return [];
    const tokens = q.split(/\s+/).filter(Boolean);
    const scored = [];
    for (const item of index) {
      let score = 0;
      let ok = true;
      for (const tok of tokens) {
        if (!item.haystack.includes(tok)) {
          ok = false;
          break;
        }
        if (normalize(item.title).includes(tok)) score += 8;
        if (normalize(item.subtitle).includes(tok)) score += 5;
        score += 1;
      }
      if (ok) {
        const kindBoost =
          item.kind === 'product' ? 3 : item.kind === 'supplier' ? 2 : 1;
        scored.push({ ...item, score: score + kindBoost });
      }
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 12);
  }, [index, query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    const onDoc = (e) => {
      if (!rootRef.current?.contains(e.target)) {
        setOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const tmr = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(tmr);
    }
  }, [mobileOpen]);

  const kindLabel = useCallback(
    (kind) => {
      if (kind === 'product') return t.nav.searchProduct;
      if (kind === 'specialty') return t.nav.searchSpecialty;
      if (kind === 'type') return t.nav.searchType;
      return t.nav.searchSupplier;
    },
    [t],
  );

  const displayTitle = (item) => {
    if ((item.kind === 'specialty' || item.kind === 'type') && lang === 'en' && item.titleEn) {
      return item.titleEn;
    }
    return item.title;
  };

  const closeAll = () => {
    setOpen(false);
    setMobileOpen(false);
    setQuery('');
    onNavigate?.();
  };

  const onKeyDown = (e) => {
    if (!open && !mobileOpen && results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Escape') {
      setOpen(false);
      setMobileOpen(false);
      setQuery('');
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      const el = document.getElementById(`${listId}-opt-${active}`);
      el?.click();
    }
  };

  const showPanel = (open || mobileOpen) && query.trim().length >= 2;

  const panel = showPanel && (
    <div
      id={listId}
      role="listbox"
      aria-label={t.nav.searchResults}
      className="absolute left-0 right-0 top-full z-[60] mt-2 max-h-[min(70vh,28rem)] overflow-y-auto rounded-2xl border border-border bg-white py-2 shadow-xl"
    >
      {results.length === 0 ? (
        <p className="px-4 py-6 text-center text-sm text-muted-foreground">
          {t.nav.searchNoResults}
        </p>
      ) : (
        results.map((item, i) => {
          const Icon = KIND_ICON[item.kind] || Package;
          return (
            <Link
              key={item.id}
              id={`${listId}-opt-${i}`}
              role="option"
              aria-selected={i === active}
              to={item.href}
              onClick={closeAll}
              onMouseEnter={() => setActive(i)}
              className={cn(
                'flex items-start gap-3 px-4 py-2.5 transition-colors',
                i === active ? 'bg-secondary' : 'hover:bg-secondary/60',
              )}
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-blue">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-brand-navy">
                  {displayTitle(item)}
                </span>
                <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
                  <span className="font-medium text-brand-green">{kindLabel(item.kind)}</span>
                  <span aria-hidden>·</span>
                  <span className="truncate">{item.subtitle}</span>
                  {item.brand && item.kind !== 'supplier' && (
                    <>
                      <span aria-hidden>·</span>
                      <span className="truncate">{item.brand}</span>
                    </>
                  )}
                </span>
              </span>
            </Link>
          );
        })
      )}
    </div>
  );

  const isHeaderBar = variant === 'headerBar';

  const field = (
    <div className={cn('relative', className)} ref={rootRef}>
      <label className="sr-only" htmlFor={`${listId}-input`}>
        {t.nav.searchAria}
      </label>
      {isHeaderBar ? (
        <div className="relative flex items-stretch overflow-hidden rounded-full border border-[#c5d4ef] bg-white shadow-sm focus-within:border-[#1a4db8] focus-within:ring-2 focus-within:ring-[#1a4db8]/25">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7a8db0]"
            strokeWidth={2}
            aria-hidden
          />
          <input
            ref={inputRef}
            id={`${listId}-input`}
            type="search"
            autoComplete="off"
            role="combobox"
            aria-expanded={showPanel}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={
              showPanel && results[active] ? `${listId}-opt-${active}` : undefined
            }
            placeholder={t.nav.searchPlaceholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            className="h-11 min-w-0 flex-1 border-0 bg-transparent pl-10 pr-2 text-sm text-foreground outline-none placeholder:text-[#9aabc8]"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="mr-1 inline-flex h-9 w-9 shrink-0 items-center justify-center self-center rounded-full text-muted-foreground hover:bg-secondary hover:text-brand-blue"
              aria-label={t.nav.searchClear}
            >
              <X className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          ) : null}
          <button
            type="button"
            className="inline-flex h-11 w-12 shrink-0 items-center justify-center bg-[#1a8cff] text-white transition-colors hover:bg-[#0d7aef]"
            aria-label={t.nav.searchAria}
            onClick={() => {
              inputRef.current?.focus();
              setOpen(true);
            }}
          >
            <Search className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      ) : (
        <div className="relative flex items-center">
          <Search
            className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground"
            strokeWidth={2}
            aria-hidden
          />
          <input
            ref={inputRef}
            id={`${listId}-input`}
            type="search"
            autoComplete="off"
            role="combobox"
            aria-expanded={showPanel}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={
              showPanel && results[active] ? `${listId}-opt-${active}` : undefined
            }
            placeholder={t.nav.searchPlaceholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            className="h-10 w-full min-w-0 rounded-full border border-input bg-white pl-9 pr-9 text-sm text-foreground shadow-sm outline-none transition-shadow placeholder:text-muted-foreground focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/25"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="absolute right-2 inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-brand-blue"
              aria-label={t.nav.searchClear}
            >
              <X className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          ) : null}
        </div>
      )}
      {panel}
    </div>
  );

  if (compact) {
    return (
      <div className={cn('relative', className)}>
        {!mobileOpen ? (
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 sm:h-10 sm:w-10 lg:border-input lg:text-brand-blue lg:hover:bg-secondary"
            aria-label={t.nav.searchOpen}
          >
            <Search className="h-4 w-4" strokeWidth={2} />
          </button>
        ) : (
          <div className="fixed inset-x-0 top-0 z-[70] border-b border-border bg-white p-3 shadow-md sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 sm:w-[min(100vw-2rem,22rem)] sm:rounded-2xl sm:border sm:p-3 sm:shadow-xl">
            <div className="mx-auto flex max-w-7xl items-center gap-2">
              <div className="min-w-0 flex-1">{field}</div>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setQuery('');
                }}
                className="inline-flex h-10 shrink-0 items-center rounded-full px-3 text-sm font-semibold text-brand-blue hover:bg-secondary"
              >
                {t.nav.searchClear}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return field;
};

export default CatalogSearch;
