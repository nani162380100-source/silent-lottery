export function TiersGrid() {
  return (
    <>
      <p className="font-cinzel text-xs tracking-[0.5em] text-[#B8860B] uppercase text-center mb-5">
        Choose Your Tier &amp; Prize Pool
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
        <div className="tier-card bronze bg-[#16161F] rounded-2xl p-5 border border-[rgba(205,127,50,0.5)] relative overflow-hidden transition-all duration-250 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(205,127,50,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-[#CD7F32] before:to-transparent">
          <div className="font-cinzel text-[0.62rem] tracking-[0.4em] uppercase mb-1 opacity-70 text-[#CD7F32]">
            Tier I
          </div>
          <div className="font-cinzel-decorative text-lg font-bold mb-2.5 text-[#CD7F32]">
            Bronze
          </div>
          <div className="text-xs text-[rgba(240,230,200,0.55)] bg-[rgba(255,255,255,0.04)] rounded-md px-2.5 py-1.5 mb-3.5 font-medium tracking-wider">
            🔖 Min. Recharge: ₹100+
          </div>
          <ul className="list-none">
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥇 1st Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#CD7F32]">
                ₹80
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥈 2nd Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#CD7F32]">
                ₹60
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥉 3rd Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#CD7F32]">
                ₹40
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 text-sm border-b-0">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🎖 4th Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#CD7F32]">
                ₹20
              </span>
            </li>
          </ul>
        </div>

        <div className="tier-card silver bg-[#16161F] rounded-2xl p-5 border border-[rgba(192,192,192,0.5)] relative overflow-hidden transition-all duration-250 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(192,192,192,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-[#C0C0C0] before:to-transparent">
          <div className="font-cinzel text-[0.62rem] tracking-[0.4em] uppercase mb-1 opacity-70 text-[#C0C0C0]">
            Tier II
          </div>
          <div className="font-cinzel-decorative text-lg font-bold mb-2.5 text-[#C0C0C0]">
            Silver
          </div>
          <div className="text-xs text-[rgba(240,230,200,0.55)] bg-[rgba(255,255,255,0.04)] rounded-md px-2.5 py-1.5 mb-3.5 font-medium tracking-wider">
            🔖 Recharge: ₹500 – ₹5,000
          </div>
          <ul className="list-none">
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥇 1st Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#C0C0C0]">
                ₹250
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥈 2nd Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#C0C0C0]">
                ₹200
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥉 3rd Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#C0C0C0]">
                ₹150
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 text-sm border-b-0">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🎖 4th Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#C0C0C0]">
                ₹100
              </span>
            </li>
          </ul>
        </div>

        <div className="tier-card gold bg-[#16161F] rounded-2xl p-5 border border-[rgba(255,215,0,0.6)] relative overflow-hidden transition-all duration-250 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(255,215,0,0.25)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-[#FFD700] before:to-transparent">
          <div className="font-cinzel text-[0.62rem] tracking-[0.4em] uppercase mb-1 opacity-70 text-[#FFD700]">
            Tier III
          </div>
          <div className="font-cinzel-decorative text-lg font-bold mb-2.5 text-[#FFD700]">
            Gold
          </div>
          <div className="text-xs text-[rgba(240,230,200,0.55)] bg-[rgba(255,255,255,0.04)] rounded-md px-2.5 py-1.5 mb-3.5 font-medium tracking-wider">
            🔖 Recharge: ₹5,000 – ₹30,000
          </div>
          <ul className="list-none">
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥇 1st Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#FFD700]">
                ₹1000
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥈 2nd Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#FFD700]">
                ₹500
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🥉 3rd Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#FFD700]">
                ₹400
              </span>
            </li>
            <li className="flex items-center justify-between py-1.5 text-sm border-b-0">
              <span className="text-[rgba(240,230,200,0.55)] text-xs tracking-wider">
                🎖 4th Prize
              </span>
              <span className="font-cinzel font-bold text-sm text-[#FFD700]">
                ₹300
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
