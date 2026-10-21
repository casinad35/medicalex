import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { LOGO_URL } from '@/components/Header';

const ContactPage = () => {
    const { t } = useLanguage();

    const infoItems = [
        { icon: MapPin, label: t.contact.infoAddress },
        { icon: Phone, label: t.contact.infoPhone },
        { icon: Mail, label: t.contact.infoEmail },
        { icon: Clock, label: t.contact.infoHours },
    ];

    return (
        <main>
            <Helmet>
                <title>Contact & Devis — SARL Medicalex Alger | Demande de devis équipement médical</title>
                <meta
                    name="description"
                    content="Contactez SARL Medicalex à Alger : demande de devis, question technique ou renseignement général sur les gammes KARL STORZ, Erbe et Rocamed. Réponse sous 48 h ouvrées."
                />
            </Helmet>

            {/* Page header */}
            <section className="bg-brand-blue">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <Reveal>
                        <span className="inline-block rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                            {t.contact.label}
                        </span>
                        <h1 className="mt-5 font-display text-4xl font-extrabold text-white sm:text-5xl">
                            {t.contact.title}
                        </h1>
                        <span className="mt-6 block h-1.5 w-24 rounded-full bg-brand-green" />
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                            {t.contact.subtitle}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Info + form */}
            <section id="form" className="scroll-mt-28 bg-brand-mist py-14 lg:py-20">
                <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
                    <Reveal className="lg:col-span-2">
                        <div className="rounded-3xl bg-brand-navy p-8 text-white">
                            <div className="flex items-center gap-3">
                                <img
                                    src={LOGO_URL}
                                    alt="Medicalex logo"
                                    className="h-14 w-14 rounded-full bg-white object-contain"
                                />
                                <h2 className="font-display text-xl font-extrabold">
                                    {t.contact.infoTitle}
                                </h2>
                            </div>
                            <ul className="mt-8 space-y-5">
                                {infoItems.map((item) => (
                                    <li key={item.label} className="flex items-start gap-3.5">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                            <item.icon className="h-5 w-5 text-brand-green" strokeWidth={2} />
                                        </span>
                                        <span className="pt-2 text-sm font-medium leading-relaxed text-white/85">
                                            {item.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
                                <p className="text-xs font-bold uppercase tracking-widest text-brand-green">
                                    KARL STORZ · Erbe · Rocamed
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">
                                    {t.footer.tagline}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-3">
                        <div id="devis" className="scroll-mt-28">
                            <ContactForm />
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
