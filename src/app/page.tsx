import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Gallery />
      <Footer />
    </div>
  );
}
