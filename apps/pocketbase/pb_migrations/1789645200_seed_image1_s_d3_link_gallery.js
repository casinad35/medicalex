/// <reference path="../pb_data/types.d.ts" />

// Owner-added gallery image for KARL STORZ "IMAGE1 S D3-LINK" (réf. TC302),
// chosen via the visual editor's assisted image picker on the product page.
// Seeded here so public/live visitors see it too (product_gallery_images is
// the shared, realtime-synced store used by ProductGallery).
migrate(
  (app) => {
    const imageUrl =
      "https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_comb_3642755-7hP88.webp";
    // Idempotent: the visual editor's observer may have already persisted this
    // exact record. Skip creation if it already exists.
    const existing = app.findRecordsByFilter(
      "product_gallery_images",
      "supplierId = 'karl-storz' && productId = 'image1-s-d3-link' && imageUrl = 'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_comb_3642755-7hP88.webp'",
    );
    if (existing && existing.length > 0) return;

    const collection = app.findCollectionByNameOrId("product_gallery_images");
    const record = new Record(collection, {
      supplierId: "karl-storz",
      productId: "image1-s-d3-link",
      imageUrl,
    });
    app.save(record);
  },
  (app) => {
    const records = app.findRecordsByFilter(
      "product_gallery_images",
      "supplierId = 'karl-storz' && productId = 'image1-s-d3-link' && imageUrl = 'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_comb_3642755-7hP88.webp'",
    );
    records.forEach((r) => app.delete(r));
  },
);
