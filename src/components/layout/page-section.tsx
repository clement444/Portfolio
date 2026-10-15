interface PageSectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageSection({
  id,
  title,
  description,
  children,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titre`}
      className='scroll-mt-20 border-t border-stroke-soft-200 py-12 sm:py-16'
    >
      <div className='mx-auto w-full max-w-5xl px-4 sm:px-6'>
        <h2
          id={`${id}-titre`}
          className='text-title-h5 text-text-strong-950 sm:text-title-h4'
        >
          {title}
        </h2>
        {description ? (
          <p className='mt-3 max-w-2xl text-paragraph-sm text-text-sub-600 sm:text-paragraph-md'>
            {description}
          </p>
        ) : null}
        <div className='mt-8'>{children}</div>
      </div>
    </section>
  );
}
