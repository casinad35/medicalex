/// <reference path="../pb_data/types.d.ts" />
/**
 * Idempotent migration: seeds three gallery images for Dr. Mach
 * "Mach LED 8MC" (product id scialytique-8mc) into product_gallery_images.
 */
migrate(
  (app) => {
    const supplierId = 'dr-mach';
    const productId = 'scialytique-8mc';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/led_8-2-Ez1af.png',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/led_6_8-2-F3m7g.png',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/led_8-1-9f6eE.png',
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
    const supplierId = 'dr-mach';
    const productId = 'scialytique-8mc';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/led_8-2-Ez1af.png',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/led_6_8-2-F3m7g.png',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/led_8-1-9f6eE.png',
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
