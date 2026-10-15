import { RiDownloadLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import { profile } from '@/content/profile';

export function ResumeSection() {
  return (
    <section
      id='cv'
      aria-labelledby='cv-titre'
      className='scroll-mt-4 px-4 py-8 sm:px-6'
    >
      <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-bg-strong-950 p-8 sm:flex-row sm:items-center sm:p-12'>
        <div className='max-w-xl'>
          <h2
            id='cv-titre'
            className='text-title-h5 text-static-white sm:text-title-h4'
          >
            Mon CV en PDF
          </h2>
          <p className='mt-3 text-paragraph-md text-static-white/70'>
            Mon parcours, mes diplômes et mon expérience sur une page.
          </p>
        </div>
        <Button.Root asChild variant='neutral' mode='stroke' size='medium'>
          <a href={profile.resumeUrl} download>
            <Button.Icon as={RiDownloadLine} />
            Télécharger le CV
          </a>
        </Button.Root>
      </div>
    </section>
  );
}
