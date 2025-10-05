// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // quan trọng: dùng Node runtime

// Guard env (tránh undefined gây 500 khó hiểu)
const API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

if (!API_KEY) console.warn("[contact] RESEND_API_KEY is missing");
if (!TO_EMAIL) console.warn("[contact] CONTACT_TO_EMAIL is missing");

const resend = new Resend(API_KEY ?? "");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [TO_EMAIL as string],
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`, // fallback plain text
      html: `
    <div style="font-family: Arial, sans-serif; padding: 16px; border: 1px solid #eee; border-radius: 8px;">
      <h2 style="color:#2563eb; margin-bottom:12px;">📩 New Contact Form Message</h2>
      <p><b>From:</b> ${name} &lt;${email}&gt;</p>
      <p style="white-space: pre-line; margin-top:16px;">${message}</p>
      <hr style="margin:20px 0;"/>
      <p style="font-size:12px; color:#666;">This message was sent from your portfolio contact form.</p>
    </div>
  `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      // Trả message cụ thể ra client để debug
      return NextResponse.json(
        { ok: false, error: (error as any)?.message ?? JSON.stringify(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("[contact] Uncaught error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
