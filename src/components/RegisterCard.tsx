export function RegisterCard() {
  return (
    <div className="bg-[#111118] border border-[rgba(255,215,0,0.25)] rounded-2xl p-7 mb-5 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-[#FFD700] before:to-transparent before:opacity-60">
      <div className="font-cinzel text-base font-semibold text-[#FFD700] mb-3">
        🔗 Register via Official Link
      </div>
      <div className="text-sm text-[rgba(240,230,200,0.55)] leading-relaxed">
        To participate in the Silent Zone Lucky Draw, you{' '}
        <strong className="text-[#FFD700]">must register</strong> through our
        official BigDaddy invitation link below. Accounts created through other
        links will{' '}
        <strong className="text-[#E74C3C]">not be eligible</strong>.
      </div>
      <a
        href="https://bdggame8.com//#/register?invitationCode=aYkmq1608"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] text-[#0A0A0F] font-cinzel font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl no-underline border-none cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(255,215,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(255,215,0,0.5)] mt-4"
      >
        🎰 Register on BigDaddy
      </a>
    </div>
  );
}
