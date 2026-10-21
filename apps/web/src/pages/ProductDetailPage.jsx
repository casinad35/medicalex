import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowLeft,
  ExternalLink,
  Factory,
  Hash,
  Stethoscope,
  Wrench,
  Filter,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CatalogBreadcrumb from '@/components/CatalogBreadcrumb';
import ProductGallery from '@/components/ProductGallery';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuoteCart } from '@/contexts/QuoteCartContext';
import {
  getSupplier,
  getSpecialty,
  getTypeGroup,
  getProductById,
  catalogImageBase,
  isDirectCatalogSupplier,
  groupCatalogPath,
} from '@/data/products';

const TechnicalPoints = ({ text }) => {
  const groups = text.split(/(?<=;)\s+/).filter(Boolean);

  return (
    <ul className="space-y-2 leading-relaxed text-foreground/90">
      {groups.map((group, index) => (
        <li key={`${group}-${index}`} className="flex gap-2">
          <span aria-hidden className="mt-px shrink-0 select-none text-brand-blue">—</span>
          <span>{group}</span>
        </li>
      ))}
    </ul>
  );
};

const ProductDetailPage = () => {
  const { supplierId, browseMode, groupId, productId } = useParams();
  const { t, lang } = useLanguage();
  const { addItem } = useQuoteCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const supplier = getSupplier(supplierId);

  // New 4-seg: mode/group/product — Legacy 3-seg: category as browseMode, product as groupId
  const isMode = browseMode === 'par-specialite' || browseMode === 'par-type';
  const gid = isMode ? groupId : browseMode;
  const pid = isMode ? productId : groupId;
  const product = getProductById(supplierId, pid);

  const group =
    browseMode === 'par-type'
      ? getTypeGroup(supplierId, gid)
      : getSpecialty(supplierId, gid) || getTypeGroup(supplierId, gid);

  if (!supplier || !product) return <Navigate to="/products" replace />;

  const direct = isDirectCatalogSupplier(supplier);
  const resolvedMode =
    browseMode === 'par-type' || (group && getTypeGroup(supplierId, group.id) && !getSpecialty(supplierId, group.id))
      ? 'type'
      : 'specialty';
  const pathSeg = resolvedMode === 'type' ? 'par-type' : 'par-specialite';
  const modeTitle = resolvedMode === 'type' ? t.products.byType : t.products.bySpecialty;
  const catTitle = group
    ? lang === 'en'
      ? group.titleEn
      : group.titleFr
    : modeTitle;

  const description =
    lang === 'en' && product.descriptionEn ? product.descriptionEn : product.description;
  const applications =
    lang === 'en' && product.applicationsEn ? product.applicationsEn : product.applications;
  const technical =
    lang === 'en' && product.technicalEn ? product.technicalEn : product.technical;

  const imageGroup = product.imageGroup || group?.id || '_products';

  const handleAddToQuote = () => {
    addItem(
      {
        supplierId: supplier.id,
        supplierName: supplier.name,
        productId: product.id,
        productName: product.name,
        ref: product.ref,
      },
      qty,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main>
      <Helmet>
        <title>{`${product.name} | ${supplier.name} | Medicalex`}</title>
        <meta
          name="description"
          content={`${product.name}${product.ref ? ` (réf. ${product.ref})` : ''} — ${description.slice(0, 140)}…`}
        />
      </Helmet>

      <section className="border-b border-brand-blue/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CatalogBreadcrumb
            items={[
              { label: t.products.crumbHome, to: '/' },
              { label: t.products.crumbProducts, to: '/products' },
              { label: supplier.name, to: `/products/${supplier.slug}` },
              ...(group
                ? direct
                  ? [
                      {
                        label: catTitle,
                        to: groupCatalogPath(supplier, group),
                      },
                    ]
                  : [
                      {
                        label: modeTitle,
                        to: `/products/${supplier.slug}/${pathSeg}`,
                      },
                      {
                        label: catTitle,
                        to: `/products/${supplier.slug}/${pathSeg}/${group.slug}`,
                      },
                    ]
                : []),
              { label: product.name },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <ProductGallery
                basePath={catalogImageBase(supplier.id, imageGroup, product.slug)}
                imageUrl={product.imageUrl}
                images={product.images}
                title={product.name}
                subtitle={product.ref}
                aspect="aspect-[4/3]"
                tone={supplier.id === 'rocamed' || supplier.id === 'integra' ? 'green' : 'navy'}
                zoomLabel={lang === 'en' ? 'Zoom image' : 'Agrandir l’image'}
                closeLabel={lang === 'en' ? 'Close' : 'Fermer'}
                prevLabel={lang === 'en' ? 'Previous image' : 'Image précédente'}
                nextLabel={lang === 'en' ? 'Next image' : 'Image suivante'}
                supplierId={supplier.id}
                productId={product.id}
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-lg border border-neutral-300 bg-white px-2 py-1">
                  <img
                    src={supplier.logo}
                    alt={supplier.name}
                    className="h-8 w-auto object-contain"
                  />
                </span>
                {group && (
                  <span className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-blue">
                    {catTitle}
                  </span>
                )}
              </div>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
                {product.name}
              </h1>
              {product.ref && (
                <p className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-blue/5 px-3 py-2 font-mono text-sm font-semibold text-brand-blue">
                  <Hash className="h-4 w-4" aria-hidden />
                  {t.products.orderRef}: {product.ref}
                </p>
              )}
              {product.refNote && (
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                  * {lang === 'en' && product.refNote.en ? product.refNote.en : product.refNote.fr}
                </p>
              )}
              <p className="mt-6 text-base leading-relaxed text-foreground/90">{description}</p>

              {product.indications && product.indications.length > 0 && (
                <div className="mt-5">
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <Filter className="h-3.5 w-3.5" aria-hidden />
                    {lang === 'en' ? 'Indications / filters' : 'Indications / filtres'}
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {product.indications.map((ind) => (
                      <li
                        key={ind.id}
                        className="rounded-full border border-brand-green/30 bg-brand-green/5 px-3 py-1 text-xs font-semibold text-brand-green-dark"
                      >
                        {lang === 'en' ? ind.en : ind.fr}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                  <label
                    htmlFor="pd-qty"
                    className="hidden text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:block"
                  >
                    {t.products.quantity}
                  </label>
                  <input
                    id="pd-qty"
                    type="number"
                    min={1}
                    step={1}
                    value={qty}
                    aria-label={t.products.quantity}
                    onChange={(e) => setQty(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="h-10 w-14 rounded-xl border border-brand-blue/20 bg-white text-center text-sm font-semibold text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue sm:h-11 sm:w-20"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddToQuote}
                  className="inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-brand-green px-2.5 py-2 text-xs font-bold text-white transition-transform hover:bg-brand-green-dark active:scale-[0.98] sm:min-h-11 sm:px-3 sm:py-2.5 sm:text-sm"
                >
                  {added ? t.products.addedToQuote : t.products.addToQuote}
                </button>
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border-2 border-brand-blue/20 bg-white px-3 py-2 text-xs font-bold text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-mist sm:min-h-11 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  {t.products.officialSource}
                  <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-3xl border border-brand-blue/10 bg-white p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-2 text-brand-blue">
                  <Stethoscope className="h-5 w-5" />
                  <h2 className="font-display text-lg font-extrabold text-brand-navy">
                    {t.products.applications}
                  </h2>
                </div>
                <p className="leading-relaxed text-foreground/90">{applications}</p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article className="h-full rounded-3xl border border-brand-blue/10 bg-white p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-2 text-brand-blue">
                  <Wrench className="h-5 w-5" />
                  <h2 className="font-display text-lg font-extrabold text-brand-navy">
                    {t.products.technical}
                  </h2>
                </div>
                <TechnicalPoints text={technical} />
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <article className="mt-6 rounded-3xl border border-brand-blue/10 bg-white p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2 text-brand-blue">
                <Factory className="h-5 w-5" />
                <h2 className="font-display text-lg font-extrabold text-brand-navy">
                  {t.products.manufacturerInfo}
                </h2>
              </div>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.products.manufacturer}
                  </dt>
                  <dd className="mt-1 font-semibold text-brand-navy">{supplier.name}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.products.productName}
                  </dt>
                  <dd className="mt-1 font-semibold text-brand-navy">{product.name}</dd>
                </div>
                {product.ref && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.products.orderRef}
                    </dt>
                    <dd className="mt-1 font-mono text-sm font-semibold text-brand-navy">{product.ref}</dd>
                    {product.refNote && (
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        * {lang === 'en' && product.refNote.en ? product.refNote.en : product.refNote.fr}
                      </p>
                    )}
                  </div>
                )}
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.products.category}
                  </dt>
                  <dd className="mt-1 font-semibold text-brand-navy">{catTitle}</dd>
                </div>
              </dl>
              <a
                href={product.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
              >
                {t.products.officialSource}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-4">
            {group && (
              <Link
                to={groupCatalogPath(supplier, group)}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                {t.products.backCategory}
              </Link>
            )}
            <Link
              to={`/products/${supplier.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline"
            >
              {t.products.backSupplier}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
