"use client";
import { Card } from "./Card";

export const Terminal = () => {
  return (
    <Card className="relative p-5 font-mono text-xs bg-[#0c0c0c]/90 border-white/8">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/6 mb-4">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFA043]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
        </div>
        <div className="text-white/25 text-[11px] tracking-wide font-mono">
          caleb@devkd:~
        </div>
      </div>

      <div className="space-y-1 text-[13px] leading-relaxed">
        <p className="text-white/40">
          <span className="text-[#FF6B00] font-bold">caleb@devkd</span>:<span className="text-[#FFA043]">~</span>$ cat profile.json
        </p>
        <div className="text-white/80 pt-1 font-mono">
          <p>&#123;</p>
          <p className="pl-4">
            <span className="text-[#FF8533]">&quot;name&quot;</span>: <span className="text-[#FFA043]">&quot;Caleb Botchway (DevKD)&quot;</span>,
          </p>
          <p className="pl-4">
            <span className="text-[#FF8533]">&quot;education&quot;</span>: <span className="text-[#FFA043]">&quot;BSc IT @ Central University (L300)&quot;</span>,
          </p>
          <p className="pl-4">
            <span className="text-[#FF8533]">&quot;hackathons&quot;</span>: <span className="text-[#FFA043]">&quot;BridgeLabs AI — Top 6 Winners (2025)&quot;</span>,
          </p>
          <p className="pl-4">
            <span className="text-[#FF8533]">&quot;stack&quot;</span>: [<span className="text-white/90">&quot;Flutter&quot;</span>, <span className="text-white/90">&quot;FastAPI&quot;</span>, <span className="text-white/90">&quot;React&quot;</span>, <span className="text-white/90">&quot;Python&quot;</span>, <span className="text-white/90">&quot;Java&quot;</span>],
          </p>
          <p className="pl-4">
            <span className="text-[#FF8533]">&quot;status&quot;</span>: <span className="text-[#FFA043] font-lcd">&quot;Building &amp; Available&quot;</span>
          </p>
          <p>&#125;</p>
        </div>
      </div>
    </Card>
  );
};
