/// <reference path="../pb_data/types.d.ts" />

// Route every new quote / contact request internally to the Medicalex inbox.
// Fires after a quote_requests record is successfully created and emails the
// full submission to contact@medi-calex.com. Failure to send is logged but
// never aborts the record creation (the visitor already succeeded).
onRecordAfterCreateSuccess((e) => {
  const r = e.record;

  const subjectMap = {
    quote: "Demande de devis",
    technical: "Demande technique",
    general: "Demande generale",
  };
  const subjectLabel = subjectMap[r.get("subject")] || "Demande";

  const name = r.get("name") || "";
  const hospital = r.get("hospital") || "—";
  const specialty = r.get("specialty") || "—";
  const email = r.get("email") || "";
  const phone = r.get("phone") || "—";
  const messageBody = r.get("message") || "—";
  const created = r.get("created") || "";

  const html = `
    <h2 style="margin:0 0 12px;color:#1d3a78;">${subjectLabel} — Medicalex</h2>
    <p style="margin:0 0 10px;color:#444;">Nouvelle demande recue depuis le site web.</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;color:#222;">
      <tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600;">Nom</td><td style="padding:6px 12px;border:1px solid #eee;">${name}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600;">Etablissement</td><td style="padding:6px 12px;border:1px solid #eee;">${hospital}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600;">Specialite</td><td style="padding:6px 12px;border:1px solid #eee;">${specialty}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600;">Email</td><td style="padding:6px 12px;border:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600;">Telephone</td><td style="padding:6px 12px;border:1px solid #eee;">${phone}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600;">Sujet</td><td style="padding:6px 12px;border:1px solid #eee;">${subjectLabel}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #eee;font-weight:600;">Date</td><td style="padding:6px 12px;border:1px solid #eee;">${created}</td></tr>
    </table>
    <h3 style="margin:16px 0 6px;color:#1d3a78;">Message</h3>
    <pre style="white-space:pre-wrap;font-family:Arial,sans-serif;font-size:14px;color:#222;border:1px solid #eee;padding:12px;border-radius:8px;background:#fafafa;">${messageBody}</pre>
    <p style="margin-top:16px;color:#888;font-size:12px;">Message automatique genere par le formulaire de contact du site Medicalex.</p>
  `;

  const mail = new MailerMessage({
    from: { name: "Site Medicalex" },
    to: [{ address: "contact@medi-calex.com" }],
    subject: `[${subjectLabel}] ${name}`.trim(),
    html: html,
    headers: email ? { "Reply-To": email } : {},
  });

  try {
    $app.newMailClient().send(mail);
  } catch (err) {
    $app
      .logger()
      .error(
        "quote request notification email failed",
        "to",
        "contact@medi-calex.com",
        "err",
        String(err),
      );
  }

  e.next();
}, "quote_requests");
