import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer id="contact" className="py-10 text-center text-white/60">
      <p className="text-sm">© {new Date().getFullYear()} VidoSuite — Streamline pre & post production.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <CTA />
      <Footer />
    </div>
  );
}
