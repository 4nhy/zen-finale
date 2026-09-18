import { NextResponse } from "next/server";

/**
 * Stub endpoint mirroring Zen's /api/contact payload contract:
 *   { name, email, message } — string, string, string
 *
 * In dev this just logs the message and returns 200 so the ContactSection UI
 * can run end-to-end. Swap the body of this handler for whatever the Zen
 * consulting inbox should hit in production (Supabase insert, Resend send,
 * webhook, etc.).
 */
export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[contact] new inquiry:", { name, email, message });
  }

  return NextResponse.json({ ok: true });
}
