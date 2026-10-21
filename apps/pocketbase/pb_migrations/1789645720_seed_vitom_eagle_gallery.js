/// <reference path="../pb_data/types.d.ts" />

// Owner-added gallery images for KARL STORZ "VITOM EAGLE" (réf. TH201), chosen
// via the visual editor's assisted image picker on the product page.
// Seeded here so public/live visitors see them too (product_gallery_images is
// the shared, realtime-synced store used by ProductGallery).
const IMAGES = [
  "https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_comb_4451358-Dwcul.webp",
  "https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_comb_4080694-CzB13.webp",
];

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("product_gallery_images");
    IMAGES.forEach((imageUrl) => {
      // Idempotent: the visual editor's observer may have already persisted
      // this exact record. Skip creation if it already exists.
      const existing = app.findRecordsByFilter(
        "product_gallery_images",
        `supplierId = 'karl-storz' && productId = 'vitom-eagle' && imageUrl = '${imageUrl}'`,
      );
      if (existing && existing.length > 0) return;

      const record = new Record(collection, {
        supplierId: "karl-storz",
        productId: "vitom-eagle",
        imageUrl,
      });
      app.save(record);
    });
  },
  (app) => {
    IMAGES.forEach((imageUrl) => {
      const records = app.findRecordsByFilter(
        "product_gallery_images",
        `supplierId = 'karl-storz' && productId = 'vitom-eagle' && imageUrl = '${imageUrl}'`,
      );
      records.forEach((r) => app.delete(r));
    });
  },
);
