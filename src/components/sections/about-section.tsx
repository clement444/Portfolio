import { PageSection } from '@/components/layout/page-section';
import { ObjectiveCard } from '@/components/sections/objective-card';
import { aboutBlocks } from '@/content/about';
import { objectives } from '@/content/objectives';

const storyBlocks = aboutBlocks.filter((block) => {
  return block.id !== 'objectifs';
});

export function AboutSection() {
  return (
    <PageSection
      id='a-propos'
      eyebrow='À propos'
      title="D'agent de sécurité à étudiant en cybersécurité"
      description="Un parcours qui commence dans la sécurité physique et qui continue dans la sécurité informatique."
    >
      <div className='grid gap-4 md:grid-cols-2'>
        {storyBlocks.map((block) => (
          <article
            key={block.id}
            className='rounded-2xl bg-bg-weak-50 p-6 ring-1 ring-inset ring-stroke-soft-200 sm:p-8'
          >
            <h3 className='text-label-lg text-text-strong-950'>
              {block.title}
            </h3>
            <div className='mt-4 flex flex-col gap-3'>
              {block.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className='text-paragraph-sm text-text-sub-600'
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <h3 className='mb-4 mt-12 text-label-lg text-text-strong-950'>
        Mes objectifs
      </h3>
      <div className='grid gap-4 md:grid-cols-3'>
        {objectives.map((objective) => (
          <ObjectiveCard key={objective.id} objective={objective} />
        ))}
      </div>
    </PageSection>
  );
}
