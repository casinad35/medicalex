import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { brands } from '@/data/products';
import NewsletterForm from '@/components/NewsletterForm';
import { FOOTER_LOGO_URL } from '@/components/Header';

const Footer = () => {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    const navLinks = [
        { to: '/', label: t.nav.home },
        { to: '/products', label: t.nav.products },
        { to: '/news', label: t.nav.news },
        { to: '/contact', label: t.nav.contact },
    ];

    return (
        <footer className="mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <NewsletterForm />
            </div>
            <div className="mt-12 bg-brand-navy text-white">
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
                    <div>
                        <div className="flex items-center">
                            <img
                                src={FOOTER_LOGO_URL}
                                alt="Medicalex logo"
                                className="h-12 w-auto max-w-[205px] rounded-sm object-contain"
                            />
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-white/70">{t.footer.tagline}</p>
                        <div className="mt-5 flex items-center gap-3" aria-label={t.footer.socialTitle}>
                            <a
                                href="https://web.facebook.com/medicalex.algerie/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.socialFacebook}
                                title={t.footer.socialFacebook}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:border-brand-green hover:bg-brand-green hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                            >
                                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                                    <path d="M14 8.5h-2V7c0-.7.3-1.1 1.1-1.1H14V3.4c-.4-.1-1.1-.1-1.8-.1C10.3 3.3 9 4.5 9 6.7v1.8H7v2.7h2v7h3v-7h2.3L14 8.5Z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/sarl-medicalex/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.socialLinkedin}
                                title={t.footer.socialLinkedin}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:border-brand-green hover:bg-brand-green hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                            >
                                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                                    <path d="M6.5 8.5H3.7v8.9h2.8V8.5ZM5.1 3.9a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM20.3 12.3c0-2.7-1.4-4.2-3.6-4.2-1.7 0-2.4.9-2.8 1.5V8.5h-2.8v8.9h2.8v-4.4c0-1.2.2-2.4 1.7-2.4 1.4 0 1.4 1.3 1.4 2.4v4.4h2.8l.5-5.1Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand-green">
                            {t.footer.navTitle}
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-white/80 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand-green">
                            {t.footer.partnersTitle}
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {brands.map((brand) => (
                                <li key={brand.id}>
                                    <Link
                                        to={`/products/${brand.slug}`}
                                        className="text-sm text-white/80 transition-colors hover:text-white"
                                    >
                                        {brand.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand-green">
                            {t.footer.contactTitle}
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm text-white/80">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" strokeWidth={2} />
                                {t.contact.infoAddress}
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={2} />
                                {t.contact.infoPhone}
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={2} />
                                {t.contact.infoEmail}
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Clock className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={2} />
                                {t.contact.infoHours}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
                        <span>© {year} SARL Medicalex — {t.footer.rights}</span>
                        <span>KARL STORZ · Erbe · Rocamed · Integra — Algeria / Algérie</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
