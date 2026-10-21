import React from 'react';
import { Helmet } from 'react-helmet';
import {
    CalendarDays,
    Clock,
    Video,
    MapPin,
    ExternalLink,
    UserRound,
    Mic2,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProductGallery from '@/components/ProductGallery';
import { useLanguage } from '@/contexts/LanguageContext';

/** Demo placeholders — replace with real photos */
const IMG_ANOL =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/707371021_964514336623287_1933631607557900784_n-ZbLfw.jpg';
const IMG_ANOL_GALLERY_1 =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/707248260_964512903290097_8407264815426921943_n-bnUG3.jpg';
const IMG_ANOL_GALLERY_2 =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/707601471_964512906623430_4376440159916552562_n-aHAj6.jpg';
const IMG_ISGE =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/improve_image_quality_and_light_20260916193952-iPhux.jpeg';
const IMG_ISGE_GALLERY_1 =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/707328584_964490723292315_1269317531245447983_n-3TYm8.jpg';
const IMG_ISGE_GALLERY_2 =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/707235685_964490706625650_726040156469502265_n-xUcpN.jpg';

const IMG_RUBINA =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/81e78ec78f52e36d2df6503427bdbda5.jpg';
const IMG_BRONCHO =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/b25779d630cca99eea444a2a880753d3.jpg';
const IMG_ICG =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/b0b585f162e56329cd8fb007b279d0bb.png';

const IMG_JUNA =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/juna-2026-medicalex-QGKR7.jpg';
const IMG_JUNA_GALLERY_1 =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/juna-2026-CW43n.jpg';

const REG_ICG = 'https://q.me-qr.com/ah88omw0';

const NewsPage = () => {
    const { t, lang } = useLanguage();
    const n = t.news;
    const isEn = lang === 'en';

    const events = [
        {
            id: 'webinar-icg-2026-07-30',
            kind: 'webinar',
            image: IMG_ICG,
            sortKey: '2026-07-30',
            tag: n.e4Tag,
            date: n.e4Date,
            time: n.e4Time,
            kicker: n.e4Kicker,
            title: n.e4Title,
            intro: n.e4Intro,
            highlights: [n.e4H1, n.e4H2, n.e4H3, n.e4H4],
            speakers: [
                { name: n.e4S1Name, role: n.e4S1Role },
                { name: n.e4S2Name, role: n.e4S2Role },
            ],
            registerUrl: REG_ICG,
            alt: isEn
                ? 'KARL STORZ ICG Beyond Boundaries webinar poster'
                : 'Affiche webinaire KARL STORZ ICG Beyond Boundaries',
        },
        {
            id: 'webinar-broncho-2026-06-30',
            kind: 'webinar',
            image: IMG_BRONCHO,
            sortKey: '2026-06-30',
            tag: n.e3Tag,
            date: n.e3Date,
            time: n.e3Time,
            kicker: n.e3Kicker,
            title: n.e3Title,
            intro: n.e3Intro,
            highlights: [n.e3H1, n.e3H2, n.e3H3],
            speakers: [{ name: n.e3S1Name, role: n.e3S1Role }],
            audience: n.e3Audience,
            alt: isEn
                ? 'Pediatric bronchoscopy webinar poster'
                : 'Affiche webinaire bronchoscopie pédiatrique',
        },
        {
            id: 'webinar-rubina-2026-06-24',
            kind: 'webinar',
            image: IMG_RUBINA,
            sortKey: '2026-06-24',
            tag: n.e2Tag,
            date: n.e2Date,
            time: n.e2Time,
            kicker: n.e2Kicker,
            title: n.e2Title,
            intro: n.e2Intro,
            highlights: [n.e2H1, n.e2H2, n.e2H3, n.e2H4, n.e2H5, n.e2H6],
            speakers: [
                { name: n.e2S1Name, role: n.e2S1Role },
                { name: n.e2S2Name, role: n.e2S2Role },
            ],
            alt: isEn
                ? 'KARL STORZ E-Masterclass Rubina webinar poster'
                : 'Affiche webinaire KARL STORZ E-Masterclass Rubina',
        },
        {
            id: 'juna-annaba-2026',
            kind: 'congress',
            image: IMG_JUNA,
            images: [IMG_JUNA_GALLERY_1],
            sortKey: '2026-06-04',
            tag: n.e6Tag,
            date: n.e6Date,
            title: n.e6Title,
            intro: n.e6Intro,
            body: n.e6Body,
            place: n.e6Place,
            alt: isEn
                ? 'Medicalex booth at JUNA Annaba urology congress'
                : 'Stand Medicalex aux Journées Urologiques Nationales d’Annaba (JUNA)',
        },
        {
            id: 'anol-savoer-2026',
            kind: 'congress',
            image: IMG_ANOL,
            images: [IMG_ANOL_GALLERY_1, IMG_ANOL_GALLERY_2],
            sortKey: '2026-05-21',
            tag: n.e1Tag,
            date: n.e1Date,
            title: n.e1Title,
            intro: n.e1Intro,
            body: n.e1Body,
            place: n.e1Place,
            alt: isEn
                ? 'Medicalex booth at ANOL & SAVOER congress'
                : 'Stand Medicalex au congrès ANOL & SAVOER',
        },
        {
            id: 'isge-angol-2026',
            kind: 'congress',
            image: IMG_ISGE,
            images: [IMG_ISGE_GALLERY_1, IMG_ISGE_GALLERY_2],
            sortKey: '2026-05-14',
            tag: n.e5Tag,
            date: n.e5Date,
            title: n.e5Title,
            intro: n.e5Intro,
            body: n.e5Body,
            place: n.e5Place,
            alt: isEn
                ? 'Medicalex at ISGE – ANGOL 2026 congress'
                : 'Medicalex au congrès ISGE – ANGOL 2026',
        },
    ];

    const galleryLabels = {
        galleryAddLabel: n.galleryAddLabel,
        galleryAddHint: n.galleryAddHint,
        galleryAddButton: n.galleryAddButton,
        galleryDialogTitle: n.galleryDialogTitle,
        galleryDialogText: n.galleryDialogText,
        galleryDialogPlaceholder: n.galleryDialogPlaceholder,
        galleryDialogConfirm: n.galleryDialogConfirm,
        galleryDialogCancel: n.galleryDialogCancel,
        galleryDialogInvalid: n.galleryDialogInvalid,
        galleryRemove: n.galleryRemove,
        galleryZoomInHint: n.galleryZoomInHint,
        galleryZoomOutHint: n.galleryZoomOutHint,
        galleryPanHint: n.galleryPanHint,
    };

    return (
        <main>
            <Helmet>
                <title>
                    Actualités & Événements — Congrès et webinaires KARL STORZ | Medicalex Algérie
                </title>
                <meta
                    name="description"
                    content="Actualités SARL Medicalex : congrès JUNA Annaba (4–6 juin), ANOL/SAVOER et ISGE–ANGOL 2026, webinaires KARL STORZ Rubina (24 juin), bronchoscopie pédiatrique (30 juin) et ICG Beyond Boundaries (30 juillet)."
                />
            </Helmet>

            <section className="bg-brand-blue">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <Reveal>
                        <span className="inline-block rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                            {n.label}
                        </span>
                        <h1 className="mt-5 font-display text-4xl font-extrabold text-white sm:text-5xl">
                            {n.title}
                        </h1>
                        <span className="mt-6 block h-1.5 w-24 rounded-full bg-brand-green" />
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                            {n.subtitle}
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="bg-brand-mist py-14 lg:py-20">
                <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
                    {events.map((ev, i) => (
                        <Reveal key={ev.id} delay={Math.min(i * 0.05, 0.2)}>
                            <article
                                id={ev.id}
                                className="overflow-hidden rounded-[1.75rem] border-2 border-brand-blue/10 bg-white shadow-sm"
                            >
                                <div
                                    className={`grid items-stretch gap-0 ${
                                        ev.kind === 'webinar'
                                            ? 'lg:grid-cols-5'
                                            : 'lg:grid-cols-2'
                                    }`}
                                >
                                    <div
                                        className={`relative bg-secondary/40 p-4 sm:p-6 ${
                                            ev.kind === 'webinar' ? 'lg:col-span-2' : ''
                                        }`}
                                    >
                                        <ProductGallery
                                            imageUrl={ev.image}
                                            images={ev.images}
                                            title={ev.title}
                                            aspect={
                                                ev.kind === 'webinar'
                                                    ? 'aspect-[3/4]'
                                                    : 'aspect-[3/2]'
                                            }
                                            labels={galleryLabels}
                                            supplierId="news"
                                            productId={ev.id}
                                            zoomLabel={
                                                isEn ? 'Zoom image' : 'Agrandir l’image'
                                            }
                                            closeLabel={isEn ? 'Close' : 'Fermer'}
                                            prevLabel={
                                                isEn ? 'Previous image' : 'Image précédente'
                                            }
                                            nextLabel={
                                                isEn ? 'Next image' : 'Image suivante'
                                            }
                                        />
                                        <span className="absolute left-8 top-8 z-20 rounded-full bg-brand-green px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                                            {ev.tag}
                                        </span>
                                    </div>

                                    <div
                                        className={`flex flex-col p-6 sm:p-8 lg:p-10 ${
                                            ev.kind === 'webinar' ? 'lg:col-span-3' : ''
                                        }`}
                                    >
                                        {ev.kicker ? (
                                            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                                {ev.kicker}
                                            </p>
                                        ) : null}
                                        <h2 className="mt-1 font-display text-2xl font-extrabold leading-snug text-brand-blue text-balance sm:text-3xl">
                                            {ev.title}
                                        </h2>

                                        <div className="mt-5 flex flex-wrap gap-2.5">
                                            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold text-brand-blue">
                                                <CalendarDays
                                                    className="h-4 w-4 text-brand-green"
                                                    strokeWidth={2}
                                                />
                                                {ev.date}
                                            </span>
                                            {ev.time ? (
                                                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold text-brand-blue">
                                                    <Clock
                                                        className="h-4 w-4 text-brand-green"
                                                        strokeWidth={2}
                                                    />
                                                    {ev.time}
                                                </span>
                                            ) : null}
                                            {ev.kind === 'webinar' ? (
                                                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold text-brand-blue">
                                                    <Video
                                                        className="h-4 w-4 text-brand-green"
                                                        strokeWidth={2}
                                                    />
                                                    {n.liveLabel}
                                                </span>
                                            ) : null}
                                            {ev.place ? (
                                                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold text-brand-blue">
                                                    <MapPin
                                                        className="h-4 w-4 text-brand-green"
                                                        strokeWidth={2}
                                                    />
                                                    {ev.place}
                                                </span>
                                            ) : null}
                                        </div>

                                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                            {ev.intro}
                                        </p>

                                        {ev.body ? (
                                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                                {ev.body}
                                            </p>
                                        ) : null}

                                        {ev.highlights?.length ? (
                                            <div className="mt-6">
                                                <h3 className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                                                    <Mic2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                                                    {n.highlightsTitle}
                                                </h3>
                                                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                                                    {ev.highlights.map((h) => (
                                                        <li
                                                            key={h}
                                                            className="rounded-2xl border border-border bg-brand-mist px-4 py-3 text-sm font-medium leading-snug text-foreground/85"
                                                        >
                                                            {h}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : null}

                                        {ev.speakers?.length ? (
                                            <div className="mt-6">
                                                <h3 className="inline-block rounded-full bg-brand-blue px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                                                    {n.speakersTitle}
                                                </h3>
                                                <div
                                                    className={`mt-4 grid gap-3 ${
                                                        ev.speakers.length > 1
                                                            ? 'sm:grid-cols-2'
                                                            : 'max-w-md'
                                                    }`}
                                                >
                                                    {ev.speakers.map((s) => (
                                                        <div
                                                            key={s.name}
                                                            className="flex items-center gap-3 rounded-2xl border-2 border-brand-blue/10 bg-white p-3.5"
                                                        >
                                                            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                                                                <UserRound
                                                                    className="h-6 w-6"
                                                                    strokeWidth={1.75}
                                                                />
                                                            </span>
                                                            <div>
                                                                <p className="font-display text-sm font-extrabold text-brand-blue sm:text-base">
                                                                    {s.name}
                                                                </p>
                                                                <p className="mt-0.5 text-xs font-medium leading-snug text-muted-foreground">
                                                                    {s.role}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}

                                        {ev.audience ? (
                                            <p className="mt-5 rounded-2xl border border-brand-green/30 bg-brand-green/5 px-4 py-3 text-sm leading-relaxed text-foreground/80">
                                                {ev.audience}
                                            </p>
                                        ) : null}

                                        {ev.registerUrl ? (
                                            <a
                                                href={ev.registerUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-brand-green px-7 text-sm font-bold text-white transition-all hover:bg-brand-green-dark active:scale-[0.98]"
                                            >
                                                {n.registerCta}
                                                <ExternalLink
                                                    className="h-4 w-4"
                                                    strokeWidth={2.5}
                                                />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default NewsPage;
