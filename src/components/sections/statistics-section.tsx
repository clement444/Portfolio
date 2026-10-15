import { getStatistics } from '@/content/statistics';

const statistics = getStatistics();

export function StatisticsSection() {
  return (
    <section aria-label='Chiffres clés' className='px-4 sm:px-6'>
      <dl className='mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-stroke-soft-200 shadow-regular-sm ring-1 ring-inset ring-stroke-soft-200 lg:grid-cols-4'>
        {statistics.map((statistic) => (
          <div
            key={statistic.id}
            className='flex flex-col gap-1 bg-bg-white-0 px-5 py-6 sm:px-8'
          >
            <dd className='order-1 text-title-h4 text-text-strong-950'>
              {statistic.value}
            </dd>
            <dt className='order-2 text-paragraph-sm text-text-sub-600'>
              {statistic.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
