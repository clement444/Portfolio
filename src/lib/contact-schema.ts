import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Le nom doit contenir au moins 2 caractères.')
    .max(80, 'Le nom ne doit pas dépasser 80 caractères.'),
  email: z
    .string()
    .trim()
    .min(5, "L'adresse email n'est pas valide.")
    .max(120, "L'adresse email ne doit pas dépasser 120 caractères.")
    .pipe(z.email("L'adresse email n'est pas valide.")),
  message: z
    .string()
    .trim()
    .min(20, 'Le message doit contenir au moins 20 caractères.')
    .max(2000, 'Le message ne doit pas dépasser 2000 caractères.'),
  website: z
    .string()
    .max(0, 'Le formulaire est invalide.')
    .optional()
    .default(''),
});

export type ContactPayload = z.infer<typeof contactSchema>;
