import type { TerminalBlock } from '@/types/content';

export const terminalBlocks: TerminalBlock[] = [
  {
    id: 'whoami',
    command: 'whoami',
    outputLines: ['Clément Morère, Bachelor Cybersécurité 2e année'],
  },
  {
    id: 'objectifs',
    command: 'cat objectifs.txt',
    outputLines: [
      'Stage RSSI : 175 h, à venir',
      'Alternance : en recherche',
      'Master Cybersécurité : après le Bachelor',
    ],
  },
  {
    id: 'competences',
    command: 'ls competences/',
    outputLines: [
      'reseau  linux  windows-server  active-directory',
      'go  python  javascript  typescript  java  sql',
    ],
  },
];
