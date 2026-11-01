'use client';

import ChurchHistory from '@/components/ChurchHistory';

export default function HistoryPageClient() {
  return (
    <main className="min-h-screen bg-[#faf9fc]">
      <ChurchHistory showHeroHeader={true} />
    </main>
  );
}
