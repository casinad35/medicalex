/// <reference path="../pb_data/types.d.ts" />
/**
 * Idempotent migration: seeds three gallery images for SCHMITZ
 * "Table d’opération universelle DIAMOND® 60 BLK" (réf. 170.6000.1)
 * into product_gallery_images.
 */
migrate(
  (app) => {
    const supplierId = 'schmitz';
    const productId = 'diamond-60-blk';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/schmitz_diamond_versatile_operating_table_for_all_theatre_applications-xq1Xw.webp',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/5_f68c3f6e-2b09-488a-95f1-ff67d2b0b72e-zs8ro.webp',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/69936-14943217-Bjiw9.webp',
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
    const supplierId = 'schmitz';
    const productId = 'diamond-60-blk';
    const imageUrls = [
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/schmitz_diamond_versatile_operating_table_for_all_theatre_applications-xq1Xw.webp',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/5_f68c3f6e-2b09-488a-95f1-ff67d2b0b72e-zs8ro.webp',
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/69936-14943217-Bjiw9.webp',
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
