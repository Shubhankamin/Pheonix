import { defineEventHandler, readBody } from "h3";
import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const { name, email, subject, message } = await readBody(event);
  const config = useRuntimeConfig();
  const resend = new Resend(config.public.resendKey);

  try {
    await resend.emails.send({
      from: "contact@yourdomain.com",
      to: "shubhankamin20@gmail.com",
      subject: `New Contact Us Inquiry: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
});
