import { LanguageProvider } from '@/context/LanguageContext';
import { ParticleBackground } from '@/components/ParticleBackground';
import { WaveBackground } from '@/components/WaveBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { Features } from '@/sections/Features';
import { Industries } from '@/sections/Industries';
import { HowItWorks } from '@/sections/HowItWorks';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#0a0f1c] overflow-x-hidden">
        {/* Background Effects */}
        <ParticleBackground />
        <WaveBackground />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <Features />
          <Industries />
          <HowItWorks />
          <CTA />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
