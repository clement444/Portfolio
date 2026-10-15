import * as React from 'react';

import { cn } from '@/utils/cn';

interface DotPatternProps {
  className?: string;
}

export function DotPattern({ className }: DotPatternProps) {
  const patternId = React.useId();

  return (
    <svg
      aria-hidden='true'
      className={cn('pointer-events-none absolute inset-0 size-full', className)}
    >
      <defs>
        <pattern
          id={patternId}
          width='24'
          height='24'
          patternUnits='userSpaceOnUse'
        >
          <circle cx='1.5' cy='1.5' r='1.5' fill='currentColor' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={`url(#${patternId})`} />
    </svg>
  );
}
