import { RiCodeSSlashLine, RiDatabase2Line, RiRouterLine } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as Tag from '@/components/ui/tag';
import type { SkillCategory } from '@/types/content';
import type { IconComponent } from '@/types/icon';

interface SkillCardProps {
  category: SkillCategory;
}

const categoryIcons: Record<string, IconComponent> = {
  'reseau-systemes': RiRouterLine,
  programmation: RiCodeSSlashLine,
  donnees: RiDatabase2Line,
};

export function SkillCard({ category }: SkillCardProps) {
  const Icon = categoryIcons[category.id];

  return (
    <article className='flex flex-col rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-start justify-between gap-3'>
        <span className='flex size-10 items-center justify-center rounded-10 bg-primary-alpha-10'>
          <Icon className='size-5 text-primary-base' />
        </span>
        <Badge.Root variant='stroke' color='gray' size='medium'>
          {category.skills.length}
        </Badge.Root>
      </div>
      <h3 className='mt-5 text-label-md text-text-strong-950'>
        {category.title}
      </h3>
      <p className='mt-2 grow text-paragraph-sm text-text-sub-600'>
        {category.description}
      </p>
      <ul className='mt-5 flex flex-wrap gap-2'>
        {category.skills.map((skill) => (
          <li key={skill}>
            <Tag.Root>{skill}</Tag.Root>
          </li>
        ))}
      </ul>
    </article>
  );
}
