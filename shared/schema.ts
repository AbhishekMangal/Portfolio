import { z } from "zod";

// MongoDB Contact Schema
export const contactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
  createdAt: z.date(),
});

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required").min(5, "Subject must be at least 5 characters"),
  message: z.string().min(1, "Message is required").min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = z.infer<typeof contactSchema>;
