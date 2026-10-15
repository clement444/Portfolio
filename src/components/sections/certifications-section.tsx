import { RiAwardLine } from '@remixicon/react';

import { PageSection } from '@/components/layout/page-section';
import * as Badge from '@/components/ui/badge';
import { certifications } from '@/content/certifications';

export function CertificationsSection() {
  return (
    <PageSection
      id='certifications'
      eyebrow='Certifications'
      title='Certifications et formations'
      description='Diplômes obtenus avant mon entrée à Ynov Campus.'
    >
      <ul className='grid gap-4 md:grid-cols-3'>
        {certifications.map((certification) => (
          <li
            key={certification.id}
            className='flex flex-col rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'
          >
            <div className='flex items-start justify-between gap-3'>
              <span className='flex size-10 items-center justify-center rounded-10 bg-bg-weak-50 ring-1 ring-inset ring-stroke-soft-200'>
                <RiAwardLine className='size-5 text-text-strong-950' />
              </span>
              <Badge.Root variant='stroke' color='gray' size='medium'>
                {certification.period}
              </Badge.Root>
            </div>
            <p className='mt-5 text-label-md text-text-strong-950'>
              {certification.title}
            </p>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
