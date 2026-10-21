/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    // Public quote / inquiry requests submitted from the contact form.
    let quotes;
    try {
      quotes = app.findCollectionByNameOrId("quote_requests");
    } catch (_) {
      quotes = new Collection({
        type: "base",
        name: "quote_requests",
        // Public contact form: anyone may submit, only superusers read.
        listRule: null,
        viewRule: null,
        createRule: "",
        updateRule: null,
        deleteRule: null,
        fields: [
          { name: "name", type: "text", required: true, max: 200 },
          { name: "hospital", type: "text", max: 200 },
          { name: "specialty", type: "text", max: 200 },
          { name: "email", type: "email", required: true },
          { name: "phone", type: "text", max: 60 },
          {
            name: "subject",
            type: "select",
            required: true,
            maxSelect: 1,
            values: ["quote", "technical", "general"],
          },
          { name: "message", type: "text", max: 5000 },
          { name: "created", type: "autodate", onCreate: true, onUpdate: false },
          { name: "updated", type: "autodate", onCreate: true, onUpdate: true },
        ],
      });
      app.save(quotes);
    }

    // Newsletter opt-ins (product updates, training, event announcements).
    let newsletter;
    try {
      newsletter = app.findCollectionByNameOrId("newsletter_subscribers");
    } catch (_) {
      newsletter = new Collection({
        type: "base",
        name: "newsletter_subscribers",
        listRule: null,
        viewRule: null,
        createRule: "",
        updateRule: null,
        deleteRule: null,
        fields: [
          { name: "email", type: "email", required: true },
          { name: "created", type: "autodate", onCreate: true, onUpdate: false },
          { name: "updated", type: "autodate", onCreate: true, onUpdate: true },
        ],
        indexes: [
          "CREATE UNIQUE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers (email)",
        ],
      });
      app.save(newsletter);
    }
  },
  (app) => {
    try {
      app.delete(app.findCollectionByNameOrId("quote_requests"));
    } catch (e) {
      if (!e.message.includes("no rows in result set")) throw e;
    }
    try {
      app.delete(app.findCollectionByNameOrId("newsletter_subscribers"));
    } catch (e) {
      if (!e.message.includes("no rows in result set")) throw e;
    }
  },
);
