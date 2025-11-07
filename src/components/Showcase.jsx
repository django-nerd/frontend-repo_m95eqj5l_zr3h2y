import React from 'react';
import { motion } from 'framer-motion';

const BeforeAfterCard = ({ title, beforeSrc, afterSrc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
    >
      <div className="p-4">
        <h3 className="text-white font-semibold mb-3">{title}</h3>
        <div className="relative group aspect-[16/10] rounded-xl overflow-hidden">
          <img src={beforeSrc} alt={`${title} before`} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
          <img src={afterSrc} alt={`${title} after`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </motion.div>
  );
};

const Showcase = () => {
  return (
    <section id="showcase" className="relative py-24 bg-gradient-to-b from-[#0b0b0f] to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Showcase</h2>
          <p className="text-white/70">Hover to see the transformation.</p>
        </div>

        {/* Parallax wrapper */}
        <div className="grid md:grid-cols-3 gap-6 [perspective:1000px]">
          <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }}>
            <BeforeAfterCard
              title="Clinic"
              beforeSrc="https://images.unsplash.com/photo-1581594693700-8a240f9a50ff?q=80&w=1600&auto=format&fit=crop"
              afterSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
              delay={0}
            />
          </motion.div>
          <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }}>
            <BeforeAfterCard
              title="Salon"
              beforeSrc="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
              afterSrc="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop"
              delay={0.1}
            />
          </motion.div>
          <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }}>
            <BeforeAfterCard
              title="Local Services"
              beforeSrc="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
              afterSrc="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop"
              delay={0.2}
            />
          </motion.div>
        </div>
      </div>

      {/* Soft glows */}
      <div className="pointer-events-none absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-1/3 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
    </section>
  );
};

export default Showcase;
