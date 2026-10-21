/// <reference path="../pb_data/types.d.ts" />

// Owner-added gallery images for KARL STORZ "TELE PACK+" (réf. TP101), chosen
// via the visual editor's assisted image picker on the product page.
// Seeded here so public/live visitors see them too (product_gallery_images is
// the shared, realtime-synced store used by ProductGallery).
const IMAGES = [
  "https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_main_oblique_tp101-1-yCvwF.webp",
  "https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_det_oblique_tp101-1-yWdAI.webp",
  "https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_main_back_tp101-1-PyMJv.webp",
];

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("product_gallery_images");
    IMAGES.forEach((imageUrl) => {
      // Idempotent: the visual editor's observer may have already persisted
      // this exact record. Skip creation if it already exists.
      const existing = app.findRecordsByFilter(
        "product_gallery_images",
        `supplierId = 'karl-storz' && productId = 'tele-pack-plus' && imageUrl = '${imageUrl}'`,
      );
      if (existing && existing.length > 0) return;

      const record = new Record(collection, {
        supplierId: "karl-storz",
        productId: "tele-pack-plus",
        imageUrl,
      });
      app.save(record);
    });
  },
  (app) => {
    IMAGES.forEach((imageUrl) => {
      const records = app.findRecordsByFilter(
        "product_gallery_images",
        `supplierId = 'karl-storz' && productId = 'tele-pack-plus' && imageUrl = '${imageUrl}'`,
      );
      records.forEach((r) => app.delete(r));
    });
  },
);
