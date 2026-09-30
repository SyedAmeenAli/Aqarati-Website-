import { NextResponse } from "next/server";

/**
 * Forwards contact messages to CONTACT_WEBHOOK_URL (server-side env, never exposed to the browser).
 * Until a delivery target is configured it answers 503, so the form shows a failure instead of
 * pretending a message was received.
 */
export async function POST(req: Request) {
  const target = process.env.CONTACT_WEBHOOK_URL;
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots
  const name = String(body.name ?? "").slice(0, 200);
  const email = String(body.email ?? "").slice(0, 200);
  const message = String(body.message ?? "").slice(0, 5000);
  const topic = String(body.topic ?? "general").slice(0, 50);
  if (!name || !email || !message) return NextResponse.json({ ok: false }, { status: 422 });
  if (!target) return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  try {
    const r = await fetch(target, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ topic, name, email, message, source: "aqarati-website" }) });
    return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
