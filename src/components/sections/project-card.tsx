import { RiGithubFill } from '@remixicon/react';

import * as LinkButton from '@/components/ui/link-button';
import * as Tag from '@/components/ui/tag';
import type { Project } from '@/types/content';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className='flex flex-col rounded-xl bg-bg-white-0 p-5 ring-1 ring-inset ring-stroke-soft-200'>
      <h3 className='text-label-md text-text-strong-950'>{project.title}</h3>
      <p className='mt-3 grow text-paragraph-sm text-text-sub-600'>
        {project.description}
      </p>
      <ul className='mt-4 flex flex-wrap gap-2'>
        {project.technologies.map((technology) => (
          <li key={technology}>
            <Tag.Root variant='gray'>{technology}</Tag.Root>
          </li>
        ))}
      </ul>
      <div className='mt-5'>
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
    </article>
  );
}
