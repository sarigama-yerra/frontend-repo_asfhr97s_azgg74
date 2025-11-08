import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 border border-white/20 shadow-inner">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">VidoSuite</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#get-started" className="ml-2 inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-white/20 transition">Get Started</a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-2 rounded-2xl border border-white/20 bg-white/10 p-4 text-white/90">
              <a href="#features" className="block px-2 py-2 rounded-lg hover:bg-white/10">Features</a>
              <a href="#projects" className="block px-2 py-2 rounded-lg hover:bg-white/10">Projects</a>
              <a href="#pricing" className="block px-2 py-2 rounded-lg hover:bg-white/10">Pricing</a>
              <a href="#contact" className="block px-2 py-2 rounded-lg hover:bg-white/10">Contact</a>
              <a href="#get-started" className="block px-2 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-center">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
