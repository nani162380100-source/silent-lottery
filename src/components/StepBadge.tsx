interface StepBadgeProps {
  step: string;
}

export function StepBadge({ step }: StepBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-[rgba(255,215,0,0.15)] border border-[rgba(255,215,0,0.25)] rounded-3xl px-3.5 py-1.5 text-xs tracking-[0.25em] text-[#FFD700] font-cinzel uppercase mb-3.5">
      ⬡ {step}
    </div>
  );
}
