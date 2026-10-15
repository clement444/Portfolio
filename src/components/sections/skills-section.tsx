import { PageSection } from '@/components/layout/page-section';
import { SkillCard } from '@/components/sections/skill-card';
import { skillCategories } from '@/content/skills';

export function SkillsSection() {
  return (
    <PageSection
      id='competences'
      eyebrow='Compétences'
      title="Ce que je sais faire aujourd'hui"
      description="Les compétences travaillées pendant la première année et le début de la deuxième année de Bachelor."
      isTinted
    >
      <div className='grid gap-4 md:grid-cols-3'>
        {skillCategories.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </PageSection>
  );
}
