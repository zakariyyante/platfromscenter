export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[#020205]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white">
            NOTRE SYSTÈME <span className="tech-gradient-text">D&apos;ANALYSE</span>
          </h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto mb-8 shadow-[0_0_10px_var(--primary)]" />
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Nous appliquons un protocole de notation précis s&apos;appuyant sur plus de 50 critères de sélection afin de vous assurer une expérience optimale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Excellence Analytique */}
          <div className="glass-morphism cyber-border p-10 rounded-sm">
            <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-tight flex items-center gap-4">
              <span className="text-cyan-400">01.</span> AUDIT DE PERFORMANCE
            </h3>
            <ul className="space-y-6">
              {[
                "Études détaillées réalisées par des spécialistes du marché",
                "Contrôle permanent des bonus et des offres promotionnelles",
                "Vérification stricte des délais et méthodes de paiement",
                "Audit de la sûreté et du respect du cadre réglementaire ANJ",
                "Protocole de scoring propriétaire Platform Spotlight"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="text-cyan-400 mt-1 font-bold">✦</span>
                  <span className="text-gray-300 font-medium text-sm uppercase tracking-wide leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Utilisation Responsable */}
          <div className="glass-morphism cyber-border p-10 rounded-sm border-l-indigo-500/50">
            <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-tight flex items-center gap-4">
              <span className="text-indigo-400">02.</span> UTILISATION RESPONSABLE
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              La sécurité de nos utilisateurs est notre priorité absolue. Nous promouvons uniquement des plateformes qui respectent les normes de sécurité et d&apos;utilisation responsable.
            </p>
            <div className="space-y-6">
              <a 
                href="https://www.joueurs-info-service.fr/" 
                target="_blank" 
                className="flex items-center justify-between p-5 glass-morphism border border-white/5 hover:border-cyan-400/50 transition-all group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-cyan-400 uppercase tracking-widest mb-1">Aide Immédiate</span>
                  <span className="font-bold text-white text-lg tracking-tighter">09 74 75 13 13</span>
                </div>
                <span className="text-cyan-400 font-black text-sm group-hover:translate-x-2 transition-transform uppercase tracking-widest">INFO SERVICE →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
