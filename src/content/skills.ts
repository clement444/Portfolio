import type { SkillCategory } from '@/types/content';

export const skillCategories: SkillCategory[] = [
  {
    id: 'reseau-systemes',
    title: 'Réseau et systèmes',
    description:
      "Les bases vues en cours et en travaux pratiques pendant la première année et le début de la deuxième.",
    skills: ['Réseau', 'Linux', 'Windows Server', 'Active Directory'],
  },
  {
    id: 'programmation',
    title: 'Programmation',
    description:
      "Les langages que j'ai utilisés sur des projets d'école et des exercices.",
    skills: ['Go', 'Python', 'JavaScript', 'TypeScript', 'Java'],
  },
  {
    id: 'donnees',
    title: 'Bases de données',
    description:
      "Conception de schémas, écriture de requêtes et analyse de données.",
    skills: ['SQL'],
  },
];
