import {
  RiBriefcaseLine,
  RiGraduationCapLine,
  RiShieldCheckLine,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import type { Objective, ObjectiveStatus } from '@/types/content';
import type { IconComponent } from '@/types/icon';

interface ObjectiveCardProps {
  objective: Objective;
}

const objectiveIcons: Record<string, IconComponent> = {
  'stage-rssi': RiShieldCheckLine,
  alternance: RiBriefcaseLine,
  master: RiGraduationCapLine,
};

const statusColors: Record<ObjectiveStatus, 'orange' | 'blue' | 'gray'> = {
  upcoming: 'orange',
  searching: 'blue',
  planned: 'gray',
};

export function ObjectiveCard({ objective }: ObjectiveCardProps) {
  const Icon = objectiveIcons[objective.id];

  return (
    <article className='flex flex-col rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-start justify-between gap-3'>
        <span className='flex size-10 items-center justify-center rounded-10 bg-bg-weak-50 ring-1 ring-inset ring-stroke-soft-200'>
          <Icon className='size-5 text-text-strong-950' />
        </span>
        <Badge.Root
          variant='light'
          color={statusColors[objective.status]}
          size='medium'
        >
          {objective.statusLabel}
        </Badge.Root>
      </div>
      <h3 className='mt-5 text-label-md text-text-strong-950'>
        {objective.title}
      </h3>
      <p className='mt-2 text-paragraph-sm text-text-sub-600'>
        {objective.detail}
      </p>
    </article>
  );
}
