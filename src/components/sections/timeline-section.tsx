import { RiBriefcaseLine, RiGraduationCapLine } from '@remixicon/react';

import { PageSection } from '@/components/layout/page-section';
import { TimelineList } from '@/components/sections/timeline-list';
import { educationEntries, experienceEntries } from '@/content/timeline';

export function TimelineSection() {
  return (
    <PageSection
      id='parcours'
      eyebrow='Parcours'
      title='Formation et expérience'
      description='Mon cursus actuel en cybersécurité et mon expérience en sécurité privée.'
      isTinted
    >
      <div className='grid gap-4 md:grid-cols-2'>
        <TimelineList
          title='Formation'
          icon={RiGraduationCapLine}
          entries={educationEntries}
        />
        <TimelineList
          title='Expérience professionnelle'
          icon={RiBriefcaseLine}
          entries={experienceEntries}
        />
      </div>
    </PageSection>
  );
}
