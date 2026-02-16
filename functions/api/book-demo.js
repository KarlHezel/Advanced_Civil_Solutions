// functions/api/book-demo.js

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });
}

// Optional: lock CORS to your domains (recommended).
const ALLOWED_ORIGINS = new Set([
  "http://localhost:5173",
  "http://localhost:3000",
  // "https://advancedcivilsolutionsllc.com",
  // "https://ask-acs.com",
]);

function corsHeaders(origin) {
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return {};
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
  };
}

async function getAccessToken(env) {
  const tenantId = env.M365_TENANT_ID;
  const clientId = env.M365_CLIENT_ID;
  const clientSecret = env.M365_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Missing Microsoft 365 env vars (TENANT/CLIENT/SECRET).");
  }

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const body = new URLSearchParams();
  body.set("client_id", clientId);
  body.set("client_secret", clientSecret);
  body.set("grant_type", "client_credentials");
  body.set("scope", "https://graph.microsoft.com/.default");

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

function sanitize(v) {
  return String(v ?? "").trim();
}

/**
 * Decide which shared mailbox to use.
 * - Default: Sales (sales-to-sales)
 * - Future: Contact (for general inquiries)
 *
 * You can control this with:
 *   env.SALES_MAILBOX   (default sales@advancedcivilsolutionsllc.com)
 *   env.CONTACT_MAILBOX (default contact@advancedcivilsolutionsllc.com)
 *
 * And a payload field:
 *   payload.route = "sales" | "contact"   (optional)
 */
function chooseMailbox(env, payload) {
  const salesMailbox = env.SALES_MAILBOX || "sales@advancedcivilsolutionsllc.com";
  const contactMailbox = env.CONTACT_MAILBOX || "contact@advancedcivilsolutionsllc.com";

  // Only allow known routes (prevents mailbox spoofing)
  const route = sanitize(payload?.route).toLowerCase();

  if (route === "contact") return { mailbox: contactMailbox, route: "contact" };
  // Default to sales
  return { mailbox: salesMailbox, route: "sales" };
}

export async function onRequestOptions({ request }) {
  const origin = request.headers.get("Origin");
  return new Response(null, {
    status: 204,
    headers: { ...corsHeaders(origin) },
  });
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin");
  const cHeaders = corsHeaders(origin);

  if (origin && Object.keys(cHeaders).length === 0) {
    return json({ ok: false, error: "Origin not allowed" }, 403);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400, cHeaders);
  }

  // Honeypot
  if (payload?.website && String(payload.website).trim() !== "") {
    return json({ ok: true, status: 200, data: { message: "Queued." } }, 200, cHeaders);
  }

  const name = sanitize(payload?.name);
  const company = sanitize(payload?.company);
  const email = sanitize(payload?.email);
  const phone = sanitize(payload?.phone);
  const comment = sanitize(payload?.comment);

  if (!name || !company || !email || !phone || !comment) {
    return json({ ok: false, error: "Missing required fields" }, 400, cHeaders);
  }

  // ✅ Choose which shared mailbox we’re sending *as* and *to*
  const { mailbox: targetMailbox, route } = chooseMailbox(env, payload);

  const subject =
    route === "contact"
      ? `New website contact — ${company}`
      : `New website inquiry — ${company}`;

  const bodyText =
`New website ${route === "contact" ? "contact" : "inquiry"} received.

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Objective / Notes:
${comment}

— Sent from Advanced Civil Solutions website form.`;

  try {
    const token = await getAccessToken(env);

    // Send AS the shared mailbox (app permission or delegated w/ Send As)
    const sendMailUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
      targetMailbox
    )}/sendMail`;

    const graphRes = await fetch(sendMailUrl, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: "Text", content: bodyText },

          // ✅ Route-to mailbox (keeps your sales-to-sales pattern)
          toRecipients: [{ emailAddress: { address: targetMailbox } }],

          // ✅ Replies go back to the website visitor
          replyTo: [{ emailAddress: { address: email, name } }],
        },
        saveToSentItems: true,
      }),
    });

    if (!graphRes.ok) {
      const errText = await graphRes.text();
      return json(
        { ok: false, error: "Graph sendMail failed", details: errText },
        502,
        cHeaders
      );
    }

    return json(
      {
        ok: true,
        status: 200,
        data: {
          message: "Request received. Team has been notified.",
          route,
          sentTo: targetMailbox,
        },
      },
      200,
      cHeaders
    );
  } catch (e) {
    return json({ ok: false, error: e.message || "Server error" }, 500, cHeaders);
  }
}
