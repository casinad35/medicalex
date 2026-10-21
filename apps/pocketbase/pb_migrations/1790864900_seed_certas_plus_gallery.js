migrate((app) => {
  const collection = app.findCollectionByNameOrId('product_gallery_images');
  if (!collection) return;

  const supplierId = 'integra';
  const productId = 'certas-plus';

  const images = [
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/codman_certas-PBYx8.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/converted-2-Mbrd0.jpg',
  ];

  // Skip any already-persisted images so this is idempotent.
  const existing = app.findRecordsByFilter(
    'product_gallery_images',
    `supplierId = "${supplierId}" && productId = "${productId}"`,
  );
  const existingUrls = new Set(existing.map((r) => r.get('imageUrl')));

  images.forEach((url) => {
    if (existingUrls.has(url)) return;
    const record = new Record(collection, {
      supplierId,
      productId,
      imageUrl: url,
    });
    app.save(record);
  });
}, (app) => {
  const existing = app.findRecordsByFilter(
    'product_gallery_images',
    `supplierId = "integra" && productId = "certas-plus"`,
  );
  existing.forEach((r) => {
    const url = r.get('imageUrl');
    if (
      url ===
        'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/codman_certas-PBYx8.avif' ||
      url ===
        'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/converted-2-Mbrd0.jpg'
    ) {
      app.delete(r);
    }
  });
});
