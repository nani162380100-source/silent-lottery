export function Header() {
  return (
    <header className="relative z-10 text-center pt-12 pb-8 px-5 border-b border-[rgba(255,215,0,0.25)] bg-gradient-to-b from-[rgba(180,130,0,0.08)] to-transparent">
      <span className="text-[2.4rem] block mb-2 animate-float drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]">
        ♛
      </span>
      <div className="font-cinzel text-xs tracking-[0.45em] text-[#B8860B] uppercase mb-2.5">
        BigDaddy Official
      </div>
      <h1 className="font-cinzel-decorative text-4xl md:text-5xl font-black tracking-wider leading-tight bg-gradient-to-br from-[#FFE87C] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]">
        SILENT ZONE
        <br />
        EVENTS
      </h1>
      <p className="mt-2.5 text-xs tracking-[0.3em] text-[rgba(240,230,200,0.55)] uppercase font-medium">
        Exclusive Lucky Draw · Members Only
      </p>
    </header>
  );
}
