import React from 'react';
import { useParams } from 'react-router-dom';
import BrowseModePage from '@/pages/BrowseModePage';
import CategoryPage from '@/pages/CategoryPage';
import ProductDetailPage from '@/pages/ProductDetailPage';

const MODES = new Set(['par-specialite', 'par-type']);

/** /products/:supplierId/:seg  → mode hub OR legacy category grid */
export function CatalogSegPage() {
  const { browseMode } = useParams();
  if (MODES.has(browseMode)) return <BrowseModePage />;
  return <CategoryPage />;
}

/** /products/:supplierId/:seg/:seg2 → group products OR legacy product detail */
export function CatalogSeg2Page() {
  const { browseMode } = useParams();
  if (MODES.has(browseMode)) return <CategoryPage />;
  return <ProductDetailPage />;
}

/** /products/:supplierId/:mode/:group/:product */
export function CatalogProductPage() {
  return <ProductDetailPage />;
}
