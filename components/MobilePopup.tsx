"use client";

import { useEffect, useState } from "react";
import { Brand, brands } from "@/app/data/brands";
import Link from "next/link";
import Image from "next/image";
import { track } from "@vercel/analytics";

interface MobilePopupProps {
  gclid?: string;
}

// Global declaration for Google Tag function
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

function MobileBrandCard({ brand, gclid, label, labelColor }: { brand: Brand, gclid?: string, label: string, labelColor: string }) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    const finalUrl = buildUrl(brand.url, gclid);
    track('Brand Click', { 
      brand: brand.name,
      gclid: gclid || 'none',
      platform: 'mobile-modal'
    });
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, "_blank");
    }
  };

  const formatBonus = (text: string) => {
    return text.split(/(\d+€|\d+FS)/g).map((part, i) => {
      if (part.match(/\d+€|\d+FS/)) {
        return <span key={i} className="text-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] font-black">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div 
      className="bg-[#0f0f15] border border-[#b8860b]/40 rounded-[1.2rem] p-4 relative group pt-8 shadow-[0_0_30px_rgba(184,134,11,0.35)] active:shadow-[0_0_50px_rgba(184,134,11,0.6)] transition-all duration-500"
      onClick={handleCardClick}
    >
      {/* Background glow pulse effect */}
      <div className="absolute inset-0 bg-[#b8860b]/5 rounded-[1.2rem] blur-xl opacity-50 pointer-events-none -z-10 group-active:opacity-100 transition-opacity" />
      {/* Top Left Floating Badge */}
      <div className={`absolute -top-3 left-4 px-3 py-1 rounded-full ${labelColor} text-white text-[8px] font-black uppercase tracking-[0.1em] shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-10 border border-white/10 flex items-center justify-center`}>
        {label}
      </div>

      {/* Row 1: Logo | Bonus Text */}
      <div className="flex justify-between items-center mb-6 gap-4">
        <div className="relative w-36 h-14 shrink-0">
          <Image 
            src={brand.logo} 
            alt={`${brand.name} logo`} 
            fill 
            className="object-contain object-left" 
          />
        </div>
        <div className="text-right flex-1">
          <h3 className="text-sm font-black text-white uppercase tracking-tight leading-tight">
            {formatBonus(brand.bonus)}
          </h3>
        </div>
      </div>

      {/* Row 2: Rating | CTA Button */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <div className="flex gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-2.5 h-2.5 text-[#ffd700]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
            {brand.rating.toFixed(1)} <span className="text-gray-700">/ 10</span>
          </span>
        </div>

        <button 
          className="flex-1 py-2.5 px-4 rounded-lg bg-linear-to-r from-[#b8860b] to-[#8b6d31] text-white font-black text-[9px] uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all truncate"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          Jouer sur {brand.name}
        </button>
      </div>
    </div>
  );
}

export default function MobilePopup({ gclid }: MobilePopupProps) {
  const [show, setShow] = useState(false);
  const mobileBrands = brands.filter(b => b.isMobile);

  useEffect(() => {
    if (gclid && gclid.length > 30 && mobileBrands.length > 0) {
      setShow(true);
      document.body.style.overflow = "hidden";
    } else {
      setShow(false);
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [gclid, mobileBrands]);

  if (!show) return null;

  const labels = [
    { text: "Nouvelle Offre", color: "bg-blue-900" },
    { text: "Retraits Rapides", color: "bg-[#8b6d31]" }, // Antique Gold
    { text: "Meilleure Offre", color: "bg-[#0a0a0f]" },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#020205] flex flex-col overflow-y-auto md:hidden">
      {/* Custom Header for Modal */}
      <div className="px-4 h-12 flex justify-between items-center bg-[#020205] border-b border-[#b8860b]/20">
        <Link href="/">
          <div className="relative w-44 h-11">
            <Image src="/logo.png" alt="Logo" fill className="object-contain object-left scale-125 origin-left" />
          </div>
        </Link>
        {/* Fake Burger Menu */}
        <div className="flex flex-col gap-1.5 p-2">
          <div className="w-6 h-0.5 bg-[#ffd700] rounded-full"></div>
          <div className="w-6 h-0.5 bg-[#ffd700] rounded-full"></div>
        </div>
      </div>

      <div className="p-4 flex-1">
        {/* Hero Section */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#b8860b]/10 border border-[#b8860b]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ffd700]">
              Exclusif Mobile
            </span>
          </div>
          <h1 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-none">
            Les Meilleures <span className="text-[#ffd700]">Offres du Jour</span>
          </h1>
          <p className="text-gray-400 text-[11px] font-medium leading-relaxed max-w-[280px] mx-auto">
            Sélection prestigieuse de plateformes optimisées pour une expérience premium sur smartphone.
          </p>
        </div>

        {/* Trust Badges - Horizontal Auto-Floating Animation */}
        <div className="relative overflow-hidden mb-6 group">
          <div className="flex gap-2.5 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-2.5">
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-[8px] font-black uppercase tracking-widest">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Retraits Rapides
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-950/30 border border-red-900/50 text-red-500 text-[8px] font-black uppercase tracking-widest">
                  <div className="w-3 h-3 rounded-full border border-red-600 flex items-center justify-center text-[6px] font-black">18+</div>
                  18+
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#b8860b]/10 border border-[#b8860b]/30 text-[#ffd700] text-[8px] font-black uppercase tracking-widest">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Licence ANJ
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 text-[8px] font-black uppercase tracking-widest">
                  <span className="text-[10px] font-black">$</span>
                  Assistance 24/7
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-950/30 border border-green-900/50 text-green-500 text-[8px] font-black uppercase tracking-widest">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Sécurité SSL
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/30 border border-purple-900/50 text-purple-400 text-[8px] font-black uppercase tracking-widest">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Paie Instantanée
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-950/30 border border-indigo-900/50 text-indigo-400 text-[8px] font-black uppercase tracking-widest">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Équité Certifiée
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands List */}
        <div className="flex flex-col gap-3">
          {mobileBrands.map((brand, i) => (
            <MobileBrandCard 
              key={brand.id} 
              brand={brand} 
              gclid={gclid} 
              label={labels[i % labels.length].text} 
              labelColor={labels[i % labels.length].color} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
