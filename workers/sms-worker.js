/* ============================================================
   Greg Patisserie – SMS Notification Worker
   Deploy to Cloudflare Workers (free: 100,000 req/day)
   Calls Twilio API to send SMS receipts to customers
   ============================================================ */

export default {
  async fetch(request, env) {

    /* ── CORS preflight ──────────────────────────────────────── */
    if (request.method === 'OPTIONS') {
      return corsResponse(null, 204);
    }

    if (request.method !== 'POST') {
      return corsResponse({ error: 'Method not allowed' }, 405);
    }

    /* ── Parse body ──────────────────────────────────────────── */
    let to, body;
    try {
      ({ to, body } = await request.json());
    } catch {
      return corsResponse({ error: 'Invalid JSON body' }, 400);
    }

    if (!to || !body) {
      return corsResponse({ error: 'Missing "to" or "body" field' }, 400);
    }

    /* ── Normalise phone to E.164 (+1XXXXXXXXXX) ─────────────── */
    let phone = to.replace(/\D/g, '');
    if (phone.length === 10) phone = '1' + phone;
    if (!phone.startsWith('+')) phone = '+' + phone;

    /* ── Send via Twilio REST API ────────────────────────────── */
    const twilioUrl =
      `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;

    const payload = new URLSearchParams({
      To:   phone,
      From: env.TWILIO_FROM_NUMBER,          // e.g. +15141234567
      Body: body.substring(0, 1550),         // keep under 1600-char SMS limit
    });

    let twilioRes, twilioData;
    try {
      twilioRes = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          Authorization:  'Basic ' + btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload,
      });
      twilioData = await twilioRes.json();
    } catch (err) {
      return corsResponse({ error: 'Twilio fetch failed', detail: err.message }, 502);
    }

    if (!twilioRes.ok) {
      return corsResponse({
        error:   'Twilio error',
        code:    twilioData.code,
        message: twilioData.message,
      }, 400);
    }

    return corsResponse({ success: true, sid: twilioData.sid }, 200);
  },
};

/* ── Helper: JSON response with CORS headers ─────────────────── */
function corsResponse(data, status = 200) {
  return new Response(data ? JSON.stringify(data) : null, {
    status,
    headers: {
      'Content-Type':                'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
