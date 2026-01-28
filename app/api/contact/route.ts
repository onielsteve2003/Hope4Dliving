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
        from: "Hope4DLiving Website <noreply@hope4dliving.org>",
        to: [CONTACT_INBOX],
        reply_to: email,
        subject: `Website Contact: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0369a1; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 30px; background: #f8fafc; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 15px 0;"><strong>From:</strong> ${name}</p>
              <p style="margin: 0 0 15px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="padding: 15px; text-align: center; color: #64748b; font-size: 12px;">
              <p style="margin: 0;">This message was sent via the Hope4DLiving website contact form.</p>
            </div>
          </div>
        `,
        text: `New Contact Form Submission\n\nFrom: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via Hope4DLiving website contact form.`,
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
