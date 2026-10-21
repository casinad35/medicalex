/// <reference path="../pb_data/types.d.ts" />
/**
 * Idempotent migration: seeds one gallery image for INTEGRA
 * "DuraGen Plus" into product_gallery_images.
 */
migrate(
  (app) => {
    const supplierId = 'integra';
    const productId = 'duragen-plus';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/duragen-plus-JKGAc.avif',
    ];

    const collection = app.findCollectionByNameOrId('product_gallery_images');

    imageUrls.forEach((imageUrl) => {
      const existing = app.findRecordsByFilter(
        'product_gallery_images',
        `supplierId = "${supplierId}" && productId = "${productId}" && imageUrl = "${imageUrl}"`,
      );
      if (existing.length > 0) return;

      const record = new Record(collection);
      record.set('supplierId', supplierId);
      record.set('productId', productId);
      record.set('imageUrl', imageUrl);
      app.save(record);
    });
  },
  (app) => {
    const supplierId = 'integra';
    const productId = 'duragen-plus';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/duragen-plus-JKGAc.avif',
    ];

    imageUrls.forEach((imageUrl) => {
      const records = app.findRecordsByFilter(
        'product_gallery_images',
        `supplierId = "${supplierId}" && productId = "${productId}" && imageUrl = "${imageUrl}"`,
      );
      records.forEach((r) => app.delete(r));
    });
  },
);
