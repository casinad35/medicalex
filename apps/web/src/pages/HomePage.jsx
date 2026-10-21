import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    ArrowRight,
    BadgeCheck,
    GraduationCap,
    Truck,
    CalendarDays,
    Clock,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PartnersGrid from '@/components/PartnersGrid';
import SpecialtyOrbit from '@/components/SpecialtyOrbit';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
    const { t, lang } = useLanguage();

    return (
        <main>
            <Helmet>
                <title>
                    Medicalex — Équipement médical et chirurgical en Algérie | KARL STORZ, Erbe,
                    Rocamed, Integra
                </title>
                <meta
                    name="description"
                    content="SARL Medicalex, représentant officiel de KARL STORZ, Erbe Elektromedizin, Rocamed et INTEGRA LifeSciences en Algérie : endoscopie, électrochirurgie, urologie et neurochirurgie. Demandez un devis."
                />
            </Helmet>

            {/* Hero — attached medical OR blue background */}
            <section className="relative overflow-hidden bg-[#0a2a6e]">
                <div
                    className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            'url(https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/89b032d529f300b7ddc20b61c652bb97.webp)',
                    }}
                    aria-hidden
                />
                {/* Soft dark wash so copy & bubbles stay readable */}
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06245a]/55 via-[#0a3a8f]/25 to-transparent"
                    aria-hidden
                />
                {/* Wave bottom */}
                <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-t from-brand-mist/20 to-transparent sm:h-24" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 pb-8 pt-2 sm:px-6 lg:grid-cols-12 lg:gap-4 lg:px-8 lg:pb-10 lg:pt-2">
                    {/* Copy */}
                    <Reveal className="relative z-10 lg:col-span-5">
                        <span className="block h-1 w-16 rounded-full bg-brand-green" />

                        <h1 className="mt-5 font-display text-[1.85rem] font-extrabold leading-[1.12] text-white text-balance sm:text-4xl lg:text-[2.55rem]">
                            {lang === 'fr' ? (
                                <>
                                    Votre partenaire de confiance
                                    <span className="mt-1 block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                                        pour une santé meilleure
                                    </span>
                                </>
                            ) : (
                                <>
                                    Your trusted partner
                                    <span className="mt-1 block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                                        for better healthcare
                                    </span>
                                </>
                            )}
                        </h1>

                        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                            {t.home.subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/products"
                                className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-green px-7 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition-all hover:bg-brand-green-dark active:scale-[0.98]"
                            >
                                {t.home.ctaProducts}
                                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                            </Link>
                        </div>
                    </Reveal>

                    {/* Specialty orbit + 25 years badge */}
                    <div className="relative lg:col-span-7">
                        <Reveal delay={0.12} className="relative">
                            <SpecialtyOrbit />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Our Partners */}
            <section className="bg-brand-mist py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <span className="inline-block rounded-full bg-brand-blue px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                            {t.home.partnersTitle}
                        </span>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            {t.home.partnersSub}
                        </p>
                    </Reveal>
                    <PartnersGrid />
                </div>
            </section>

            {/* Mission */}
            <section id="mission" className="scroll-mt-28 bg-white py-16 lg:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
                    <Reveal className="lg:col-span-2">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
                            {t.home.missionLabel}
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brand-blue text-balance sm:text-4xl">
                            {t.home.missionTitle}
                        </h2>
                        <span className="mt-6 block h-1.5 w-20 rounded-full bg-brand-green" />
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-3">
                        <p className="border-l-4 border-brand-blue/20 pl-6 text-lg leading-relaxed text-foreground/80">
                            {t.home.missionText}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Why Medicalex */}
            <section className="bg-brand-mist py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="max-w-2xl">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
                            {t.home.whyLabel}
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-extrabold text-brand-blue text-balance sm:text-4xl">
                            {t.home.whyTitle}
                        </h2>
                    </Reveal>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            { icon: BadgeCheck, title: t.home.why1Title, text: t.home.why1Text },
                            { icon: GraduationCap, title: t.home.why2Title, text: t.home.why2Text },
                            { icon: Truck, title: t.home.why3Title, text: t.home.why3Text },
                        ].map((item, i) => (
                            <Reveal key={item.title} delay={i * 0.1}>
                                <div className="h-full rounded-3xl border-t-4 border-brand-green bg-white p-8 shadow-sm">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-white">
                                        <item.icon className="h-6 w-6" strokeWidth={2} />
                                    </span>
                                    <h3 className="mt-5 font-display text-lg font-extrabold text-brand-blue">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {item.text}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Webinar teaser */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="overflow-hidden rounded-3xl bg-brand-blue">
                            <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-3">
                                <div className="lg:col-span-2">
                                    <span className="inline-block rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                                        {t.home.webinarBadge}
                                    </span>
                                    <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-white/70">
                                        {t.home.webinarKicker}
                                    </p>
                                    <h2 className="mt-2 font-display text-2xl font-extrabold leading-snug text-white text-balance sm:text-3xl">
                                        {t.home.webinarTitle}
                                    </h2>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                                            <CalendarDays
                                                className="h-4 w-4 text-brand-green"
                                                strokeWidth={2}
                                            />
                                            {t.home.webinarDate}
                                        </span>
                                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                                            <Clock
                                                className="h-4 w-4 text-brand-green"
                                                strokeWidth={2}
                                            />
                                            {t.home.webinarTime}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex lg:justify-end">
                                    <Link
                                        to="/news"
                                        className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-brand-blue transition-all hover:bg-brand-green hover:text-white active:scale-[0.98]"
                                    >
                                        {t.home.webinarCta}
                                        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA band */}
            <section className="bg-brand-mist py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="flex flex-col items-center gap-6 rounded-3xl border-2 border-brand-blue/15 bg-white p-10 text-center">
                            <h2 className="max-w-xl font-display text-2xl font-extrabold text-brand-blue text-balance sm:text-3xl">
                                {t.home.ctaBandTitle}
                            </h2>
                            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {t.home.ctaBandText}
                            </p>
                            <Link
                                to="/contact?subject=quote#devis"
                                className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-green px-8 text-sm font-bold text-white transition-all hover:bg-brand-green-dark active:scale-[0.98]"
                            >
                                {t.home.ctaBandButton}
                                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
