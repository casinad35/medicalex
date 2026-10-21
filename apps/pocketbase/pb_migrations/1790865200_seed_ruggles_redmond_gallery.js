migrate((app) => {
  const collection = app.findCollectionByNameOrId('product_gallery_images');
  if (!collection) return;

  const supplierId = 'integra';
  const productId = 'ruggles-redmond';

  const images = [
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-suction-tubes-accessories-1CN0J.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-retractors-Bxw1k.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-other-operating-instruments-RRgde.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-microsurgery-7uono.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-kerrisons-IKVEJ.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-curettes-nsuqs.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-access-instruments-smQL9.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-buzz-bipolar-forceps-yGXV6.avif',
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
    `supplierId = "integra" && productId = "ruggles-redmond"`,
  );
  const toRemove = new Set([
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-suction-tubes-accessories-1CN0J.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-retractors-Bxw1k.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-other-operating-instruments-RRgde.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-microsurgery-7uono.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-kerrisons-IKVEJ.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-curettes-nsuqs.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-access-instruments-smQL9.avif',
    'https://horizons-cdn.hostinger.com/fbf79154-683c-421f-8c67-dba00d030ed9/ruggles-buzz-bipolar-forceps-yGXV6.avif',
  ]);
  existing.forEach((r) => {
    if (toRemove.has(r.get('imageUrl'))) app.delete(r);
  });
});
