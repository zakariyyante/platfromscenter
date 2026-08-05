"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-[#0f0b15]/95 backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-16 h-16">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={64} 
                height={64} 
                className="object-contain" 
              />
            </div>
            <span className="text-lg font-bold tracking-tighter text-white hidden lg:block">
              platforms<span className="text-gray-400">center</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-red-600 bg-red-600 text-white text-[10px] font-bold">
              18+
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-xs font-bold text-white hover:text-cyan-400 transition-colors tracking-widest uppercase">Accueil</Link>
              <Link href="#brands" className="text-xs font-bold text-white hover:text-cyan-400 transition-colors tracking-widest uppercase">Classement</Link>
              <Link href="#guide" className="text-xs font-bold text-white hover:text-cyan-400 transition-colors tracking-widest uppercase">Critères</Link>
              <Link href="#about" className="text-xs font-bold text-white hover:text-cyan-400 transition-colors tracking-widest uppercase">Édition</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden sm:block px-8 py-2 text-[11px] font-bold uppercase tracking-widest border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all rounded-full">
              Contact
            </Link>

            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Advertising Disclosure Bar */}
        <div className="w-full bg-[#161021] py-2 border-b border-white/5">
          <div className="container mx-auto px-6 flex justify-center items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full border border-gray-600 flex items-center justify-center text-[9px] text-gray-500 font-bold leading-none">i</div>
            <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">
              INFORMATION COMMERCIALE : GUIDE GRATUIT SOUTENU PAR DES PARTENARIATS AFFILIÉS
            </span>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-[#0f0b15] border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white tracking-widest">ACCUEIL</Link>
            <Link href="#brands" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white tracking-widest">MARQUES</Link>
            <Link href="#guide" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white tracking-widest">GUIDE</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white tracking-widest">À PROPOS</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-bold text-cyan-400 tracking-widest">CONTACT</Link>
          </div>
        )}
      </header>
    </>
  );
}
