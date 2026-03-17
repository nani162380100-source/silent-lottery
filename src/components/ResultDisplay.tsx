import type { Tier } from '../types';

interface ResultDisplayProps {
  gameId: string;
  tier: Tier;
  luckyNumber: number;
}

export function ResultDisplay({ gameId, tier, luckyNumber }: ResultDisplayProps) {
  const message = `🎰 Silent Zone Lucky Draw\nGame ID: ${gameId}\nTier: ${tier}\nLucky Number: ${luckyNumber}`;
  const teacherLink = `https://t.me/teacher_silent?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-gradient-to-br from-[rgba(255,215,0,0.07)] to-[rgba(255,215,0,0.02)] border border-[rgba(255,215,0,0.5)] rounded-2xl p-8 text-center mb-5 relative overflow-hidden animate-fadeIn before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-[#FFD700] before:to-transparent">
      <div className="font-cinzel text-xs tracking-[0.5em] text-[#B8860B] uppercase mb-4">
        ✦ Your Lucky Draw Number ✦
      </div>

      <div className="font-cinzel-decorative text-6xl md:text-7xl font-black bg-gradient-to-br from-[#FFE87C] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] tracking-wider mb-1.5 animate-pulse">
        {luckyNumber}
      </div>

      <div className="text-sm text-[rgba(240,230,200,0.55)] mb-5 leading-relaxed">
        Game ID: <strong className="text-[#FFE87C]">{gameId}</strong> &nbsp;|&nbsp;
        Tier: <strong className="text-[#FFE87C]">{tier}</strong>
        <br />
        Lucky Number: <strong className="text-[#FFE87C]">#{luckyNumber}</strong>
      </div>

      <div className="bg-[rgba(192,57,43,0.15)] border border-[rgba(192,57,43,0.4)] rounded-lg p-3 text-xs text-[#FF9999] leading-relaxed mb-5 text-left">
        ⚠️ <strong className="text-[#FF6B6B]">Important:</strong> You{' '}
        <strong>MUST</strong> send your Game ID and Lucky Number to our teacher
        for verification. Entries not sent to the teacher will{' '}
        <strong>NOT</strong> be carried forward to the Lucky Draw. Draw takes
        place the <strong>next day</strong> after submission.
      </div>

      <a
        href={teacherLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0A66C2] to-[#128C7E] text-white font-cinzel font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl no-underline border-none cursor-pointer transition-all shadow-[0_4px_20px_rgba(18,140,126,0.35)] hover:translate-y-[-2px] hover:shadow-[0_8px_28px_rgba(18,140,126,0.5)]"
      >
        📲 Send to Teacher on Telegram
      </a>
    </div>
  );
}
