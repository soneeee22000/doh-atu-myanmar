import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  subject: z.string().min(1),
  message: z.string().min(10),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
