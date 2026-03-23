"use server";

import { contactFormSchema } from "@/lib/schemas";

type ContactState = {
  success: boolean;
  error: string | null;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    honeypot: formData.get("honeypot"),
  };

  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    return { success: false, error: "Validation failed" };
  }

  if (result.data.honeypot) {
    return { success: true, error: null };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.log("Contact form submission (email not configured):", result.data);
    return { success: true, error: null };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Doh Atu Website <onboarding@resend.dev>",
        to: [contactEmail],
        subject: `[Contact] ${result.data.subject}`,
        text: `Name: ${result.data.name}\nEmail: ${result.data.email}\nSubject: ${result.data.subject}\n\nMessage:\n${result.data.message}`,
        reply_to: result.data.email,
      }),
    });

    if (!response.ok) {
      return { success: false, error: "Failed to send email" };
    }

    return { success: true, error: null };
  } catch {
    return { success: false, error: "Failed to send email" };
  }
}
