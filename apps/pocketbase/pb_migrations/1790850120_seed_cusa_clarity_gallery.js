/// <reference path="../pb_data/types.d.ts" />
/**
 * Idempotent migration: seeds three gallery images for INTEGRA
 * "CUSA Clarity" into product_gallery_images.
 */
migrate(
  (app) => {
    const supplierId = 'integra';
    const productId = 'cusa-clarity';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cusaa-r-clarity-handpiece-6CR5B.avif',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cusa-clarity-23-khz-tips-6Zh12.avif',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cusa-clarity-36-khz-tips-UAhZJ.avif',
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
    const productId = 'cusa-clarity';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cusaa-r-clarity-handpiece-6CR5B.avif',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cusa-clarity-23-khz-tips-6Zh12.avif',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/cusa-clarity-36-khz-tips-UAhZJ.avif',
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
