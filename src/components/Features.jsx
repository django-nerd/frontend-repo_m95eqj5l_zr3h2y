import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Monitor, Bot, Calendar } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, text, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur text-white hover:bg-white/10 hover:border-white/20 transition relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-blue-500/10" />
      <div className="relative z-10">
        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_25px_6px_rgba(168,85,247,0.35)] transition">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{text}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative bg-[#0b0b0f] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Everything You Need to Grow</h2>
          <p className="text-white/70 mt-2">Modern design, real-time AI conversations, and hands-free bookings.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Monitor}
            title="Modern Design"
            text="Clean, conversion-focused websites that look great on every device."
            delay={0}
          />
          <FeatureCard
            icon={Bot}
            title="AI Chat Assistant"
            text="An always-on assistant that chats with visitors and captures qualified leads."
            delay={0.1}
          />
          <FeatureCard
            icon={Calendar}
            title="Automated Bookings"
            text="Let your site schedule calls, appointments, and send confirmations automatically."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
