import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from '@remixicon/react';

import { PageSection } from '@/components/layout/page-section';
import { ContactForm } from '@/components/sections/contact-form';
import * as LinkButton from '@/components/ui/link-button';
import { profile } from '@/content/profile';

export function ContactSection() {
  return (
    <PageSection
      id='contact'
      eyebrow='Contact'
      title='Parlons de votre projet'
      description="Pour une alternance, un stage ou une question, écrivez-moi avec le formulaire ou par un des liens ci-dessous."
    >
      <div className='mx-auto grid max-w-5xl gap-10 rounded-3xl bg-bg-white-0 p-6 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200 sm:p-10 md:grid-cols-[1fr_minmax(0,260px)]'>
        <ContactForm />

        <div className='md:border-l md:border-stroke-soft-200 md:pl-10'>
          <h3 className='text-label-md text-text-strong-950'>Liens directs</h3>
          <ul className='mt-4 flex flex-col gap-3'>
            <li>
              <LinkButton.Root asChild variant='gray' size='medium'>
                <a href={`mailto:${profile.email}`}>
                  <LinkButton.Icon as={RiMailLine} />
                  {profile.email}
                </a>
              </LinkButton.Root>
            </li>
            <li>
              <LinkButton.Root asChild variant='gray' size='medium'>
                <a
                  href={profile.githubUrl}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <LinkButton.Icon as={RiGithubFill} />
                  GitHub
                </a>
              </LinkButton.Root>
            </li>
            <li>
              <LinkButton.Root asChild variant='gray' size='medium'>
                <a
                  href={profile.linkedinUrl}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <LinkButton.Icon as={RiLinkedinBoxFill} />
                  LinkedIn
                </a>
              </LinkButton.Root>
            </li>
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
