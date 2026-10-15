import { PageSection } from '@/components/layout/page-section';
import { TimelineList } from '@/components/sections/timeline-list';
import { educationEntries, experienceEntries } from '@/content/timeline';

export function TimelineSection() {
  return (
    <PageSection id='parcours' title='Parcours'>
      <div className='grid gap-10 md:grid-cols-2'>
        <TimelineList title='Formation' entries={educationEntries} />
        <TimelineList
          title='Expérience professionnelle'
          entries={experienceEntries}
        />
      </div>
    </PageSection>
  );
}
