/// <reference path="../pb_data/types.d.ts" />
/**
 * Idempotent migration: seeds three gallery images for INTEGRA
 * "MAYFIELD Systems" into product_gallery_images.
 */
migrate(
  (app) => {
    const supplierId = 'integra';
    const productId = 'mayfield-systems';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ghost-full-800x800-fftqg.webp',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/mayfield-pop1-G3nMe.jpg',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/mayfield-pop2-PBWrt.jpg',
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
    const productId = 'mayfield-systems';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ghost-full-800x800-fftqg.webp',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/mayfield-pop1-G3nMe.jpg',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/mayfield-pop2-PBWrt.jpg',
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
