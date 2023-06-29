import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  course: z.string().optional(),
  registration_date: z.string(),
});

export type User = z.infer<typeof userSchema>;
