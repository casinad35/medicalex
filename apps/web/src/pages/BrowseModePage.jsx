import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CatalogBreadcrumb from '@/components/CatalogBreadcrumb';
import CatalogImage from '@/components/CatalogImage';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSupplier, groupImageBase } from '@/data/products';

const MODE_META = {
  'par-specialite': {
    key: 'specialty',
    groupsKey: 'specialties',
    pathSeg: 'par-specialite',
  },
  'par-type': {
    key: 'type',
    groupsKey: 'types',
    pathSeg: 'par-type',
  },
};

const BrowseModePage = () => {
  const { supplierId, browseMode } = useParams();
  const { t, lang } = useLanguage();
  const supplier = getSupplier(supplierId);
  const meta = MODE_META[browseMode];

  if (!supplier || !meta) return <Navigate to="/products" replace />;

  const groups = supplier[meta.groupsKey] || [];
  const modeTitle = meta.key === 'specialty' ? t.products.bySpecialty : t.products.byType;

  return (
    <main>
      <Helmet>
        <title>{`${modeTitle} — ${supplier.name} | Medicalex`}</title>
        <meta
          name="description"
          content={`${modeTitle} : catalogue ${supplier.name} chez Medicalex.`}
        />
      </Helmet>

      <section className="border-b border-brand-blue/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CatalogBreadcrumb
            items={[
              { label: t.products.crumbHome, to: '/' },
              { label: t.products.crumbProducts, to: '/products' },
              { label: supplier.name, to: `/products/${supplier.slug}` },
              { label: modeTitle },
            ]}
          />
          <Reveal>
            <div className="mb-4 inline-flex rounded-xl border border-neutral-300 bg-white px-4 py-2">
              <img src={supplier.logo} alt="" className="h-8 w-auto object-contain" />
            </div>
            <h1 className="font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
              {modeTitle}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {supplier.name} · {groups.length}{' '}
              {meta.key === 'specialty' ? t.products.specialtiesCount : t.products.typesCount}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-mist py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => {
              const title = lang === 'en' ? g.titleEn : g.titleFr;
              return (
                <Reveal key={g.id} delay={i * 0.05}>
                  <Link
                    to={`/products/${supplier.slug}/${meta.pathSeg}/${g.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <CatalogImage
                      basePath={groupImageBase(supplier.id, meta.pathSeg, g.id)}
                      imageUrl={g.imageUrl}
                      title={title}
                      subtitle={`${g.productIds.length} ${t.products.productsCount}`}
                      tone={
                        supplier.id === 'integra'
                          ? 'green'
                          : supplier.id === 'erbe'
                            ? 'blue'
                            : 'navy'
                      }
                    />
                    <div className="flex flex-1 flex-col px-5 py-5">
                      <h2 className="font-display text-lg font-bold text-brand-navy group-hover:text-brand-blue">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {g.productIds.length} {t.products.productsCount}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-blue">
                        {t.products.viewProducts}
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
    </main>
  );
};

export default BrowseModePage;
