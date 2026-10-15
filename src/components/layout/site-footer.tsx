import { profile } from '@/content/profile';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-stroke-soft-200 bg-bg-white-0'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6'>
        <p className='text-paragraph-sm text-text-sub-600'>
          {currentYear} {profile.fullName}
        </p>
        <ul className='flex flex-wrap items-center gap-4'>
          <li>
            <a
              href={profile.githubUrl}
              target='_blank'
              rel='noreferrer noopener'
              className='text-label-sm text-text-sub-600 outline-none hover:text-text-strong-950 focus-visible:underline'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedinUrl}
              target='_blank'
              rel='noreferrer noopener'
              className='text-label-sm text-text-sub-600 outline-none hover:text-text-strong-950 focus-visible:underline'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className='text-label-sm text-text-sub-600 outline-none hover:text-text-strong-950 focus-visible:underline'
            >
              {profile.email}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
