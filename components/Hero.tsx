import Image from "next/image";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#0f0b15]">
      {/* Background Gradient Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-purple-900/10 blur-[150px] rounded-full -z-10" />
      
      {/* Subtle lines/diagonal accents */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-[linear-gradient(45deg,transparent_45%,#fff_50%,transparent_55%)] bg-[length:200px_200px]" />

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400">
            OBSERVATOIRE FR · ÉDITION {currentYear}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Comparatif des opérateurs plébiscités
        </h1>
        
        <p className="text-base md:text-lg text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
          Passez en revue des promotions contrôlées, des enseignes suivies de près et des alternatives plébiscitées en France. Filtrez selon vos critères et repérez l&apos;offre adaptée sans perdre de temps.
        </p>

        <div className="text-[10px] text-gray-600 uppercase font-bold tracking-widest mb-8">
          Mise à jour · 5 août {currentYear}
        </div>
        
        <div className="flex items-center justify-center gap-6 mb-24">
          <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <span className="text-2xl text-pink-500 font-light tracking-tighter">$</span>
          <div className="flex items-center justify-center w-6 h-6 rounded-full border border-red-600 text-red-600 text-[8px] font-bold">18+</div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6 text-left group hover:bg-white/[0.08] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-base uppercase tracking-wider">Licencié</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Réglementé ANJ</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6 text-left group hover:bg-white/[0.08] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-base uppercase tracking-wider">Expertise</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Avis Certifiés</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6 text-left group hover:bg-white/[0.08] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <span className="text-2xl text-gray-400 font-light">$</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-base uppercase tracking-wider">Rapidité</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Retraits 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
