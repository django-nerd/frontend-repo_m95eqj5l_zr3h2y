import React from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import ProcessTestimonialsCTA from './components/ProcessTestimonialsCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      {/* Simple Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="font-semibold">SmartSite Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <button onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white">Features</button>
            <button onClick={() => document.getElementById('showcase')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white">Showcase</button>
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white">Pricing</button>
            <button onClick={() => document.getElementById('how')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white">How It Works</button>
          </nav>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="rounded-full px-4 py-2 text-sm bg-white text-black hover:bg-white/90">Get Demo</button>
        </div>
      </header>

      <main className="pt-14">
        <HeroSection />
        <Features />
        <Showcase />
        <Pricing />
        <ProcessTestimonialsCTA />
      </main>

      <footer className="py-8 text-center text-white/60 text-sm bg-black border-t border-white/10">
        © {new Date().getFullYear()} SmartSite Labs — Websites that work while you sleep.
      </footer>
    </div>
  );
};

export default App;
