import { PageSection } from '@/components/layout/page-section';
import { ProjectCard } from '@/components/sections/project-card';
import { projects } from '@/content/projects';

export function ProjectsSection() {
  return (
    <PageSection
      id='projets'
      eyebrow='Projets'
      title="Ce que j'ai construit"
      description="Projets réalisés en cours ou en groupe, publiés sur mon GitHub."
    >
      <div className='grid gap-4 md:grid-cols-2'>
        {projects.map((project, index) => {
          const isLastProject = index === projects.length - 1;
          const hasOddCount = projects.length % 2 === 1;
          let cardClassName = '';

          if (isLastProject && hasOddCount) {
            cardClassName = 'md:col-span-2';
          }

          return (
            <ProjectCard
              key={project.id}
              project={project}
              className={cardClassName}
            />
          );
        })}
      </div>
    </PageSection>
  );
}
