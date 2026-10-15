import nodemailer from 'nodemailer';

import { sanitizeHeaderValue, sanitizeTextBlock } from '@/lib/sanitize';

interface SmtpConfiguration {
  host: string;
  port: number;
  user: string;
  password: string;
  recipient: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export function readSmtpConfiguration(): SmtpConfiguration | null {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_TO;

  if (!host || !port || !user || !password || !recipient) {
    return null;
  }

  const parsedPort = Number.parseInt(port, 10);

  if (Number.isNaN(parsedPort)) {
    return null;
  }

  return {
    host,
    port: parsedPort,
    user,
    password,
    recipient,
  };
}

export async function sendContactMessage(
  configuration: SmtpConfiguration,
  contactMessage: ContactMessage,
): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: configuration.host,
    port: configuration.port,
    secure: configuration.port === 465,
    auth: {
      user: configuration.user,
      pass: configuration.password,
    },
  });

  const safeName = sanitizeHeaderValue(contactMessage.name);
  const safeEmail = sanitizeHeaderValue(contactMessage.email);
  const safeMessage = sanitizeTextBlock(contactMessage.message);

  const body = [
    `Nom : ${safeName}`,
    `Email : ${safeEmail}`,
    '',
    'Message :',
    safeMessage,
  ].join('\n');

  await transporter.sendMail({
    from: `Formulaire morere.fr <${configuration.user}>`,
    to: configuration.recipient,
    replyTo: safeEmail,
    subject: `Nouveau message de ${safeName}`,
    text: body,
  });
}
