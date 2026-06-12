import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: 'Invalid email format.' }),
  message: z.string().min(1, { message: 'Message is required.' }),
});
