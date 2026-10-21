import React, { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Demo catalog visual: tries public/catalog-demo/... files first, else inline SVG
 * labelled with product/category name + reference.
 * Replace files under apps/web/public/catalog-demo/ to swap authentic photos.
 */
const EXT = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];

function buildDemoSvg({ title, subtitle, tone = 'blue' }) {
  const fill = tone === 'green' ? '#00A853' : tone === 'navy' ? '#1B2559' : '#2348A0';
  const safeTitle = (title || 'Produit').slice(0, 48);
  const safeSub = (subtitle || '').slice(0, 40);
  const lines = wrapText(safeTitle, 22);
  const y0 = lines.length === 1 ? 118 : lines.length === 2 ? 100 : 86;
  const titleTspans = lines
    .map(
      (line, i) =>
        `<tspan x="400" dy="${i === 0 ? 0 : 28}">${escapeXml(line)}</tspan>`,
    )
    .join('');
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${fill}"/>
      <stop offset="100%" stop-color="#0f1c3d"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <circle cx="640" cy="80" r="120" fill="#ffffff" fill-opacity="0.06"/>
  <circle cx="80" cy="520" r="160" fill="#ffffff" fill-opacity="0.05"/>
  <rect x="48" y="48" width="704" height="504" rx="24" fill="none" stroke="#ffffff" stroke-opacity="0.22" stroke-width="2"/>
  <text x="200" y="72" fill="#ffffff" fill-opacity="0.7" font-family="Montserrat, Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="3">DEMO · MEDICALEX</text>
  <text x="400" y="${y0}" fill="#ffffff" font-family="Montserrat, Arial, sans-serif" font-size="26" font-weight="800" text-anchor="middle">${titleTspans}</text>
  ${
    safeSub
      ? `<text x="400" y="520" fill="#ffffff" fill-opacity="0.95" font-family="DM Sans, Arial, sans-serif" font-size="18" font-weight="600" text-anchor="middle">Réf. ${escapeXml(safeSub)}</text>`
      : ''
  }
  <text x="400" y="556" fill="#ffffff" fill-opacity="0.45" font-family="DM Sans, Arial, sans-serif" font-size="12" text-anchor="middle">Remplacer via public/catalog-demo/</text>
</svg>`)}`;
}

function wrapText(text, max) {
  const words = text.split(/\s+/);
  const lines = [];
  let cur = '';
  words.forEach((w) => {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > max && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = next;
    }
  });
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CatalogImage = ({
  basePath,
  title,
  subtitle = '',
  alt,
  className,
  imgClassName,
  tone = 'blue',
  aspect = 'aspect-[4/3]',
  imageUrl,
}) => {
  const candidates = useMemo(
    () => (basePath ? EXT.map((e) => `${basePath}${e}`) : []),
    [basePath],
  );
  const [idx, setIdx] = useState(0);
  const fallback = useMemo(
    () => buildDemoSvg({ title, subtitle, tone }),
    [title, subtitle, tone],
  );
  const src = imageUrl || (idx < candidates.length ? candidates[idx] : fallback);

  return (
    <div className={cn('relative overflow-hidden bg-brand-navy', aspect, className)}>
      <img
        src={src}
        alt={alt || title}
        className={cn('h-full w-full object-cover', imgClassName)}
        loading="lazy"
        onError={() => setIdx((i) => i + 1)}
      />
    </div>
  );
};

export default CatalogImage;
