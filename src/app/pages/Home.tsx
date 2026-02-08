import { Header } from '../components/home/Header';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { CoreFour } from '../components/home/CoreFour';
import { OurProcess } from '../components/home/OurProcess';
import { OldiesButGoodies } from '../components/home/OldiesButGoodies';
import { DirectorsCut } from '../components/home/DirectorsCut';
import { RecentVideos } from '../components/home/RecentVideos';
import { Footer } from '../components/home/Footer';

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <CoreFour />
      <OurProcess />
      <OldiesButGoodies />
      <DirectorsCut />
      <RecentVideos />
      <Footer />
    </div>
  );
}
