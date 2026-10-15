import { RiGithubFill } from '@remixicon/react';

import * as LinkButton from '@/components/ui/link-button';
import * as Tag from '@/components/ui/tag';
import { readRepositoryPath } from '@/lib/repository-path';
import { cn } from '@/utils/cn';
import type { Project } from '@/types/content';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const repositoryPath = readRepositoryPath(project.repositoryUrl);

  return (
    <article
      className={cn(
        'flex flex-col overflow-hidden rounded-2xl bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200',
        className,
      )}
    >
      <div className='flex items-center gap-3 border-b border-stroke-soft-200 bg-bg-weak-50 px-4 py-2.5'>
        <div aria-hidden='true' className='flex gap-1.5'>
          <span className='size-2 rounded-full bg-stroke-sub-300' />
          <span className='size-2 rounded-full bg-stroke-sub-300' />
          <span className='size-2 rounded-full bg-stroke-sub-300' />
        </div>
        <p className='truncate rounded-md bg-bg-white-0 px-2.5 py-1 font-mono text-paragraph-xs text-text-sub-600 ring-1 ring-inset ring-stroke-soft-200'>
          {repositoryPath}
        </p>
      </div>

      <div className='flex grow flex-col p-6'>
        <h3 className='text-label-md text-text-strong-950'>{project.title}</h3>
        <p className='mt-3 grow text-paragraph-sm text-text-sub-600'>
          {project.description}
        </p>
        <ul className='mt-5 flex flex-wrap gap-2'>
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Tag.Root variant='gray'>{technology}</Tag.Root>
            </li>
          ))}
        </ul>
        <div className='mt-6'>
          <LinkButton.Root asChild variant='primary' size='medium'>
            <a
              href={project.repositoryUrl}
              target='_blank'
              rel='noreferrer noopener'
            >
              <LinkButton.Icon as={RiGithubFill} />
              Voir le dépôt
            </a>
          </LinkButton.Root>
        </div>
      </div>
    </article>
  );
}
