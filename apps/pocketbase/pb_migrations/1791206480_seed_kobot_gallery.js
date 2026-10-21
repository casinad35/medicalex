/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId('product_gallery_images');
    if (!collection) return;

    const supplierId = 'rocamed';
    const productId = 'kobot';
    const imageUrl =
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/kobot-t0pU2.webp';

    // Skip if already persisted (idempotent).
    const existing = app.findRecordsByFilter(
      'product_gallery_images',
      `supplierId = "${supplierId}" && productId = "${productId}" && imageUrl = "${imageUrl}"`,
    );
    if (existing.length > 0) return;

    const record = new Record(collection, {
      supplierId,
      productId,
      imageUrl,
    });
    app.save(record);
  },
  (app) => {
    const existing = app.findRecordsByFilter(
      'product_gallery_images',
      `supplierId = "rocamed" && productId = "kobot" && imageUrl = "https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/kobot-t0pU2.webp"`,
    );
    existing.forEach((r) => app.delete(r));
  },
);
