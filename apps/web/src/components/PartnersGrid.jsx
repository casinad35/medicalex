import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Activity,
    Microscope,
    Zap,
    Brain,
    Table2,
    Lightbulb,
} from 'lucide-react';
import { brands } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

const brandIcons = {
    'karl-storz': Microscope,
    erbe: Zap,
    rocamed: Activity,
    integra: Brain,
    schmitz: Table2,
    'dr-mach': Lightbulb,
};

const PartnersGrid = () => {
    const { t, lang } = useLanguage();

    return (
        <div className="mt-12" role="list" aria-label={t.home.partnersTitle}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
                {brands.map((brand) => {
                    const Icon = brandIcons[brand.id] || Activity;
                    return (
                        <Link
                            key={brand.id}
                            to={`/products/${brand.slug}`}
                            role="listitem"
                            className="group flex min-w-0 flex-col items-center rounded-3xl border-2 border-brand-blue/15 bg-white px-3 py-6 text-center transition-colors hover:border-brand-green hover:shadow-xl sm:px-4 sm:py-8"
                        >
                            <div className="flex h-20 w-full items-center justify-center rounded-2xl bg-white px-2 sm:h-24 sm:px-3">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-[3.5rem] w-auto max-w-full object-contain object-center sm:h-[4.25rem]"
                                />
                            </div>
                            <span className="mt-4 inline-flex max-w-full items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-brand-blue sm:mt-5 sm:gap-2 sm:px-3 sm:text-xs">
                                <Icon className="h-3.5 w-3.5 shrink-0 text-brand-green" strokeWidth={2.5} />
                                <span className="truncate">{brand.focus[lang]}</span>
                            </span>
                            <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-brand-green transition-colors group-hover:text-brand-green-dark sm:mt-6 sm:text-sm">
                                {t.home.partnersCta}
                                <ArrowRight
                                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                    strokeWidth={2.5}
                                />
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default PartnersGrid;
