/// <reference path="../pb_data/types.d.ts" />

// Owner-added product gallery images. The site owner adds extra gallery
// photos per product from the "Select and edit" visual editor; these must be
// visible to public/live visitors, so the collection is publicly readable.
// Writes are also public because the visual-editor session is not PocketBase
// authenticated; the add/remove UI is gated client-side to edit mode only.
migrate(
  (app) => {
    const collection = new Collection({
      type: "base",
      name: "product_gallery_images",
      listRule: "",
      viewRule: "",
      createRule: "",
      updateRule: "",
      deleteRule: "",
      fields: [
        { name: "supplierId", type: "text", required: true, max: 60 },
        { name: "productId", type: "text", required: true, max: 120 },
        { name: "imageUrl", type: "url", required: true },
        { name: "created", type: "autodate", onCreate: true, onUpdate: false },
        { name: "updated", type: "autodate", onCreate: true, onUpdate: true },
      ],
    });
    collection.indexes = [
      "CREATE UNIQUE INDEX idx_product_gallery_unique ON product_gallery_images (supplierId, productId, imageUrl)",
    ];
    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("product_gallery_images");
    app.delete(collection);
  },
);
