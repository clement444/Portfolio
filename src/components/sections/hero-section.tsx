import { RiDownloadLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import { profile } from '@/content/profile';

export function HeroSection() {
  return (
    <section id='accueil' className='scroll-mt-20'>
      <div className='mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-20'>
        <p className='text-subheading-xs uppercase text-text-soft-400'>
          {profile.location}
        </p>
        <h1 className='mt-3 text-title-h4 text-text-strong-950 sm:text-title-h2'>
          {profile.fullName}
        </h1>
        <p className='mt-3 text-label-md text-text-sub-600 sm:text-label-lg'>
          {profile.jobTitle}
        </p>
        <p className='mt-5 max-w-2xl text-paragraph-md text-text-sub-600'>
          {profile.introduction}
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <Button.Root asChild variant='primary' mode='filled' size='medium'>
            <a href='#contact'>Me contacter</a>
          </Button.Root>
          <Button.Root asChild variant='neutral' mode='stroke' size='medium'>
            <a href='#projets'>Voir mes projets</a>
          </Button.Root>
          <Button.Root asChild variant='neutral' mode='ghost' size='medium'>
            <a href={profile.resumeUrl} download>
              <Button.Icon as={RiDownloadLine} />
              Télécharger mon CV
            </a>
          </Button.Root>
        </div>
      </div>
    </section>
  );
}
