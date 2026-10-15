import { PageSection } from '@/components/layout/page-section';
import { ProjectCard } from '@/components/sections/project-card';
import { projects } from '@/content/projects';

export function ProjectsSection() {
  return (
    <PageSection
      id='projets'
      title='Projets'
      description="Projets réalisés en cours ou en groupe, publiés sur mon GitHub."
    >
      <div className='grid gap-4 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageSection>
  );
}
