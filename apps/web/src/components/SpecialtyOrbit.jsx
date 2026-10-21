import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LOGO_CENTER =
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/5d018b2178806a47e4d7447203205fa7.png';

/**
 * Specialty image bubbles around the central Medicalex logo.
 * `cx`/`cy` = bubble center in % of the orbit box.
 * `size` = diameter in % (mixed large / small for depth).
 *
 * Animation layers (kept independent on purpose):
 * - entrance  : outer wrapper, scale 0 -> 1, plays once
 * - floating  : inner wrapper, slow y/x keyframe loop (never restarts on hover)
 * - hover     : inner wrapper `scale` only — every bubble converges to the
 *               same hovered diameter (HOVER_TARGET), while the two nearest
 *               neighbours shrink slightly (NEIGHBOR_SCALE) to open up room
 */
const HOVER_TARGET = 26; // % diameter every bubble converges to on hover
const NEIGHBOR_SCALE = 0.93; // subtle 7% shrink for the two nearest bubbles

const BUBBLES = [
    {
        id: 'chirurgie',
        labelFr: 'Chirurgie',
        labelEn: 'Surgery',
        image:
            'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/d18c71f8e4d73e2880d0557d091903fa.png',
        angle: 268,
        size: 24,
        delay: 0,
        floatAmp: 5,
        floatDur: 4.2,
    },
    {
        id: 'anesthesie',
        labelFr: 'Anesthésie',
        labelEn: 'Anesthesia',
        image:
            'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/5c246cf4fc9982b7d32295bdc4bb779d.png',
        angle: 312,
        size: 17,
        delay: 0.1,
        floatAmp: 4,
        floatDur: 3.4,
    },
    {
        id: 'urologie',
        labelFr: 'Urologie',
        labelEn: 'Urology',
        image:
            'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/e30672dc93eb4b2bbfa697e70ee8ce86.png',
        angle: 355,
        size: 22,
        delay: 0.18,
        floatAmp: 5,
        floatDur: 4.8,
    },
    {
        id: 'neuro',
        labelFr: 'Neurochirurgie',
        labelEn: 'Neurosurgery',
        image:
            'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/d69af16a42fa78bc7379fbac48bd9c4e.png',
        angle: 38,
        size: 18,
        delay: 0.26,
        floatAmp: 4.5,
        floatDur: 3.8,
    },
    {
        id: 'bloc',
        labelFr: 'Équipement de bloc',
        labelEn: 'OR equipment',
        image:
            'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/08828759ecb38951f36d8a029fb981a9.png',
        angle: 82,
        size: 24,
        delay: 0.34,
        floatAmp: 5.5,
        floatDur: 5.1,
    },
    {
        id: 'endoscopie',
        labelFr: 'Endoscopie',
        labelEn: 'Endoscopy',
        image:
            'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/751efa6f6bab0eed1021d7dc00859c2b.png',
        angle: 128,
        size: 20,
        delay: 0.42,
        floatAmp: 4.5,
        floatDur: 4.0,
    },
    {
        id: 'energie',
        labelFr: 'Énergie',
        labelEn: 'Energy',
        image:
            'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/2ed462c045e66fc8f36f726fbca751c4.png',
        angle: 175,
        size: 20,
        delay: 0.5,
        floatAmp: 3.5,
        floatDur: 3.2,
    },
    {
        id: 'gyneco',
        labelFr: 'Gynécologie',
        labelEn: 'Gynecology',
        image:
            'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/8093e2cc6ca0368dfd9ad498dbd597ae.png',
        angle: 220,
        size: 21,
        delay: 0.58,
        floatAmp: 5,
        floatDur: 4.5,
    },
].map((b) => {
    // Tighter orbit so bubbles sit closer to the center logo
    const radius = 30 + (b.size - 20) * 0.28;
    const rad = (b.angle * Math.PI) / 180;
    const cx = 50 + radius * Math.cos(rad);
    const cy = 50 + radius * Math.sin(rad);
    const half = b.size / 2;
    return {
        ...b,
        cx,
        cy,
        top: cy - half,
        left: cx - half,
        // stable keyframe references so the float loop never restarts
        floatY: [0, -b.floatAmp, 0],
        floatX: [0, b.floatAmp * 0.35, 0],
        floatTransition: {
            y: {
                delay: 0.7 + b.delay,
                duration: b.floatDur,
                repeat: Infinity,
                ease: 'easeInOut',
            },
            x: {
                delay: 0.9 + b.delay * 1.2,
                duration: b.floatDur * 1.15,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };
});

// Per-bubble hover scale so every bubble converges to the same hovered diameter
BUBBLES.forEach((b) => {
    b.hoverScale = HOVER_TARGET / b.size;
});

// Two angularly-nearest neighbours per bubble (circular distance, wrap-around)
const NEIGHBORS = {};
for (const a of BUBBLES) {
    const sorted = BUBBLES.filter((o) => o.id !== a.id)
        .map((o) => {
            let d = Math.abs(a.angle - o.angle) % 360;
            if (d > 180) d = 360 - d;
            return { id: o.id, d };
        })
        .sort((p, q) => p.d - q.d);
    NEIGHBORS[a.id] = new Set([sorted[0].id, sorted[1].id]);
}

const SpecialtyOrbit = ({ className }) => {
    const { lang } = useLanguage();
    const reduceMotion = useReducedMotion();
    const [hovered, setHovered] = React.useState(null);

    const scaleFor = (b) => {
        if (reduceMotion) return 1;
        if (hovered === b.id) return b.hoverScale;
        if (hovered && NEIGHBORS[hovered]?.has(b.id)) return NEIGHBOR_SCALE;
        return 1;
    };

    return (
        <div
            className={cn(
                'relative mx-auto aspect-square w-full max-w-[560px] lg:max-w-[520px] xl:max-w-[560px]',
                className,
            )}
            role="img"
            aria-label={
                lang === 'en'
                    ? 'Medical specialties around Medicalex'
                    : 'Spécialités médicales autour de Medicalex'
            }
        >
            {/* Soft glow rings */}
            <div className="pointer-events-none absolute inset-[8%] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute inset-[18%] rounded-full border border-white/5" />
            <div
                className="pointer-events-none absolute inset-[12%] rounded-full opacity-40"
                style={{
                    background:
                        'radial-gradient(circle, rgba(0,200,120,0.18) 0%, transparent 70%)',
                }}
            />

            {/* Thin connecting lines from center to each bubble */}
            <svg
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
            >
                {BUBBLES.map((b) => (
                    <line
                        key={b.id}
                        x1="50"
                        y1="50"
                        x2={b.cx}
                        y2={b.cy}
                        stroke="rgba(255,255,255,0.32)"
                        strokeWidth="0.22"
                        vectorEffect="non-scaling-stroke"
                    />
                ))}
            </svg>

            {/* Center brand disc — independent animation, subtle light sweep */}
            <div className="absolute left-1/2 top-1/2 z-20 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white p-2.5 shadow-2xl shadow-black/30 ring-4 ring-white/40 sm:p-3.5"
                    initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <img
                        src={LOGO_CENTER}
                        alt="Medicalex"
                        className="h-full w-full object-contain"
                    />
                    {/* Soft light sweep across the polished disc */}
                    {!reduceMotion && (
                        <>
                            <span className="medicalex-sheen" aria-hidden />
                            <span
                                className="medicalex-sheen medicalex-sheen--alt"
                                aria-hidden
                            />
                        </>
                    )}
                </motion.div>
            </div>

            {/* Specialty image bubbles — non-clickable */}
            {BUBBLES.map((b) => {
                const label = lang === 'en' ? b.labelEn : b.labelFr;
                const isHovered = hovered === b.id;
                return (
                    <motion.div
                        key={b.id}
                        className="absolute"
                        style={{
                            top: `${b.top}%`,
                            left: `${b.left}%`,
                            width: `${b.size}%`,
                            zIndex: isHovered ? 30 : 10,
                        }}
                        initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: 0.12 + b.delay,
                            duration: 0.45,
                            ease: 'easeOut',
                        }}
                        onMouseEnter={() => setHovered(b.id)}
                        onMouseLeave={() =>
                            setHovered((h) => (h === b.id ? null : h))
                        }
                    >
                        <motion.div
                            className="aspect-square w-full"
                            animate={{
                                scale: scaleFor(b),
                                y: b.floatY,
                                x: b.floatX,
                            }}
                            transition={{
                                scale: {
                                    duration: 1.15,
                                    ease: [0.4, 0, 0.2, 1],
                                },
                                ...b.floatTransition,
                            }}
                        >
                            <div
                                className="h-full w-full overflow-hidden rounded-full shadow-lg shadow-black/30 ring-2 ring-white/50 transition-shadow duration-300 hover:shadow-xl hover:ring-white/80"
                            >
                                <img
                                    src={b.image}
                                    alt={label}
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default SpecialtyOrbit;
