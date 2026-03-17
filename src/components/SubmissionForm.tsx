import { useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Tier } from '../types';

interface SubmissionFormProps {
  onSuccess: (gameId: string, tier: Tier, luckyNumber: number) => void;
}

export function SubmissionForm({ onSuccess }: SubmissionFormProps) {
  const [gameId, setGameId] = useState('');
  const [tier, setTier] = useState<Tier | ''>('');
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!gameId.trim()) {
      setError('Please enter your Game ID.');
      return;
    }
    if (!tier) {
      setError('Please select your tier.');
      return;
    }
    if (!confirmed) {
      setError('Please confirm your registration.');
      return;
    }

    setLoading(true);

    try {
      const luckyNumber = Math.floor(Math.random() * 1001) + 1000;

      const { error: dbError } = await supabase
        .from('submissions')
        .insert({
          game_id: gameId.trim(),
          tier,
          lucky_number: luckyNumber,
        });

      if (dbError) throw dbError;

      onSuccess(gameId.trim(), tier, luckyNumber);

      setGameId('');
      setTier('');
      setConfirmed(false);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111118] border border-[rgba(255,215,0,0.25)] rounded-2xl p-7 mb-5 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-[#FFD700] before:to-transparent before:opacity-60">
      <div className="font-cinzel text-lg font-bold text-[#FFD700] mb-1.5">
        🎟 Submit Your Entry
      </div>
      <div className="text-sm text-[rgba(240,230,200,0.55)] mb-6 leading-relaxed">
        Enter your BigDaddy Game ID and select your tier. You will receive a
        unique Lucky Number after submission.
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="gameId"
            className="block text-xs tracking-[0.2em] uppercase text-[#B8860B] font-cinzel mb-2"
          >
            Your BigDaddy Game ID
          </label>
          <input
            type="text"
            id="gameId"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            placeholder="e.g. BD123456789"
            autoComplete="off"
            className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,215,0,0.2)] rounded-lg px-4 py-3 text-[#F0E6C8] font-raleway text-sm outline-none transition-all focus:border-[#FFD700] focus:shadow-[0_0_0_3px_rgba(255,215,0,0.1)]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tier"
            className="block text-xs tracking-[0.2em] uppercase text-[#B8860B] font-cinzel mb-2"
          >
            Recharge Tier
          </label>
          <select
            id="tier"
            value={tier}
            onChange={(e) => setTier(e.target.value as Tier)}
            className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,215,0,0.2)] rounded-lg px-4 py-3 text-[#F0E6C8] font-raleway text-sm outline-none transition-all focus:border-[#FFD700] focus:shadow-[0_0_0_3px_rgba(255,215,0,0.1)] cursor-pointer appearance-none"
          >
            <option value="">— Select Your Tier —</option>
            <option value="Bronze">🥉 Tier I – Bronze (Min ₹100)</option>
            <option value="Silver">🥈 Tier II – Silver (₹500 – ₹5,000)</option>
            <option value="Gold">🥇 Tier III – Gold (₹5,000 – ₹30,000)</option>
          </select>
        </div>

        <div className="mb-4">
          <div className="flex items-start gap-3 p-3.5 bg-[rgba(255,215,0,0.04)] border border-[rgba(255,215,0,0.15)] rounded-lg">
            <input
              type="checkbox"
              id="confirmReg"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="w-[18px] h-[18px] min-w-[18px] accent-[#FFD700] cursor-pointer mt-0.5"
            />
            <label
              htmlFor="confirmReg"
              className="text-sm text-[rgba(240,230,200,0.55)] leading-relaxed cursor-pointer"
            >
              I confirm that I have registered through the official link{' '}
              <a
                href="https://bdggame8.com//#/register?invitationCode=aYkmq1608"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] no-underline hover:underline"
              >
                bdggame8.com
              </a>{' '}
              and my recharge matches the selected tier.
            </label>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-[rgba(192,57,43,0.15)] border border-[rgba(192,57,43,0.4)] rounded-lg text-sm text-[#FF9999]">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#8B0000] via-[#C0392B] to-[#8B0000] border border-[rgba(192,57,43,0.5)] text-[#FFE8E8] font-cinzel font-bold text-sm tracking-[0.2em] uppercase px-4 py-4 rounded-xl cursor-pointer transition-all shadow-[0_4px_20px_rgba(192,57,43,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-gradient-to-r hover:from-[#A00000] hover:via-[#E74C3C] hover:to-[#A00000] hover:shadow-[0_8px_30px_rgba(231,76,60,0.45)] hover:translate-y-[-2px] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? 'Submitting...' : '✦ Generate My Lucky Number ✦'}
        </button>
      </form>
    </div>
  );
}
