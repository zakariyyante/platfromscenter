"use client";

import { useEffect, useState } from "react";
import { Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";

interface MobilePopupProps {
  brands: Brand[];
  gclid?: string;
}

import Image from "next/image";

export default function MobilePopup({ brands, gclid }: MobilePopupProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show modal if gclid is present and we have mobile brands
    if (gclid && brands.length > 0) {
      setShow(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [gclid, brands]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#020617] flex flex-col overflow-y-auto md:hidden cyber-grid">
      <div className="p-6 flex justify-between items-center border-b border-white/5 glass-morphism">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={48} height={48} />
          <span className="font-black text-white uppercase tracking-tighter text-lg">Mobile Access</span>
        </div>
        <button 
          onClick={() => setShow(false)}
          className="p-2 text-slate-400 hover:text-white border border-white/10 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-6 flex-1">
        <div className="mb-12 text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
            Optimisation Mobile active
          </div>
          <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">
            Interface <br /><span className="tech-gradient-text">Nomade</span>
          </h2>
          <p className="text-slate-400 text-sm font-light">Accès sécurisé aux meilleures plateformes optimisées pour votre terminal mobile.</p>
        </div>

        <div className="flex flex-col gap-6 mb-16">
          {brands.map((brand, i) => (
            <BrandCard key={brand.id} brand={brand} gclid={gclid} rank={i + 1} />
          ))}
        </div>

        <div className="glass-morphism border border-white/5 p-8 rounded-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-3xl -z-10" />
          <div className="flex items-center gap-4 mb-6 text-red-500">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500 font-black text-sm">18+</div>
            <span className="font-black uppercase tracking-[0.1em] text-sm">Contrôle Majeur Requis</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
            Le jeu comporte des risques technologiques et financiers. Pour être aidé, contactez le réseau de protection au 09 74 75 13 13.
          </p>
          <div className="flex items-center gap-8 opacity-40 grayscale">
            <div className="font-black text-white text-xl tracking-tighter">ANJ</div>
            <div className="font-serif italic text-white text-xs">Joueurs Info</div>
          </div>
        </div>
      </div>
      
      <div className="p-8 border-t border-white/5 glass-morphism text-center">
        <button 
          onClick={() => setShow(false)}
          className="w-full py-5 bg-linear-to-r from-cyan-600 to-purple-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-sm shadow-[0_0_20px_rgba(14,165,233,0.3)]"
        >
          Accéder au Dashboard
        </button>
        <p className="text-[10px] text-slate-600 mt-6 font-bold uppercase tracking-[0.1em]">© platformscenter 2026</p>
      </div>
    </div>
  );
}
