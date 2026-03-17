import { useState } from 'react';
import { Header } from './components/Header';
import { StepBadge } from './components/StepBadge';
import { RegisterCard } from './components/RegisterCard';
import { TiersGrid } from './components/TiersGrid';
import { SubmissionForm } from './components/SubmissionForm';
import { ResultDisplay } from './components/ResultDisplay';
import { AdminPanel } from './components/AdminPanel';
import { Footer } from './components/Footer';
import type { Tier } from './types';

function App() {
  const [result, setResult] = useState<{
    gameId: string;
    tier: Tier;
    luckyNumber: number;
  } | null>(null);

  const handleSubmissionSuccess = (
    gameId: string,
    tier: Tier,
    luckyNumber: number
  ) => {
    setResult({ gameId, tier, luckyNumber });
    setTimeout(() => {
      document.getElementById('result-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0E6C8] overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-radial-gold" />
      <div className="fixed inset-0 z-0 pointer-events-none stars" />

      <Header />

      <main className="relative z-10 max-w-[860px] mx-auto px-5 py-8 pb-14">
        <StepBadge step="Step 01" />
        <RegisterCard />

        <StepBadge step="Step 02" />
        <TiersGrid />

        <StepBadge step="Step 03" />
        <SubmissionForm onSuccess={handleSubmissionSuccess} />

        {result && (
          <div id="result-section">
            <ResultDisplay
              gameId={result.gameId}
              tier={result.tier}
              luckyNumber={result.luckyNumber}
            />
          </div>
        )}

        <AdminPanel />
      </main>

      <Footer />
    </div>
  );
}

export default App;
