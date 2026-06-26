import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { XRayHero } from './XRayHero';

export const XRayPage = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <XRayHero />
    <Footer />
  </div>
);
