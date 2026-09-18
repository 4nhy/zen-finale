import { NextResponse } from "next/server";

/**
 * Stub for /api/affiliate matching Zen's payload contract:
 *   { fullName, email, phone, profileUrl, background }
 *
 * Logs in dev and returns 200; swap the handler body for Supabase / Resend /
 * whatever the partner program uses in production.
 */
export async function POST(req: Request) {
  let body: {
    fullName?: string;
    email?: string;
    phone?: string;
    profileUrl?: string;
    background?: string;
  } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const fullName = (body.fullName || "").trim();
  const email = (body.email || "").trim();

  if (!fullName || !email) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[affiliate] new application:", { fullName, email });
  }

  return NextResponse.json({ ok: true });
}
