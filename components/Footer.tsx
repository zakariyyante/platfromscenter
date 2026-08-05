import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a070f] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Centered Logo */}
        <div className="flex justify-center mb-20">
          <Link href="/">
            <div className="relative w-48 h-24">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                fill
                className="object-contain opacity-50" 
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.2em] mb-8 text-[11px] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-cyan-400" /> DIVULGATION D&apos;AFFILIATION
            </h4>
            <p className="text-gray-500 text-[10px] leading-loose font-bold tracking-widest uppercase">
              Platforms Center opère comme un comparateur indépendant. Des rémunérations affiliées peuvent être perçues auprès des opérateurs mentionnés ici. Ces partenariats peuvent influer sur le classement des enseignes, sans toutefois altérer la neutralité de nos évaluations issues de tests concrets.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest">Contenu Publicitaire</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 max-w-4xl mx-auto">
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] mb-10 text-[11px]">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Accueil</Link></li>
              <li><Link href="#brands" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Marques</Link></li>
              <li><Link href="#guide" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Guide</Link></li>
              <li><Link href="#about" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">À Propos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] mb-10 text-[11px]">Légal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Confidentialité</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Conditions</Link></li>
              <li><Link href="/cookies" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Compliance Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 mb-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <Image src="/18+.png" alt="18+" width={40} height={40} className="object-contain" />
          <Image src="/anj.webp" alt="ANJ" width={60} height={30} className="object-contain" />
          <Image src="/mediateur.webp" alt="Médiateur des Jeux" width={100} height={40} className="object-contain" />
          <Image src="/begambleaware.webp" alt="BeGambleAware" width={120} height={30} className="object-contain" />
          <Image src="/joueurs.webp" alt="Joueurs Info Service" width={140} height={40} className="object-contain" />
        </div>

        {/* Bottom Bar */}
        <div className="text-center border-t border-white/5 pt-10">
          <p className="text-gray-700 text-[9px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} platformscenter.com • Tous Droits Réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
