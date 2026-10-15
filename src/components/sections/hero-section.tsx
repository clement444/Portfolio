import { RiArrowRightLine, RiDownloadLine, RiMapPinLine } from '@remixicon/react';

import { DotPattern } from '@/components/layout/dot-pattern';
import { TerminalCard } from '@/components/sections/terminal-card';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import { profile } from '@/content/profile';

export function HeroSection() {
  return (
    <section id='accueil' className='relative scroll-mt-4 overflow-hidden'>
      <DotPattern className='text-stroke-soft-200' />

      <div className='relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28 lg:pt-28'>
        <div>
          <div className='flex flex-wrap gap-2'>
            <Badge.Root variant='light' color='green' size='medium'>
              <Badge.Dot />
              Recherche d&apos;alternance
            </Badge.Root>
            <Badge.Root variant='stroke' color='gray' size='medium'>
              <Badge.Icon as={RiMapPinLine} />
              {profile.location}
            </Badge.Root>
          </div>

          <h1 className='mt-6 text-title-h3 text-text-strong-950 sm:text-title-h2 lg:text-title-h1'>
            {profile.fullName}
          </h1>
          <p className='mt-4 text-label-md text-primary-base sm:text-label-lg'>
            {profile.jobTitle}
          </p>
          <p className='mt-5 max-w-xl text-paragraph-md text-text-sub-600'>
            {profile.introduction}
          </p>

          <div className='mt-8 flex flex-wrap gap-3'>
            <Button.Root asChild variant='primary' mode='filled' size='medium'>
              <a href='#contact'>
                Me contacter
                <Button.Icon as={RiArrowRightLine} />
              </a>
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

        <TerminalCard />
      </div>
    </section>
  );
}
