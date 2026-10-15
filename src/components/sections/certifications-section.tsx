import { PageSection } from '@/components/layout/page-section';
import { certifications } from '@/content/certifications';

export function CertificationsSection() {
  return (
    <PageSection
      id='certifications'
      title='Certifications et formations'
      description='Diplômes obtenus avant mon entrée à Ynov Campus.'
    >
      <ul className='flex flex-col gap-3'>
        {certifications.map((certification) => (
          <li
            key={certification.id}
            className='flex flex-col gap-1 rounded-xl bg-bg-white-0 p-4 ring-1 ring-inset ring-stroke-soft-200 sm:flex-row sm:items-center sm:justify-between'
          >
            <span className='text-label-sm text-text-strong-950'>
              {certification.title}
            </span>
            <span className='text-paragraph-sm text-text-sub-600'>
              {certification.period}
            </span>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
