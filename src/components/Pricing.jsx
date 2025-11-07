import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const PriceCard = ({ name, setup, hosting, extras, features, highlight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={
        `relative rounded-2xl p-6 bg-white/5 border backdrop-blur text-white ${
          highlight ? 'border-purple-400/60 shadow-[0_0_60px_10px_rgba(139,92,246,0.25)]' : 'border-white/10'
        }`
      }
    >
      {highlight && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-purple-400/50" />
      )}
      <div className="flex items-center gap-2 mb-2">
        {highlight && <Sparkles className="h-5 w-5 text-purple-300" />}
        <h3 className="text-2xl font-semibold">{name}</h3>
      </div>
      <p className="text-white/80">{setup}</p>
      <p className="text-white/80">{hosting}</p>
      {extras && <p className="text-purple-300 mt-1">{extras}</p>}

      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" /> {f}
          </li>
        ))}
      </ul>

      <button className={`mt-6 w-full rounded-xl px-4 py-3 font-medium transition ${
        highlight
          ? 'bg-purple-500 text-white hover:bg-purple-400'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}>
        Choose {name}
      </button>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Simple Pricing</h2>
          <p className="text-white/70">Transparent rates that scale as you grow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <PriceCard
            name="Launch Plan"
            setup="$200 setup"
            hosting="$3/month or $30/year hosting"
            features={[
              'Up to 5 pages',
              '5 revisions',
              'Responsive design',
              'Basic hosting',
            ]}
            highlight={false}
          />
          <PriceCard
            name="Growth Plan"
            setup="$250 setup"
            hosting="$3/month or $30/year hosting"
            extras="+ AI usage (recurring, depends on usage)"
            features={[
              'Everything in Launch',
              'AI Chatbot',
              'WhatsApp alerts',
              'Booking automation',
              'Follow-up emails',
            ]}
            highlight
          />
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-48 w-48 translate-x-1/3 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
    </section>
  );
};

export default Pricing;
