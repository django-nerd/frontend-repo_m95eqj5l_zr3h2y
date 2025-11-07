import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm tracking-widest text-white/70 uppercase">USA • Canada • Australia</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Websites That Work While You Sleep.
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg">
            Stunning websites + AI assistants that book leads, chat with visitors, and automate follow-ups.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => handleScroll('contact')}
              className="relative overflow-hidden rounded-full px-6 py-3 text-sm md:text-base font-medium bg-white text-black transition hover:shadow-[0_0_40px_10px_rgba(168,85,247,0.35)] hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Free Demo</span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-blue-500/20" />
            </button>
            <button
              onClick={() => handleScroll('pricing')}
              className="rounded-full px-6 py-3 text-sm md:text-base font-medium border border-white/30 text-white bg-white/5 backdrop-blur transition hover:border-purple-400 hover:bg-white/10 hover:shadow-[0_0_30px_6px_rgba(99,102,241,0.25)]"
            >
              See Pricing
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 left-10 h-48 w-48 rounded-full bg-sky-500/30 blur-3xl" />
    </section>
  );
};

export default HeroSection;
