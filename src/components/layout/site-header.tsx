'use client';

import * as React from 'react';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
import { getNavigationLinks } from '@/content/navigation';
import { profile } from '@/content/profile';

const navigationLinks = getNavigationLinks();

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='sticky top-0 z-50 border-b border-stroke-soft-200 bg-bg-white-0'>
      <div className='mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6'>
        <a
          href='#accueil'
          className='text-label-md text-text-strong-950 outline-none focus-visible:underline'
        >
          {profile.fullName}
        </a>

        <nav aria-label='Navigation principale' className='hidden lg:block'>
          <ul className='flex items-center gap-6'>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='text-label-sm text-text-sub-600 outline-none transition duration-200 ease-out hover:text-text-strong-950 focus-visible:underline'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button.Root
          type='button'
          variant='neutral'
          mode='ghost'
          size='xsmall'
          className='lg:hidden'
          aria-expanded={isMenuOpen}
          aria-controls='menu-mobile'
          aria-label='Ouvrir le menu de navigation'
          onClick={toggleMenu}
        >
          <Button.Icon as={isMenuOpen ? RiCloseLine : RiMenuLine} />
        </Button.Root>
      </div>

      {isMenuOpen ? (
        <nav
          id='menu-mobile'
          aria-label='Navigation mobile'
          className='border-t border-stroke-soft-200 bg-bg-white-0 lg:hidden'
        >
          <ul className='mx-auto w-full max-w-5xl px-4 py-2 sm:px-6'>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className='block py-2 text-label-sm text-text-sub-600 outline-none hover:text-text-strong-950 focus-visible:underline'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
