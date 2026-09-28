import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Dev mode: log and return success without sending
      console.log("--- CONTACT FORM SUBMISSION (no RESEND_API_KEY set) ---");
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DevKD Portfolio <onboarding@resend.dev>",
        to: ["cbotch5000@gmail.com"],
        reply_to: email,
        subject: `[iamdevkd.com] New message from ${name}`,
        html: `
          <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; background: #080808; color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid rgba(255,107,0,0.2);">
            <div style="margin-bottom: 32px;">
              <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 8px; color: #FF6B00;">New Portfolio Message</h1>
              <p style="font-size: 14px; color: #9E9E9E; margin: 0;">Received via <strong>iamdevkd.com</strong></p>
            </div>
            <div style="background: #141414; border-radius: 8px; padding: 24px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.08);">
              <p style="margin: 0 0 8px; font-size: 12px; color: #FFA043; text-transform: uppercase; letter-spacing: 0.1em; font-family: monospace;">From</p>
              <p style="margin: 0; font-size: 18px; font-weight: 600; color: #ffffff;">${name}</p>
              <a href="mailto:${email}" style="color: #FF6B00; font-size: 14px; text-decoration: none;">${email}</a>
            </div>
            <div style="background: #141414; border-radius: 8px; padding: 24px; border: 1px solid rgba(255,255,255,0.08);">
              <p style="margin: 0 0 12px; font-size: 12px; color: #FFA043; text-transform: uppercase; letter-spacing: 0.1em; font-family: monospace;">Message</p>
              <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #E0E0E0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin: 32px 0 0; font-size: 12px; color: #555; text-align: center;">Reply directly to this email to respond to ${name}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
