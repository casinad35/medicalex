import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { catalogSuppliers as suppliers } from '@/data/products';

const ProductsPage = () => {
  const { t, lang } = useLanguage();

  return (
    <main>
      <Helmet>
        <title>Produits — KARL STORZ, Erbe, Rocamed, Integra | Medicalex</title>
        <meta
          name="description"
          content="Catalogue Medicalex : KARL STORZ, Erbe Elektromedizin, Rocamed et INTEGRA LifeSciences — parcourez par spécialité ou par type de produit."
        />
      </Helmet>

      <section className="bg-brand-blue">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              {t.products.label}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold text-white sm:text-5xl">
              {t.products.title}
            </h1>
            <span className="mt-6 block h-1.5 w-24 rounded-full bg-brand-green" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {t.products.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-mist py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {suppliers.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <Link
                  to={`/products/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-brand-blue/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <div className="flex min-h-[160px] items-center justify-center bg-white px-8 py-10">
                    <img
                      src={s.logo}
                      alt={s.name}
                      className="max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-brand-blue/10 px-6 py-5">
                    <p className="text-[11px] font-medium leading-snug text-muted-foreground sm:text-xs">
                      {s.focus[lang] || s.focus.fr}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
                      {t.products.viewRange}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
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

export default ProductsPage;
