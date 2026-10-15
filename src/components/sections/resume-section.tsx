import { RiDownloadLine } from '@remixicon/react';

import { PageSection } from '@/components/layout/page-section';
import * as Button from '@/components/ui/button';
import { profile } from '@/content/profile';

export function ResumeSection() {
  return (
    <PageSection
      id='cv'
      title='CV'
      description='Mon CV au format PDF, à télécharger.'
    >
      <Button.Root asChild variant='neutral' mode='stroke' size='medium'>
        <a href={profile.resumeUrl} download>
          <Button.Icon as={RiDownloadLine} />
          Télécharger le CV (PDF)
        </a>
      </Button.Root>
    </PageSection>
  );
}
