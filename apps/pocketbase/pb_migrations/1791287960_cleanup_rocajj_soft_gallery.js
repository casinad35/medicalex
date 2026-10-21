/// <reference path="../pb_data/types.d.ts" />

// RocaJJ Soft gallery cleanup.
//
// The preview and production PocketBase databases are separate. On the live
// site the owner had accumulated several `product_gallery_images` rows for
// the `rocajj-soft` product (added through the visual editor before the
// dedup fix), each with a distinct CDN URL but showing the same picture, so
// the live product page rendered many identical thumbnails. Preview was
// already clean, which is why Hostinger looked correct but live did not.
//
// This migration resets the gallery for this single product to exactly one
// canonical image on every environment it runs on. It does not touch any
// other product or collection.
migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId('product_gallery_images');
    if (!collection) return;

    const supplierId = 'rocamed';
    const productId = 'rocajj-soft';
    const canonicalUrl =
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/rocamed-jj-soft-stiff-kit-i3ZxK.png';

    // Remove every gallery row previously persisted for this product,
    // whatever its URL (duplicates and strays alike).
    const existing = app.findRecordsByFilter(
      'product_gallery_images',
      `supplierId = "${supplierId}" && productId = "${productId}"`,
    );
    existing.forEach((r) => app.delete(r));

    // Re-insert a single canonical row so the gallery is consistent and
    // idempotent across preview and production.
    const record = new Record(collection, {
      supplierId,
      productId,
      imageUrl: canonicalUrl,
    });
    app.save(record);
  },
  (app) => {
    // No reversible prior state to restore — the previous live state was the
    // broken one this migration repairs. Intentionally a no-op.
  },
);
