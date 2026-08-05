"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  gclid?: string;
  rank?: number;
}

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export default function BrandCard({ brand, gclid, rank }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    const finalUrl = buildUrl(brand.url, gclid);
    track('Brand Click', { brand: brand.name });
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, "_blank");
    }
  };

  return (
    <div 
      className="bg-[#120b1e] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group transition-all duration-300 hover:border-white/10"
      onClick={handleCardClick}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        {/* Left side: Logo, Stars, Rating, Payments */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-32 h-16 mb-4">
            <Image 
              src={brand.logo} 
              alt={`${brand.name} logo`} 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3 h-3 ${i < 5 ? "text-yellow-500" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-400">
              {brand.rating.toFixed(1)} <span className="text-gray-600">/ 10</span>
            </span>
          </div>
          <div className="flex items-center gap-2 grayscale opacity-70">
            {/* Hardcoded icons to match style */}
            <div className="bg-white/10 p-1 rounded text-[10px] text-white font-bold w-6 h-4 flex items-center justify-center">₿</div>
            <div className="bg-white/10 p-1 rounded text-[10px] text-white font-bold w-6 h-4 flex items-center justify-center">P</div>
            <div className="bg-white/10 p-1 rounded text-[10px] text-white font-bold w-6 h-4 flex items-center justify-center italic">VISA</div>
          </div>
        </div>

        {/* Right side: Bonus */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-4">
            <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400">Bonus Exclusif</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight max-w-xs">
            {brand.bonus}
          </h3>
        </div>
      </div>

      {/* Full Width Button */}
      <button 
        className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
        }}
      >
        Jouer sur {brand.name}
      </button>
    </div>
  );
}
