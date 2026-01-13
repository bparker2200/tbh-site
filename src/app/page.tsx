import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HostYourEventSection from '@/components/HostYourEventSection';
import InteriorImageSection from '@/components/InteriorImageSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HostYourEventSection />
      <InteriorImageSection />
      <Footer />
    </div>
  );
}
