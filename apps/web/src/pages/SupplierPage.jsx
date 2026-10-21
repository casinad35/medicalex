import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, ExternalLink, Stethoscope, Layers } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CatalogBreadcrumb from '@/components/CatalogBreadcrumb';
import CatalogImage from '@/components/CatalogImage';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getSupplier,
  getProductsForGroup,
  isDirectCatalogSupplier,
  groupCatalogPath,
  productCatalogPath,
  catalogImageBase,
} from '@/data/products';

const SupplierPage = () => {
  const { supplierId } = useParams();
  const { t, lang } = useLanguage();
  const supplier = getSupplier(supplierId);

  if (!supplier) return <Navigate to="/products" replace />;

  const direct = isDirectCatalogSupplier(supplier);
  const directGroups = direct ? supplier.specialties || [] : [];

  const modes = [
    {
      key: 'specialite',
      to: `/products/${supplier.slug}/par-specialite`,
      title: t.products.bySpecialty,
      text: t.products.bySpecialtyHint,
      icon: Stethoscope,
      tone: 'blue',
    },
    {
      key: 'type',
      to: `/products/${supplier.slug}/par-type`,
      title: t.products.byType,
      text: t.products.byTypeHint,
      icon: Layers,
      tone: 'green',
    },
  ];

  return (
    <main>
      <Helmet>
        <title>{`${supplier.name} — ${t.products.browseTitle} | Medicalex`}</title>
        <meta
          name="description"
          content={
            direct
              ? `${supplier.name} chez Medicalex : ${supplier.focus.fr}.`
              : `${supplier.name} chez Medicalex : ${supplier.focus.fr}. Parcourez par spécialité ou par type de produit.`
          }
        />
      </Helmet>

      <section className="border-b border-brand-blue/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <CatalogBreadcrumb
            items={[
              { label: t.products.crumbHome, to: '/' },
              { label: t.products.crumbProducts, to: '/products' },
              { label: supplier.name },
            ]}
          />
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <div className="mb-6 inline-flex rounded-2xl border border-neutral-300 bg-white px-6 py-4">
                  <img src={supplier.logo} alt="" className="h-12 w-auto object-contain sm:h-14" />
                </div>
                <h1 className="font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
                  {supplier.name}
                </h1>
                <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                  {supplier.focus[lang] || supplier.focus.fr}
                </p>
                {(supplier.specialtyBlurb?.[lang] || supplier.specialtyBlurb?.fr) && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-brand-navy">{t.products.specialties}: </span>
                    {supplier.specialtyBlurb?.[lang] || supplier.specialtyBlurb?.fr}
                  </p>
                )}
                <a
                  href={supplier.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                >
                  {t.products.manufacturerSite}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {direct ? (
        <section className="bg-brand-mist py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-display text-xl font-extrabold text-brand-navy sm:text-2xl">
              {t.products.categoriesTitle}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {directGroups.map((group, i) => {
                const title = lang === 'en' ? group.titleEn : group.titleFr;
                const products = getProductsForGroup(supplier.id, group);
                const onlyProduct = products.length === 1 ? products[0] : null;
                const href = onlyProduct
                  ? productCatalogPath(supplier, onlyProduct)
                  : groupCatalogPath(supplier, group);

                return (
                  <Reveal key={group.id} delay={i * 0.08}>
                    <Link
                      to={href}
                      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      {onlyProduct ? (
                        <div className="relative border-b border-brand-blue/5 bg-white">
                          <CatalogImage
                            basePath={catalogImageBase(supplier.id, '_products', onlyProduct.slug)}
                            imageUrl={onlyProduct.imageUrl}
                            title={onlyProduct.name}
                            subtitle={onlyProduct.ref}
                            tone="navy"
                            aspect="aspect-[4/3]"
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-1 flex-col p-7">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-brand-green">
                          {supplier.shortName}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-extrabold text-brand-navy group-hover:text-brand-blue">
                          {onlyProduct ? onlyProduct.name : title}
                        </h3>
                        {onlyProduct ? (
                          <p className="mt-2 font-mono text-xs font-semibold text-brand-blue">
                            {t.products.orderRef}: {onlyProduct.ref}
                          </p>
                        ) : (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {products.length} {t.products.productsCount}
                          </p>
                        )}
                        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
                          {onlyProduct ? t.products.viewProducts : t.products.explore}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-brand-mist py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-display text-xl font-extrabold text-brand-navy sm:text-2xl">
              {t.products.browseTitle}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {modes.map((mode, i) => (
                <Reveal key={mode.key} delay={i * 0.08}>
                  <Link
                    to={mode.to}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-blue/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <span
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                        mode.tone === 'green' ? 'bg-brand-green text-white' : 'bg-brand-blue text-white'
                      }`}
                    >
                      <mode.icon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-extrabold text-brand-navy group-hover:text-brand-blue">
                      {mode.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{mode.text}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
                      {t.products.explore}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default SupplierPage;
