import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { profile } from '@/content/profile';
import { cn } from '@/utils/cn';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const siteDescription =
  "Portfolio de Clément Morère, étudiant en deuxième année de Bachelor Cybersécurité à Ynov Campus Montpellier. Compétences, projets, parcours et contact.";

export const metadata: Metadata = {
  metadataBase: new URL('https://morere.fr'),
  title: {
    default: `${profile.fullName} - Étudiant en cybersécurité`,
    template: `%s - ${profile.fullName}`,
  },
  description: siteDescription,
  keywords: [
    'Clément Morère',
    'cybersécurité',
    'Ynov Campus Montpellier',
    'alternance',
    'portfolio',
  ],
  authors: [{ name: profile.fullName, url: 'https://morere.fr' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://morere.fr',
    siteName: profile.fullName,
    title: `${profile.fullName} - Étudiant en cybersécurité`,
    description: siteDescription,
  },
  twitter: {
    card: 'summary',
    title: `${profile.fullName} - Étudiant en cybersécurité`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='fr' className={cn(inter.variable, 'antialiased')}>
      <body className='bg-bg-white-0 text-text-strong-950'>{children}</body>
    </html>
  );
}
