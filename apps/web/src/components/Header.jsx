import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Menu,
    Globe,
    ChevronRight,
    ChevronDown,
    ShoppingCart,
    User,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useLanguage } from '@/contexts/LanguageContext';
import { brands, isDirectCatalogSupplier, groupCatalogPath } from '@/data/products';
import { cn } from '@/lib/utils';
import CatalogSearch from '@/components/CatalogSearch';
import QuoteCartSheet from '@/components/QuoteCartSheet';
import { useQuoteCart } from '@/contexts/QuoteCartContext';

/** Logo plein (fond clair / footer) */
export const LOGO_URL =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/883092c1063a060df8ca29cd490dfb2c.jpg';
/** Logo sur fond sombre */
export const FOOTER_LOGO_URL =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/5d018b2178806a47e4d7447203205fa7.png';
/** Logo header maquette (cercle + MEDICALEX blanc sur bandeau bleu) */
export const HEADER_BRAND_LOGO_URL =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/8a1c5afe1e021c935aa76c667a49f6da.png';

const BADGE_25_URL =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/fbd7ba83e8927076134e47c3f7dd1827.png';

const Header = () => {
    const { lang, setLang, t } = useLanguage();
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [hoveredBrand, setHoveredBrand] = useState(null);
    const [cartOpen, setCartOpen] = useState(false);
    const { totalQty } = useQuoteCart();

    const aboutLinkClass =
        'relative px-1 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-[#1a3a8a] transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:scale-x-0 after:rounded-full after:bg-[#1a4db8] after:transition-transform hover:text-[#1a4db8] hover:after:scale-x-100 xl:text-sm';

    const navLinkClass = ({ isActive }) =>
        cn(
            'relative px-1 py-3 text-[13px] font-bold uppercase tracking-[0.06em] transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:scale-x-0 after:rounded-full after:bg-[#1a4db8] after:transition-transform hover:text-[#1a4db8] hover:after:scale-x-100 xl:text-sm',
            isActive
                ? 'text-[#1a4db8] after:scale-x-100'
                : 'text-[#1a3a8a]',
        );

    const brandFlyout = (brand) => {
        const direct = isDirectCatalogSupplier(brand);
        const directGroups = direct ? brand.specialties || [] : [];
        return (
            <div className="min-w-[200px] py-2">
                <p className="px-4 pb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {brand.shortName || brand.name}
                </p>
                {direct ? (
                    <>
                        {directGroups.map((g) => (
                            <Link
                                key={g.id}
                                to={groupCatalogPath(brand, g)}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-secondary hover:text-brand-blue"
                                onClick={() => {
                                    setProductsOpen(false);
                                    setHoveredBrand(null);
                                }}
                            >
                                <ChevronRight className="h-3.5 w-3.5 text-brand-green" />
                                {lang === 'en' ? g.titleEn : g.titleFr}
                            </Link>
                        ))}
                        <div className="mx-4 my-2 border-t border-border" />
                        <Link
                            to={`/products/${brand.slug}`}
                            className="block px-4 py-2 text-xs font-semibold text-brand-blue hover:underline"
                            onClick={() => {
                                setProductsOpen(false);
                                setHoveredBrand(null);
                            }}
                        >
                            {t.products.viewBrandHub}
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            to={`/products/${brand.slug}/par-specialite`}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-secondary hover:text-brand-blue"
                            onClick={() => {
                                setProductsOpen(false);
                                setHoveredBrand(null);
                            }}
                        >
                            <ChevronRight className="h-3.5 w-3.5 text-brand-green" />
                            {t.products.bySpecialty}
                        </Link>
                        <Link
                            to={`/products/${brand.slug}/par-type`}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-secondary hover:text-brand-blue"
                            onClick={() => {
                                setProductsOpen(false);
                                setHoveredBrand(null);
                            }}
                        >
                            <ChevronRight className="h-3.5 w-3.5 text-brand-green" />
                            {t.products.byType}
                        </Link>
                        <div className="mx-4 my-2 border-t border-border" />
                        <Link
                            to={`/products/${brand.slug}`}
                            className="block px-4 py-2 text-xs font-semibold text-brand-blue hover:underline"
                            onClick={() => {
                                setProductsOpen(false);
                                setHoveredBrand(null);
                            }}
                        >
                            {t.products.viewBrandHub}
                        </Link>
                    </>
                )}
            </div>
        );
    };

    return (
        <header className="sticky top-0 z-50 shadow-sm">
            {/* ── Top utility bar ── */}
            <div className="relative bg-white">
                {/* Blue slanted brand panel (desktop) — flush top/bottom, no white gap */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 hidden w-[min(48%,32rem)] bg-[#0b3d91] lg:block"
                    style={{
                        clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)',
                    }}
                    aria-hidden
                />
                {/* Mobile full-width blue strip for logo */}
                <div className="bg-[#0b3d91] lg:bg-transparent">
                    <div className="relative mx-auto flex max-w-7xl items-center gap-2 px-3 py-0 sm:px-6 lg:h-[5.75rem] lg:gap-5 lg:px-8 lg:py-0">
                        <Link
                            to="/"
                            className="relative z-10 flex h-14 shrink-0 items-center sm:h-[4.1rem] lg:h-full"
                            aria-label="Medicalex — Accueil"
                        >
                            <img
                                src={HEADER_BRAND_LOGO_URL}
                                alt="Medicalex — Votre partenaire santé en Algérie"
                                className="h-full w-auto max-w-[140px] object-contain object-left sm:max-w-[min(72vw,290px)] lg:max-w-[min(82vw,360px)]"
                            />
                        </Link>

                        <div className="relative z-10 ml-auto flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-3 lg:ml-0 lg:max-w-none lg:flex-1 lg:justify-end">
                            {/* Search — full field on md+ */}
                            <div className="hidden min-w-0 flex-1 md:block lg:max-w-[15rem] xl:max-w-[18rem]">
                                <CatalogSearch variant="headerBar" />
                            </div>
                            <div className="shrink-0 md:hidden">
                                <CatalogSearch compact />
                            </div>

                            {/* Language */}
                            <button
                                type="button"
                                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                                className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:h-10 sm:px-3 lg:text-[#1a3a8a] lg:hover:bg-secondary"
                                aria-label="Switch language / Changer de langue"
                            >
                                <Globe className="h-4 w-4 text-white lg:text-[#1a4db8]" strokeWidth={2} />
                                <span className="hidden sm:inline">
                                    <span className={cn(lang === 'fr' && 'font-bold text-white lg:text-[#1a4db8]')}>
                                        FR
                                    </span>
                                    <span className="mx-0.5 text-white/70 lg:text-muted-foreground">/</span>
                                    <span className={cn(lang === 'en' && 'font-bold text-white lg:text-[#1a4db8]')}>
                                        EN
                                    </span>
                                </span>
                                <span className="sm:hidden font-bold text-white lg:text-[#1a4db8]">
                                    {lang === 'fr' ? 'FR' : 'EN'}
                                </span>
                            </button>

                            {/* Cart */}
                            <button
                                type="button"
                                onClick={() => setCartOpen(true)}
                                className="relative -ml-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:-ml-3 sm:h-10 sm:w-10 lg:text-[#1a4db8] lg:hover:bg-secondary"
                                aria-label={t.quoteCart.title}
                            >
                                <ShoppingCart className="h-[1.15rem] w-[1.15rem]" strokeWidth={2.25} />
                                {totalQty > 0 && (
                                    <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#00a651] px-1 text-[11px] font-extrabold leading-none text-white ring-2 ring-white">
                                        {totalQty}
                                    </span>
                                )}
                            </button>

                            {/* 25 years badge */}
                            <img
                                src={BADGE_25_URL}
                                alt={lang === 'fr' ? 'Depuis 25 ans — À vos côtés pour une santé durable' : '25 years — By your side for lasting care'}
                                className="ml-3 hidden h-[5.75rem] w-auto shrink-0 drop-shadow-md lg:block lg:ml-5"
                                draggable={false}
                            />

                            {/* Mobile menu */}
                            <Sheet open={open} onOpenChange={setOpen}>
                                <SheetTrigger
                                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white sm:h-10 sm:w-10 lg:hidden lg:border-input lg:bg-transparent lg:text-brand-blue"
                                    aria-label={t.nav.menu}
                                >
                                    <Menu className="h-5 w-5" strokeWidth={2} />
                                </SheetTrigger>
                                <SheetContent side="right" className="w-80 overflow-y-auto bg-white">
                                    <SheetTitle className="font-display text-lg font-extrabold text-brand-blue">
                                        MEDICALEX
                                    </SheetTitle>
                                    <nav className="mt-8 flex flex-col gap-1" aria-label="Navigation mobile">
                                        <div className="mb-4 px-1 md:hidden">
                                            <CatalogSearch onNavigate={() => setOpen(false)} />
                                        </div>
                                        <NavLink
                                            to="/"
                                            end
                                            onClick={() => setOpen(false)}
                                            className={({ isActive }) =>
                                                cn(
                                                    'rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                                                    isActive
                                                        ? 'bg-secondary text-brand-blue'
                                                        : 'text-foreground/70 hover:bg-secondary',
                                                )
                                            }
                                        >
                                            {t.nav.home}
                                        </NavLink>
                                        <NavLink
                                            to="/#mission"
                                            onClick={() => setOpen(false)}
                                            className="rounded-xl px-4 py-3 text-base font-semibold text-foreground/70 hover:bg-secondary"
                                        >
                                            {t.nav.about}
                                        </NavLink>

                                        <Collapsible defaultOpen className="rounded-xl">
                                            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold text-foreground/70 hover:bg-secondary">
                                                {t.nav.products}
                                                <ChevronDown className="h-4 w-4" />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className="space-y-1 pb-2 pl-2">
                                                <Link
                                                    to="/products"
                                                    onClick={() => setOpen(false)}
                                                    className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-blue"
                                                >
                                                    {t.products.allSuppliers}
                                                </Link>
                                                {brands.map((brand) => (
                                                    <Collapsible key={brand.id}>
                                                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-brand-navy hover:bg-secondary">
                                                            <span>{brand.shortName || brand.name}</span>
                                                            <ChevronDown className="h-3.5 w-3.5" />
                                                        </CollapsibleTrigger>
                                                        <CollapsibleContent className="space-y-0.5 pb-2 pl-4">
                                                            <Link
                                                                to={`/products/${brand.slug}`}
                                                                onClick={() => setOpen(false)}
                                                                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-brand-blue"
                                                            >
                                                                {t.products.viewBrandHub}
                                                            </Link>
                                                            {isDirectCatalogSupplier(brand) ? (
                                                                (brand.specialties || []).map((g) => (
                                                                    <Link
                                                                        key={g.id}
                                                                        to={groupCatalogPath(brand, g)}
                                                                        onClick={() => setOpen(false)}
                                                                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-brand-blue"
                                                                    >
                                                                        {lang === 'en' ? g.titleEn : g.titleFr}
                                                                    </Link>
                                                                ))
                                                            ) : (
                                                                <>
                                                                    <Link
                                                                        to={`/products/${brand.slug}/par-specialite`}
                                                                        onClick={() => setOpen(false)}
                                                                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-brand-blue"
                                                                    >
                                                                        {t.products.bySpecialty}
                                                                    </Link>
                                                                    <Link
                                                                        to={`/products/${brand.slug}/par-type`}
                                                                        onClick={() => setOpen(false)}
                                                                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-brand-blue"
                                                                    >
                                                                        {t.products.byType}
                                                                    </Link>
                                                                </>
                                                            )}
                                                        </CollapsibleContent>
                                                    </Collapsible>
                                                ))}
                                            </CollapsibleContent>
                                        </Collapsible>

                                        <NavLink
                                            to="/news"
                                            onClick={() => setOpen(false)}
                                            className={({ isActive }) =>
                                                cn(
                                                    'rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                                                    isActive
                                                        ? 'bg-secondary text-brand-blue'
                                                        : 'text-foreground/70 hover:bg-secondary',
                                                )
                                            }
                                        >
                                            {t.nav.events}
                                        </NavLink>
                                        <NavLink
                                            to="/contact"
                                            onClick={() => setOpen(false)}
                                            className={({ isActive }) =>
                                                cn(
                                                    'rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                                                    isActive
                                                        ? 'bg-secondary text-brand-blue'
                                                        : 'text-foreground/70 hover:bg-secondary',
                                                )
                                            }
                                        >
                                            {t.nav.contact}
                                        </NavLink>

                                        <Link
                                            to="/contact?subject=quote#devis"
                                            onClick={() => setOpen(false)}
                                            className="relative mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#00a651] px-5 text-sm font-bold text-white transition-all hover:bg-[#008f45] active:scale-[0.98]"
                                        >
                                            <User className="h-4 w-4" strokeWidth={2.5} />
                                            {t.nav.quote}
                                        </Link>

                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Secondary nav bar ── */}
            <div className="hidden border-b border-border/80 bg-white lg:block">
                <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                    <nav
                        className="flex items-center gap-6 xl:gap-8"
                        aria-label="Navigation principale"
                    >
                        <NavLink to="/" end className={navLinkClass}>
                            {t.nav.home}
                        </NavLink>
                        <Link to="/#mission" className={aboutLinkClass}>
                            {t.nav.about}
                        </Link>

                        {/* Produits mega-menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => {
                                setProductsOpen(false);
                                setHoveredBrand(null);
                            }}
                        >
                            <Link
                                to="/products"
                                className={cn(
                                    'relative inline-flex items-center gap-1 px-1 py-3 text-[13px] font-bold uppercase tracking-[0.06em] transition-colors xl:text-sm',
                                    productsOpen
                                        ? 'text-[#1a4db8] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:rounded-full after:bg-[#1a4db8]'
                                        : 'text-[#1a3a8a] hover:text-[#1a4db8]',
                                )}
                                aria-expanded={productsOpen}
                                aria-haspopup="true"
                            >
                                {t.nav.products}
                                <ChevronDown
                                    className={cn(
                                        'h-3.5 w-3.5 transition-transform',
                                        productsOpen && 'rotate-180',
                                    )}
                                />
                            </Link>

                            {productsOpen && (
                                <div className="absolute left-0 top-full z-50 pt-1">
                                    <div className="flex overflow-hidden rounded-2xl border border-brand-blue/10 bg-white shadow-xl">
                                        <ul
                                            className="min-w-[220px] border-r border-border py-2"
                                            role="menu"
                                        >
                                            {brands.map((brand) => (
                                                <li
                                                    key={brand.id}
                                                    role="none"
                                                    onMouseEnter={() => setHoveredBrand(brand.id)}
                                                >
                                                    <Link
                                                        to={`/products/${brand.slug}`}
                                                        role="menuitem"
                                                        className={cn(
                                                            'flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold transition-colors',
                                                            hoveredBrand === brand.id
                                                                ? 'bg-secondary text-brand-blue'
                                                                : 'text-brand-navy hover:bg-secondary/60',
                                                        )}
                                                        onClick={() => setProductsOpen(false)}
                                                    >
                                                        <span className="max-w-[160px] truncate uppercase">
                                                            {brand.shortName || brand.name}
                                                        </span>
                                                        <ChevronRight className="h-4 w-4 shrink-0 opacity-50" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="bg-brand-mist/50">
                                            {hoveredBrand ? (
                                                brandFlyout(
                                                    brands.find((b) => b.id === hoveredBrand),
                                                )
                                            ) : (
                                                <div className="flex h-full min-w-[200px] items-center px-5 py-8 text-xs leading-relaxed text-muted-foreground">
                                                    {t.products.menuHint}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink to="/news" className={navLinkClass}>
                            {t.nav.events}
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClass}>
                            {t.nav.contact}
                        </NavLink>
                    </nav>

                </div>
            </div>

            <QuoteCartSheet open={cartOpen} onOpenChange={setCartOpen} />
        </header>
    );
};

export default Header;
