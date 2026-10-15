import { techWatchItems } from '@/content/tech-watch';
import type { NavigationLink } from '@/types/content';

const baseNavigationLinks: NavigationLink[] = [
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Certifications', href: '#certifications' },
];

const techWatchLink: NavigationLink = {
  label: 'Veille',
  href: '#veille',
};

const closingNavigationLinks: NavigationLink[] = [
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

export function getNavigationLinks(): NavigationLink[] {
  const links = [...baseNavigationLinks];

  if (techWatchItems.length > 0) {
    links.push(techWatchLink);
  }

  links.push(...closingNavigationLinks);

  return links;
}
