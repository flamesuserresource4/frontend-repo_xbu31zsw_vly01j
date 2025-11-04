import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, HeartHandshake, Megaphone } from 'lucide-react';

const Card = ({ title, subtitle, img, badge }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
  >
    <img src={img} alt={title} className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
    <div className="p-5">
      <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
        {badge}
      </span>
      <h4 className="mt-3 text-lg font-semibold text-white">{title}</h4>
      <p className="text-sm text-white/70">{subtitle}</p>
    </div>
  </motion.div>
);

const Showcase = () => {
  return (
    <section id="campaigns" className="relative z-0 mt-16 bg-gradient-to-b from-transparent to-slate-950/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Campaigns & Events</h3>
            <p className="mt-1 text-white/70">Showcasing the impact you make across communities.</p>
          </div>
          <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-xl hover:bg-white/10">Start a campaign</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            title="Clean Water for All"
            subtitle="Bringing sustainable water systems to rural villages."
            img="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop"
            badge={
              <span className="inline-flex items-center gap-2"><Megaphone className="h-3.5 w-3.5" /> Campaign</span>
            }
          />
          <Card
            title="Back-to-School Drive"
            subtitle="Supplying uniforms and books to 3,000 students."
            img="https://images.unsplash.com/photo-1523246192320-3802bd7cf6b6?q=80&w=1600&auto=format&fit=crop"
            badge={
              <span className="inline-flex items-center gap-2"><HeartHandshake className="h-3.5 w-3.5" /> Program</span>
            }
          />
          <Card
            title="Community Health Week"
            subtitle="Free checkups and workshops for families."
            img="https://images.unsplash.com/photo-1530023367847-a683933f4175?q=80&w=1600&auto=format&fit=crop"
            badge={
              <span className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> Event</span>
            }
          />
        </div>

        {/* Parallax strip */}
        <div className="mt-10 h-28 w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1460600421604-5e138c208b9c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center bg-fixed" />
      </div>
    </section>
  );
};

export default Showcase;
