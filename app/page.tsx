import { brands } from "@/app/data/brands";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import DisclaimerBar from "@/components/DisclaimerBar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import MobilePopup from "@/components/MobilePopup";

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const gclidValue = typeof searchParams.gclid === 'string' ? searchParams.gclid : undefined;
  
  const mobileBrands = brands.filter(b => b.isMobile);
  const desktopBrands = brands.filter(b => !b.isMobile);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Brand Grid Section */}
        <section id="brands" className="py-32 px-6 bg-[#0f0b15]">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Top <span className="text-cyan-400">Plateformes</span> Recommandées
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto font-medium leading-relaxed">
                Notre sélection rigoureuse des meilleurs sites basés sur la sécurité, les bonus et l&apos;expérience utilisateur.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
              {desktopBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  gclid={gclidValue} 
                  rank={index + 1}
                />
              ))}
            </div>
          </div>
        </section>

        <DisclaimerBar />
        <AboutSection />
      </main>

      <Footer />
      
      {/* Mobile Modal Logic */}
      <MobilePopup brands={mobileBrands} gclid={gclidValue} />
    </div>
  );
}
