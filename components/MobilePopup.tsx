"use client";

import { useEffect, useState } from "react";
import { Brand, brands } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Link from "next/link";
import Image from "next/image";

interface MobilePopupProps {
  gclid?: string;
}

export default function MobilePopup({ gclid }: MobilePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileBrands = brands.filter(b => b.isMobile);

  useEffect(() => {
    if (gclid && gclid.length > 30 && mobileBrands.length > 0) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [gclid, mobileBrands.length]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-[#020205] overflow-y-auto animate-in fade-in duration-500"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="min-h-screen flex flex-col spotlight-bg">
        {/* Modal Header */}
        <div className="sticky top-0 z-[110] bg-[#06020f]/80 backdrop-blur-xl border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="relative w-32 h-8">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              fill 
              className="object-contain object-left scale-125 origin-left" 
              priority
              sizes="128px"
            />
          </div>
          
          {/* Burger Menu Mock */}
          <button className="text-white p-2" aria-label="Menu Principal">
            <div className="w-5 h-4 flex flex-col justify-between items-end">
              <span className="h-0.5 w-5 bg-[#ffd700] rounded-full" />
              <span className="h-0.5 w-3 bg-[#ffd700] rounded-full" />
              <span className="h-0.5 w-5 bg-[#ffd700] rounded-full" />
            </div>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-grow">
          <section className="pt-6 pb-4 px-6 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-[#b8860b]/10 border border-[#b8860b]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-pulse" aria-hidden="true" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#ffd700]">
                EXCLUSIF MOBILE
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl font-black mb-3 uppercase tracking-tight leading-tight text-white">
              LES MEILLEURES <span className="text-[#ffd700]">OFFRES DU JOUR</span>
            </h2>
            <p className="text-white/40 text-[11px] max-w-sm mx-auto font-medium mb-6 leading-relaxed">
              Nouvelles offres, retraits rapides et meilleures plateformes sélectionnées pour vous, avec des bonus exclusifs optimisés pour votre smartphone.
            </p>

            {/* Floating Trust Badges - Infinite Marquee */}
            <div className="relative w-full overflow-hidden pb-1 pt-0.5 mb-8">
              <div className="flex gap-2 animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, listIdx) => (
                  <div key={listIdx} className="flex gap-2 px-1">
                    {[
                      { icon: 'shield-check', text: 'Retraits Rapides', color: 'bg-blue-900/30 border-blue-800/50 text-blue-400' },
                      { icon: 'shield-exclamation', text: '18+', color: 'bg-red-950/30 border-red-900/50 text-red-500' },
                      { icon: 'badge-check', text: 'Licence ANJ', color: 'bg-[#b8860b]/10 border-[#b8860b]/30 text-[#ffd700]' },
                      { icon: 'headset', text: 'Support 24/7', color: 'bg-slate-900/50 border-slate-800 text-slate-400' }
                    ].map((badge, i) => (
                      <div 
                        key={`${listIdx}-${i}`} 
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm whitespace-nowrap ${badge.color}`}
                      >
                        <span className="text-[9px] font-black uppercase tracking-widest">{badge.text}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="px-3 pb-8">
            <div className="grid grid-cols-1 gap-3 mb-10">
              {mobileBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  gclidValue={gclid} 
                  rank={index + 1} 
                  variant="modal"
                  priority={index === 0}
                />
              ))}
            </div>

            {/* Compliance in Modal */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
              <div className="flex justify-center items-center gap-6 mb-8 opacity-30 grayscale">
                <div className="relative w-10 h-10">
                  <Image src="/18+.png" alt="18+" fill className="object-contain" />
                </div>
                <div className="relative w-16 h-8">
                  <Image src="/anj.webp" alt="ANJ" fill className="object-contain" />
                </div>
                <div className="relative w-24 h-8">
                  <Image src="/begambleaware.webp" alt="Responsabilité" fill className="object-contain" />
                </div>
              </div>
              <p className="text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-widest">
                L&apos;utilisation doit rester un plaisir. <br />
                Appelez le 09 74 75 13 13 pour de l&apos;aide.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-black/40 p-6 border-t border-white/5 text-center mt-auto">
          <div className="text-[8px] text-white/10 uppercase tracking-[0.4em] font-black">
            © 2026 PLATFORMSCENTER.COM
          </div>
        </div>
      </div>
    </div>
  );
}
