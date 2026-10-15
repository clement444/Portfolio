import type { Objective } from '@/types/content';

export const objectives: Objective[] = [
  {
    id: 'stage-rssi',
    title: 'Stage RSSI',
    detail:
      "175 heures au service RSSI de la Communauté d'Agglomération Hérault Méditerranée.",
    status: 'upcoming',
    statusLabel: 'À venir',
  },
  {
    id: 'alternance',
    title: 'Alternance',
    detail: 'Je cherche une alternance en cybersécurité pour la suite de mon cursus.',
    status: 'searching',
    statusLabel: 'En recherche',
  },
  {
    id: 'master',
    title: 'Master Cybersécurité',
    detail: 'Poursuite des études en Master Cybersécurité à Ynov Campus après le Bachelor.',
    status: 'planned',
    statusLabel: 'Prévu',
  },
];
