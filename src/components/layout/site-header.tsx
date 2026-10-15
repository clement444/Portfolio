'use client';

import * as React from 'react';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import { getNavigationLinks } from '@/content/navigation';
import { profile } from '@/content/profile';

const navigationLinks = getNavigationLinks();

const desktopNavigationLinks = navigationLinks.filter((link) => {
  return link.href !== '#contact';
});

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuButtonLabel = isMenuOpen
    ? 'Fermer le menu de navigation'
    : 'Ouvrir le menu de navigation';

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='sticky top-0 z-50 px-4 pt-4'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex h-14 items-center justify-between gap-4 rounded-full bg-bg-white-0 pl-5 pr-2 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
          <a
            href='#accueil'
            className='text-label-md text-text-strong-950 outline-none focus-visible:underline'
          >
            {profile.fullName}
          </a>

          <nav aria-label='Navigation principale' className='hidden lg:block'>
            <ul className='flex items-center gap-1'>
              {desktopNavigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='block rounded-full px-3 py-1.5 text-label-sm text-text-sub-600 outline-none transition duration-200 ease-out hover:bg-bg-weak-50 hover:text-text-strong-950 focus-visible:bg-bg-weak-50 focus-visible:text-text-strong-950'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex items-center gap-2'>
            <Button.Root
              asChild
              variant='neutral'
              mode='filled'
              size='small'
              className='hidden rounded-full sm:inline-flex'
            >
              <a href='#contact'>Me contacter</a>
            </Button.Root>
            <Button.Root
              type='button'
              variant='neutral'
              mode='ghost'
              size='small'
              className='rounded-full lg:hidden'
              aria-expanded={isMenuOpen}
              aria-controls='menu-mobile'
              aria-label={menuButtonLabel}
              onClick={toggleMenu}
            >
              <Button.Icon as={isMenuOpen ? RiCloseLine : RiMenuLine} />
            </Button.Root>
          </div>
        </div>

        {isMenuOpen ? (
          <nav
            id='menu-mobile'
            aria-label='Navigation mobile'
            className='mt-2 rounded-3xl bg-bg-white-0 p-3 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200 lg:hidden'
          >
            <ul>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className='block rounded-xl px-3 py-2.5 text-label-sm text-text-sub-600 outline-none hover:bg-bg-weak-50 hover:text-text-strong-950 focus-visible:bg-bg-weak-50'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
