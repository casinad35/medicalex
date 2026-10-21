import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CheckCircle2, Mail, Phone, ArrowRight, Home } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/contexts/LanguageContext';

const ConfirmationPage = () => {
    const { t, lang } = useLanguage();
    const c = t.confirmation;

    return (
        <main>
            <Helmet>
                <title>
                    {lang === 'en'
                        ? 'Request sent — confirmation | SARL Medicalex'
                        : 'Demande envoyée — confirmation | SARL Medicalex'}
                </title>
                <meta
                    name="description"
                    content={
                        lang === 'en'
                            ? 'Your contact or quote request has been sent to the Medicalex team. We will reply within 48 business hours.'
                            : "Votre demande de contact ou de devis a bien été transmise à l'équipe Medicalex. Nous vous répondons sous 48 h ouvrées."
                    }
                />
            </Helmet>

            {/* Header */}
            <section className="bg-brand-blue">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <Reveal>
                        <span className="inline-block rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                            {c.label}
                        </span>
                        <h1 className="mt-5 font-display text-4xl font-extrabold text-white sm:text-5xl">
                            {c.title}
                        </h1>
                        <span className="mt-6 block h-1.5 w-24 rounded-full bg-brand-green" />
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                            {c.subtitle}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Confirmation body */}
            <section className="bg-brand-mist py-14 lg:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="flex flex-col items-center rounded-3xl border-2 border-brand-green/40 bg-white p-8 text-center shadow-sm sm:p-12">
                            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10">
                                <CheckCircle2
                                    className="h-12 w-12 text-brand-green"
                                    strokeWidth={1.5}
                                />
                            </span>
                            <h2 className="mt-6 font-display text-2xl font-extrabold text-brand-blue sm:text-3xl">
                                {c.title}
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {c.infoText}
                            </p>

                            <div className="mt-8 w-full max-w-md rounded-2xl border border-border bg-brand-mist p-5 text-left">
                                <p className="text-xs font-bold uppercase tracking-widest text-brand-green">
                                    {c.infoTitle}
                                </p>
                                <ul className="mt-3 space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Mail
                                            className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                                            strokeWidth={2}
                                        />
                                        <span className="text-sm leading-relaxed text-foreground/85">
                                            <a
                                                href="mailto:contact@medi-calex.com"
                                                className="font-semibold text-brand-blue underline-offset-2 hover:underline"
                                            >
                                                contact@medi-calex.com
                                            </a>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Phone
                                            className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                                            strokeWidth={2}
                                        />
                                        <span className="text-sm leading-relaxed text-foreground/85">
                                            <a
                                                href="tel:+21323522876"
                                                className="font-semibold text-brand-blue underline-offset-2 hover:underline"
                                            >
                                                +213 23 52 28 76
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                                    {c.contactText}
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    to="/"
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-brand-blue px-7 text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                                >
                                    <Home className="h-4 w-4" strokeWidth={2.5} />
                                    {c.backHome}
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-7 text-sm font-bold text-white transition-all hover:bg-brand-green-dark active:scale-[0.98]"
                                >
                                    {c.backContact}
                                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default ConfirmationPage;
