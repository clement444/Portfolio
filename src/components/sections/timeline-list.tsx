import type { TimelineEntry } from '@/types/content';
import type { IconComponent } from '@/types/icon';

interface TimelineListProps {
  title: string;
  icon: IconComponent;
  entries: TimelineEntry[];
}

export function TimelineList({ title, icon, entries }: TimelineListProps) {
  const Icon = icon;

  return (
    <div className='rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 sm:p-8'>
      <div className='flex items-center gap-3'>
        <span className='flex size-10 items-center justify-center rounded-10 bg-bg-weak-50 ring-1 ring-inset ring-stroke-soft-200'>
          <Icon className='size-5 text-text-strong-950' />
        </span>
        <h3 className='text-label-lg text-text-strong-950'>{title}</h3>
      </div>

      <ol className='mt-8 flex flex-col gap-8'>
        {entries.map((entry) => (
          <li
            key={entry.id}
            className='relative border-l border-stroke-soft-200 pl-6'
          >
            <span
              aria-hidden='true'
              className='absolute -left-1.25 top-1.5 size-2.5 rounded-full bg-primary-base ring-4 ring-bg-white-0'
            />
            <p className='font-mono text-paragraph-xs text-text-sub-600'>
              {entry.period}
            </p>
            <p className='mt-1 text-label-md text-text-strong-950'>
              {entry.title}
            </p>
            <p className='mt-1 text-paragraph-sm text-primary-base'>
              {entry.organization}
            </p>
            <ul className='mt-3 flex flex-col gap-1.5'>
              {entry.details.map((detail) => (
                <li
                  key={detail}
                  className='text-paragraph-sm text-text-sub-600'
                >
                  {detail}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
