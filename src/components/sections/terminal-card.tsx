import { terminalBlocks } from '@/content/terminal';

export function TerminalCard() {
  return (
    <div className='overflow-hidden rounded-2xl bg-bg-white-0 shadow-regular-md ring-1 ring-inset ring-stroke-soft-200'>
      <div className='flex items-center gap-3 border-b border-stroke-soft-200 bg-bg-weak-50 px-4 py-3'>
        <div aria-hidden='true' className='flex gap-1.5'>
          <span className='size-2.5 rounded-full bg-stroke-sub-300' />
          <span className='size-2.5 rounded-full bg-stroke-sub-300' />
          <span className='size-2.5 rounded-full bg-stroke-sub-300' />
        </div>
        <p className='font-mono text-paragraph-xs text-text-sub-600'>
          clement@morere.fr
        </p>
      </div>

      <div className='flex flex-col gap-5 p-5 font-mono text-paragraph-sm sm:p-6'>
        {terminalBlocks.map((block) => (
          <div key={block.id} className='flex flex-col gap-1.5'>
            <p className='text-text-strong-950'>
              <span className='text-primary-base'>$</span> {block.command}
            </p>
            {block.outputLines.map((line) => (
              <p key={line} className='text-text-sub-600'>
                {line}
              </p>
            ))}
          </div>
        ))}
        <p className='text-text-strong-950'>
          <span className='text-primary-base'>$</span>{' '}
          <span
            aria-hidden='true'
            className='inline-block h-4 w-2 translate-y-0.5 bg-text-strong-950'
          />
        </p>
      </div>
    </div>
  );
}
