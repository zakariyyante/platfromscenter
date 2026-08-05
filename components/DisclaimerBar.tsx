import Link from "next/link";
import Image from "next/image";

export default function DisclaimerBar() {
  return (
    <section className="bg-[#0a070f] border-t border-white/5 py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: 18+ and Warning */}
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-xl">
          <div className="relative w-14 h-14">
            <Image src="/18+.png" alt="18+" fill className="object-contain" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">
              Attention : Interdit aux mineurs
            </h4>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-relaxed">
              L&apos;accès est strictement réservé aux adultes de 18 ans et plus.
            </p>
          </div>
        </div>

        {/* Center: Risk Info */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-loose">
            L&apos;utilisation comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le <span className="text-white">09 74 75 13 13</span> (appel non surtaxé) ou visitez <Link href="https://www.joueurs-info-service.fr/" className="text-cyan-400 border-b border-cyan-400/30">Service d&apos;Aide</Link>.
          </p>
        </div>

        {/* Right: Regulatory */}
        <div className="flex items-center justify-center gap-6 border border-white/10 p-4 rounded-xl min-w-[200px] grayscale opacity-50">
          <Image src="/anj.webp" alt="Régulé par l'ANJ" width={80} height={40} className="object-contain" />
          <Image src="/mediateur.webp" alt="Médiateur" width={80} height={40} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
