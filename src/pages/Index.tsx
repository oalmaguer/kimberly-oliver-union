import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import DetailsSection from '@/components/DetailsSection';
import TimelineSection from '@/components/TimelineSection';
import LocationSection from '@/components/LocationSection';
import DressCodeSection from '@/components/DressCodeSection';
import GiftsSection from '@/components/GiftsSection';
import RSVPSection from '@/components/RSVPSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <DetailsSection />
      <TimelineSection />
      <LocationSection />
      <DressCodeSection />
      <GiftsSection />
      <RSVPSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
