import { NextResponse } from 'next/server';

import { readClientIp } from '@/lib/client-ip';
import { contactSchema } from '@/lib/contact-schema';
import { readSmtpConfiguration, sendContactMessage } from '@/lib/mailer';
import { isRateLimited } from '@/lib/rate-limit';
import type { ContactApiResponse } from '@/types/contact';

const SUCCESS_MESSAGE = 'Message envoyé. Merci, je vous répondrai bientôt.';

const GENERIC_ERROR_MESSAGE =
  "Le message n'a pas pu être envoyé. Merci de réessayer plus tard.";

function jsonResponse(
  message: string,
  status: number,
): NextResponse<ContactApiResponse> {
  return NextResponse.json({ message }, { status });
}

export async function POST(request: Request) {
  const clientIp = readClientIp(request.headers);

  if (isRateLimited(clientIp)) {
    return jsonResponse(
      'Trop de messages envoyés. Merci de réessayer dans quelques minutes.',
      429,
    );
  }

  let rawBody: unknown;

  try {
    rawBody = await request.json();
  } catch {
    return jsonResponse('Les données envoyées sont invalides.', 400);
  }

  const parsedBody = contactSchema.safeParse(rawBody);

  if (!parsedBody.success) {
    return jsonResponse('Les données envoyées sont invalides.', 400);
  }

  if (parsedBody.data.website.length > 0) {
    return jsonResponse(SUCCESS_MESSAGE, 200);
  }

  const smtpConfiguration = readSmtpConfiguration();

  if (!smtpConfiguration) {
    console.error('Configuration SMTP incomplète.');

    return jsonResponse(GENERIC_ERROR_MESSAGE, 500);
  }

  try {
    await sendContactMessage(smtpConfiguration, {
      name: parsedBody.data.name,
      email: parsedBody.data.email,
      message: parsedBody.data.message,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message de contact.", error);

    return jsonResponse(GENERIC_ERROR_MESSAGE, 502);
  }

  return jsonResponse(SUCCESS_MESSAGE, 200);
}
