/// <reference path="../pb_data/types.d.ts" />
/**
 * Idempotent migration: seeds one gallery image for KARL STORZ
 * "AUTOCON III 400 High End, 220–240V" (réf. UH400) into product_gallery_images.
 */
migrate(
  (app) => {
    const supplierId = 'karl-storz';
    const productId = 'autocon-iii-400';
    const imageUrl =
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_main_back_uh400-Mwqdp.webp';

    const existing = app.findRecordsByFilter(
      'product_gallery_images',
      `supplierId = "${supplierId}" && productId = "${productId}" && imageUrl = "${imageUrl}"`,
    );

    if (existing.length > 0) return;

    const collection = app.findCollectionByNameOrId('product_gallery_images');
    const record = new Record(collection);
    record.set('supplierId', supplierId);
    record.set('productId', productId);
    record.set('imageUrl', imageUrl);
    app.save(record);
  },
  (app) => {
    const supplierId = 'karl-storz';
    const productId = 'autocon-iii-400';
    const imageUrl =
      'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/pic_prod_main_back_uh400-Mwqdp.webp';

    const records = app.findRecordsByFilter(
      'product_gallery_images',
      `supplierId = "${supplierId}" && productId = "${productId}" && imageUrl = "${imageUrl}"`,
    );
    records.forEach((r) => app.delete(r));
  },
);
