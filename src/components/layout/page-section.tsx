import * as Badge from '@/components/ui/badge';

interface PageSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  isTinted?: boolean;
  children: React.ReactNode;
}

export function PageSection({
  id,
  eyebrow,
  title,
  description,
  isTinted = false,
  children,
}: PageSectionProps) {
  let backgroundClassName = 'bg-bg-white-0';

  if (isTinted) {
    backgroundClassName = 'bg-bg-weak-50';
  }

  return (
    <section
      id={id}
      aria-labelledby={`${id}-titre`}
      className={`scroll-mt-4 py-16 sm:py-24 ${backgroundClassName}`}
    >
      <div className='mx-auto w-full max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto flex max-w-2xl flex-col items-center text-center'>
          <Badge.Root variant='stroke' color='gray' size='medium'>
            {eyebrow}
          </Badge.Root>
          <h2
            id={`${id}-titre`}
            className='mt-4 text-title-h5 text-text-strong-950 sm:text-title-h3'
          >
            {title}
          </h2>
          {description ? (
            <p className='mt-4 text-paragraph-md text-text-sub-600'>
              {description}
            </p>
          ) : null}
        </div>
        <div className='mt-12'>{children}</div>
      </div>
    </section>
  );
}
