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

// Lock CORS to trusted frontends
const ALLOWED_ORIGINS = new Set([
  // local dev
  "http://localhost:5173",
  "http://localhost:3000",

  // prod domains
  "https://advancedcivilsolutionsllc.com",
  "https://www.advancedcivilsolutionsllc.com",
  "https://ask-acs.com",
  "https://www.ask-acs.com",

  // Cloudflare Pages default domain (exact)
  "https://advanced-civil-solutions.pages.dev",
]);

function corsHeaders(origin) {
  // Only set CORS headers when origin is allowed
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return {};
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "86400",
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

  if (!data.access_token) throw new Error("Token error: missing access_token.");
  return data.access_token;
}

function sanitize(v) {
  return String(v ?? "").trim();
}

// Minimal email sanity check (avoid being overly strict)
function isValidEmail(email) {
  const e = String(email || "").trim();
  if (e.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * Decide which shared mailbox to use.
 * - Default: Sales (sales-to-sales)
 * - Future: Contact (for general inquiries)
 *
 * You can control this with:
 *   env.SALES_MAILBOX    (default sales@advancedcivilsolutionsllc.com)
 *   env.CONTACT_MAILBOX  (default contact@advancedcivilsolutionsllc.com)
 *
 * And a payload field:
 *   payload.route = "sales" | "contact"   (optional)
 */
function chooseMailbox(env, payload) {
  const salesMailbox = env.SALES_MAILBOX || "sales@advancedcivilsolutionsllc.com";
  const contactMailbox =
    env.CONTACT_MAILBOX || "contact@advancedcivilsolutionsllc.com";

  // Only allow known routes (prevents mailbox spoofing)
  const route = sanitize(payload?.route).toLowerCase();
  if (route === "contact") return { mailbox: contactMailbox, route: "contact" };

  // Default to sales
  return { mailbox: salesMailbox, route: "sales" };
}

function buildConfirmationHtml({ name }) {
  const safeName = sanitize(name).slice(0, 80);
  const greeting = safeName
    ? `Thank you, <strong>${escapeHtml(safeName)}</strong>.`
    : `Thank you for contacting <strong>Advanced Civil Solutions</strong>.`;

  return `
  <div style="font-family: 'Source Serif 4', Georgia, serif; background:#f7f7f5; padding:40px;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; padding:40px; border-radius:12px; border:1px solid #e6e2d6;">
      <h2 style="margin:0 0 14px 0; color:#000000; font-weight:600;">Inquiry Received</h2>

      <p style="color:#000000; line-height:1.6; margin:0 0 14px 0;">
        ${greeting}
      </p>

      <p style="color:#000000; line-height:1.6; margin:0 0 14px 0;">
        Your inquiry has been received and is currently under review.
        A member of our team will respond within one business day.
      </p>

      <p style="color:#000000; line-height:1.6; margin:0;">
        If your request is time-sensitive, you may reply directly to this email.
      </p>

      <hr style="margin:26px 0; border:none; border-top:1px solid #e6e2d6;" />

      <p style="font-size:14px; color:#4b5563; margin:0;">
        Advanced Civil Solutions, LLC<br/>
        Federal Contracting Advisory &amp; Strategy<br/>
        CAGE: 0Q564<br/>
        <a href="https://advancedcivilsolutionsllc.com" style="color:#b89a3d; text-decoration:none;">
          https://advancedcivilsolutionsllc.com
        </a>
      </p>
    </div>
  </div>`;
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

  // Block browser origins not on the allowlist
  // (Note: curl/Postman have no Origin header, and will still work.)
  if (origin && Object.keys(cHeaders).length === 0) {
    return json({ ok: false, error: "Origin not allowed" }, 403);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400, cHeaders);
  }

  // Honeypot (bots often fill this)
  if (payload?.website && String(payload.website).trim() !== "") {
    return json(
      { ok: true, status: 200, data: { message: "Queued." } },
      200,
      cHeaders
    );
  }

  const name = sanitize(payload?.name);
  const company = sanitize(payload?.company);
  const email = sanitize(payload?.email);
  const phone = sanitize(payload?.phone);
  const comment = sanitize(payload?.comment);

  if (!name || !company || !email || !phone || !comment) {
    return json({ ok: false, error: "Missing required fields" }, 400, cHeaders);
  }

  if (!isValidEmail(email)) {
    return json({ ok: false, error: "Invalid email format" }, 400, cHeaders);
  }

  // Choose which shared mailbox we’re sending *as* and *to*
  const { mailbox: targetMailbox, route } = chooseMailbox(env, payload);

  const subject =
    route === "contact"
      ? `New website contact — ${company}`
      : `New website inquiry — ${company}`;

  const bodyText = `New website ${route === "contact" ? "contact" : "inquiry"} received.

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Objective / Notes:
${comment}

— Sent from Advanced Civil Solutions website form.`;

  try {
    const token = await getAccessToken(env);

    // Send AS the shared mailbox (works with Mail.Send Application permission)
    const sendMailUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
      targetMailbox
    )}/sendMail`;

    // 1) INTERNAL: Route-to mailbox (sales-to-sales pattern)
    const internalRes = await fetch(sendMailUrl, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: "Text", content: bodyText },

          // Route-to mailbox (sales-to-sales pattern)
          toRecipients: [{ emailAddress: { address: targetMailbox } }],

          // Replies go back to the website visitor (internal thread convenience)
          replyTo: [{ emailAddress: { address: email, name } }],
        },
        saveToSentItems: true,
      }),
    });

    if (!internalRes.ok) {
      const errText = await internalRes.text();
      console.log("Graph sendMail (internal) failed", {
        status: internalRes.status,
        targetMailbox,
        errText,
      });
      return json(
        { ok: false, error: "Graph sendMail failed", details: errText },
        502,
        cHeaders
      );
    }

    // 2) EXTERNAL: Confirmation email to the visitor (only after internal succeeds)
    const confirmSubject = "Inquiry Received – Advanced Civil Solutions";
    const confirmHtml = buildConfirmationHtml({ name });

    const confirmRes = await fetch(sendMailUrl, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: confirmSubject,
          body: { contentType: "HTML", content: confirmHtml },

          // Send to the visitor
          toRecipients: [{ emailAddress: { address: email, name } }],

          // If they reply to the confirmation, it goes to Sales/shared mailbox
          replyTo: [
            {
              emailAddress: {
                address: targetMailbox,
                name: "Advanced Civil Solutions, LLC",
              },
            },
          ],
        },
        saveToSentItems: true,
      }),
    });

    if (!confirmRes.ok) {
      // Don't fail the whole request; internal already succeeded.
      const errText = await confirmRes.text();
      console.log("Graph sendMail (confirmation) failed", {
        status: confirmRes.status,
        targetMailbox,
        errText,
      });

      return json(
        {
          ok: true,
          status: 200,
          data: {
            message:
              "Request received. Team has been notified. (Confirmation email could not be sent.)",
            route,
            sentTo: targetMailbox,
            confirmationSent: false,
          },
        },
        200,
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
          confirmationSent: true,
        },
      },
      200,
      cHeaders
    );
  } catch (e) {
    console.log("Mailer error", { message: e?.message, targetMailbox });
    return json(
      { ok: false, error: e?.message || "Server error" },
      500,
      cHeaders
    );
  }
}
