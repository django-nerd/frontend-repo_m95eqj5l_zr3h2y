import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    title: 'Design',
    text: 'We craft a conversion-first design tailored to your brand and audience.'
  },
  {
    title: 'Add AI',
    text: 'We plug in an on-brand AI assistant to chat, qualify, and book leads 24/7.'
  },
  {
    title: 'Launch & Grow',
    text: 'Go live with analytics, automations, and ongoing iteration as you scale.'
  }
];

const testimonials = [
  {
    quote: 'Our clinic started getting booked appointments the same week. The AI chat is a game changer.',
    author: 'Sofia M., Clinic Owner'
  },
  {
    quote: 'We closed more salon packages from website chats than phone calls — effortless.',
    author: 'Rhea T., Salon Manager'
  },
  {
    quote: 'Set it and forget it. Leads get nurtured automatically and we jump in when needed.',
    author: 'Aaron P., Home Services'
  }
];

const ProcessTestimonialsCTA = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="how" className="relative bg-[#0b0b0f] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Process */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">How It Works</h2>
            <div className="space-y-5">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-sm text-white/60">Step {i + 1}</div>
                  <div className="text-xl font-semibold">{s.title}</div>
                  <p className="text-white/70 text-sm mt-1">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur min-h-[220px] flex items-center justify-center text-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-xl">“{testimonials[index].quote}”</p>
                <div className="text-white/60">— {testimonials[index].author}</div>
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-fuchsia-500/10 to-blue-500/10" />
          </div>
        </div>

        {/* Final CTA */}
        <div id="contact" className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Let’s Build Your SmartSite</h3>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto">Share your business goals and we’ll send a tailored demo — free and without pressure.</p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => handleScroll('pricing')}
              className="relative rounded-full px-8 py-3 font-medium bg-purple-500 text-white shadow-[0_0_40px_8px_rgba(139,92,246,0.35)] hover:bg-purple-400 transition"
            >
              Get My Free Demo
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-10 top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" />
    </section>
  );
};

export default ProcessTestimonialsCTA;
