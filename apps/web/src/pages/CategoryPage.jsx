import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Reveal from '@/components/Reveal';
import CatalogBreadcrumb from '@/components/CatalogBreadcrumb';
import CatalogImage from '@/components/CatalogImage';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getSupplier,
  getSpecialty,
  getTypeGroup,
  getProductsForGroup,
  catalogImageBase,
  isDirectCatalogSupplier,
  productCatalogPath,
} from '@/data/products';

const CategoryPage = () => {
  const { supplierId, browseMode, groupId } = useParams();
  const { t, lang } = useLanguage();
  const supplier = getSupplier(supplierId);

  // New: /par-specialite|par-type/:groupId — Legacy: /:categoryId as browseMode
  const isMode = browseMode === 'par-specialite' || browseMode === 'par-type';
  const gid = isMode ? groupId : browseMode;
  const direct = isDirectCatalogSupplier(supplier);

  const group =
    browseMode === 'par-type'
      ? getTypeGroup(supplierId, gid)
      : getSpecialty(supplierId, gid) || getTypeGroup(supplierId, gid);

  if (!supplier || !group) return <Navigate to="/products" replace />;

  const resolvedMode = getSpecialty(supplierId, group.id) ? 'specialty' : 'type';
  const pathSeg = resolvedMode === 'type' ? 'par-type' : 'par-specialite';
  const modeTitle = resolvedMode === 'type' ? t.products.byType : t.products.bySpecialty;
  const catTitle = lang === 'en' ? group.titleEn : group.titleFr;
  const products = getProductsForGroup(supplierId, group);

  const crumbItems = [
    { label: t.products.crumbHome, to: '/' },
    { label: t.products.crumbProducts, to: '/products' },
    { label: supplier.name, to: `/products/${supplier.slug}` },
    ...(direct
      ? []
      : [{ label: modeTitle, to: `/products/${supplier.slug}/${pathSeg}` }]),
    { label: catTitle },
  ];

  return (
    <main>
      <Helmet>
        <title>{`${catTitle} — ${supplier.name} | Medicalex`}</title>
        <meta
          name="description"
          content={`${catTitle} (${supplier.name}) : liste des produits du portfolio Medicalex.`}
        />
      </Helmet>

      <section className="border-b border-brand-blue/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CatalogBreadcrumb items={crumbItems} />
          <Reveal>
            <h1 className="font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
              {catTitle}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {supplier.name} · {products.length} {t.products.productsCount}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-mist py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 8) * 0.04}>
                <Link
                  to={productCatalogPath(supplier, p)}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-blue/10 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <div className="relative">
                    <CatalogImage
                      basePath={catalogImageBase(supplier.id, p.imageGroup || group.id, p.slug)}
                      imageUrl={p.imageUrl}
                      title={p.name}
                      subtitle={p.ref}
                      tone={supplier.id === 'rocamed' || supplier.id === 'integra' ? 'green' : 'blue'}
                      aspect="aspect-[4/3]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 to-transparent px-3 pb-3 pt-10">
                      <p className="line-clamp-2 font-display text-sm font-bold leading-snug text-white">
                        {p.name}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <p className="font-mono text-xs text-muted-foreground">Réf. {p.ref}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
