import { TypeOf, z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(2, 'first name must be at least 2 characters long').max(20, 'too long bro'),
  lastName: z.string().min(4, 'last name must be at least 4 characters long').max(20, 'too long bro'),
});

export type FormInput = TypeOf<typeof formSchema>;
