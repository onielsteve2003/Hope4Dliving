import { NextResponse } from "next/server";

const CONTACT_INBOX = process.env.CONTACT_INBOX || "contact@hope4dliving.org";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // If a Resend API key is available, send an email to the contact inbox; otherwise log for visibility.
  if (RESEND_API_KEY) {
    try {
      const payload = {
        from: "Hope4DLiving Contact <contact@hope4dliving.org>",
        to: [CONTACT_INBOX],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      };

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error("Resend email failed", { status: resendResponse.status, errorText });
      }
    } catch (error) {
      console.error("Resend email error", error);
    }
  } else {
    console.info("New Hope4DLiving inquiry (logging only; set RESEND_API_KEY to send email)", {
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
      to: CONTACT_INBOX,
    });
  }

  return NextResponse.json({ success: true });
}
