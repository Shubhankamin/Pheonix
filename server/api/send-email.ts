import { defineEventHandler, readBody } from "h3";
import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const { name, email, subject, message } = await readBody(event);
  const config = useRuntimeConfig();
  const resend = new Resend(config.public.resendKey);

  try {
    // 🔹 Send email to Admin
    await resend.emails.send({
      from: "contact@pheonixacademy.in",
      to: "vijh45@gmail.com",
      subject: `New Contact Us Inquiry: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    // 🔹 Send Acknowledgment Email to User
    await resend.emails.send({
      from: "contact@pheonixacademy.in",
      to: email, // User's email
      subject: "Thank you for contacting Pheonix Academy!",
      html: `<p>Dear ${name},</p>
             <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
             <p><strong>Your Message:</strong></p>
             <p>${message}</p>
             <p>Best Regards,<br>Pheonix Academy Team</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
});
