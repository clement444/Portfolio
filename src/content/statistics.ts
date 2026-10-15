import { projects } from '@/content/projects';
import { skillCategories } from '@/content/skills';
import type { Statistic } from '@/types/content';

function countSkills(): number {
  let total = 0;

  for (const category of skillCategories) {
    total = total + category.skills.length;
  }

  return total;
}

export function getStatistics(): Statistic[] {
  return [
    { id: 'annee', value: '2e', label: 'année de Bachelor' },
    { id: 'projets', value: String(projects.length), label: 'projets sur GitHub' },
    { id: 'competences', value: String(countSkills()), label: 'compétences travaillées' },
    { id: 'stage', value: '175 h', label: 'de stage RSSI à venir' },
  ];
}
