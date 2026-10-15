import type { TimelineEntry } from '@/types/content';

interface TimelineListProps {
  title: string;
  entries: TimelineEntry[];
}

export function TimelineList({ title, entries }: TimelineListProps) {
  return (
    <div>
      <h3 className='text-label-md text-text-strong-950'>{title}</h3>
      <ol className='mt-4 flex flex-col gap-6'>
        {entries.map((entry) => (
          <li
            key={entry.id}
            className='border-l border-stroke-soft-200 pl-4 sm:pl-5'
          >
            <p className='text-subheading-xs uppercase text-text-soft-400'>
              {entry.period}
            </p>
            <p className='mt-1 text-label-sm text-text-strong-950'>
              {entry.title}
            </p>
            <p className='mt-1 text-paragraph-sm text-text-sub-600'>
              {entry.organization}
            </p>
            <ul className='mt-3 flex flex-col gap-1'>
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
