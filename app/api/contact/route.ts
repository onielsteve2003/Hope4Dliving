import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: Wire this handler to an email service (Resend, SendGrid, Mailjet, etc.) or CRM webhook.
  console.info("New Hope4DLiving inquiry", { name, email, message, receivedAt: new Date().toISOString() });

  return NextResponse.json({ success: true });
}
