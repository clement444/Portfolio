import { PageSection } from '@/components/layout/page-section';
import * as LinkButton from '@/components/ui/link-button';
import { techWatchItems } from '@/content/tech-watch';

export function TechWatchSection() {
  if (techWatchItems.length === 0) {
    return null;
  }

  return (
    <PageSection
      id='veille'
      title='Veille technologique'
      description='Articles et ressources que je suis pour rester à jour en cybersécurité.'
    >
      <ul className='flex flex-col gap-4'>
        {techWatchItems.map((item) => (
          <li
            key={item.id}
            className='rounded-xl bg-bg-white-0 p-5 ring-1 ring-inset ring-stroke-soft-200'
          >
            <h3 className='text-label-md text-text-strong-950'>{item.title}</h3>
            <p className='mt-2 text-paragraph-sm text-text-sub-600'>
              {item.summary}
            </p>
            <div className='mt-4'>
              <LinkButton.Root asChild variant='primary' size='medium'>
                <a href={item.url} target='_blank' rel='noreferrer noopener'>
                  {item.source}
                </a>
              </LinkButton.Root>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
