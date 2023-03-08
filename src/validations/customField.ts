import { z } from 'zod';

export const CustomFieldSchema = z.object({
  fieldType: z.string().min(2),
  fieldName: z.string().min(2),
});

export type CustomFieldSchemaType = z.infer<typeof CustomFieldSchema>;
