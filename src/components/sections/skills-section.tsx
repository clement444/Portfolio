import { PageSection } from '@/components/layout/page-section';
import * as Tag from '@/components/ui/tag';
import { skillCategories } from '@/content/skills';

export function SkillsSection() {
  return (
    <PageSection
      id='competences'
      title='Compétences'
      description="Les compétences travaillées pendant la première année et le début de la deuxième année de Bachelor."
    >
      <div className='grid gap-4 md:grid-cols-3'>
        {skillCategories.map((category) => (
          <article
            key={category.id}
            className='rounded-xl bg-bg-white-0 p-5 ring-1 ring-inset ring-stroke-soft-200'
          >
            <h3 className='text-label-md text-text-strong-950'>
              {category.title}
            </h3>
            <p className='mt-2 text-paragraph-sm text-text-sub-600'>
              {category.description}
            </p>
            <ul className='mt-4 flex flex-wrap gap-2'>
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Tag.Root>{skill}</Tag.Root>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
