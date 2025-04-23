import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email sending function
async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validate the form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Format the email content
    const emailText = `
      New contact form submission:
      
      Name: ${name}
      Email: ${email}
      Company: ${company || "Not provided"}
      Service: ${service || "Not provided"}
      
      Message:
      ${message}
    `;

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not provided"}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    // Send the email
    await sendEmail({
      to: process.env.CONTACT_EMAIL || "contact@purplescript.dev",
      subject: `New Contact Form Submission from ${name}`,
      text: emailText,
      html: emailHtml,
    });

    // Return success response
    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { error: "An error occurred while sending your message" },
      { status: 500 }
    );
  }
}
