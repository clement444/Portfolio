import { PageSection } from '@/components/layout/page-section';
import { aboutBlocks } from '@/content/about';

export function AboutSection() {
  return (
    <PageSection id='a-propos' title='À propos'>
      <div className='grid gap-8 md:grid-cols-3'>
        {aboutBlocks.map((block) => (
          <article key={block.id}>
            <h3 className='text-label-md text-text-strong-950'>
              {block.title}
            </h3>
            <div className='mt-3 flex flex-col gap-3'>
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
    </PageSection>
  );
}
