import React from 'react';
import { motion } from 'framer-motion';
import { Star, Mail, Phone, MapPin } from 'lucide-react';

const Testimonial = ({ quote, name, role, img }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl"
  >
    <div className="mb-2 flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400" />
      ))}
    </div>
    <p className="text-white/80">“{quote}”</p>
    <div className="mt-4 flex items-center gap-3">
      <img src={img} alt={name} className="h-10 w-10 rounded-full object-cover" />
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-white/60">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Contact = () => (
  <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
    <h4 className="text-lg font-semibold">Get in touch</h4>
    <p className="mt-1 text-sm text-white/70">Schedule a walkthrough or ask anything about the platform.</p>
    <form className="mt-4 space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400/50" placeholder="Your name" />
        <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400/50" placeholder="Email address" />
      </div>
      <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-cyan-400/50" placeholder="Tell us about your organization" />
      <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">Request demo</button>
    </form>
    <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-3">
      <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@impactos.org</div>
      <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (415) 555-0182</div>
      <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> San Francisco, CA</div>
    </div>
  </div>
);

const TestimonialsContact = () => {
  return (
    <section className="relative z-0 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Testimonials & Programs</h3>
            <p className="mt-1 text-white/70">Trusted by nonprofits running programs worldwide.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Testimonial
              quote="This platform elevated our donor experience and doubled our recurring gifts in one quarter."
              name="Rosa Martinez"
              role="Director, CleanWorld Foundation"
              img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
            />
            <Testimonial
              quote="The analytics and transparency impressed our board and helped secure new grants."
              name="James Okoye"
              role="COO, HealthFirst Initiative"
              img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  title: 'Nutrition Program',
                  img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
                },
                {
                  title: 'STEM Workshops',
                  img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
                },
                {
                  title: 'Shelter Support',
                  img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
                },
              ].map((p, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <img src={p.img} alt={p.title} className="h-36 w-full object-cover" />
                  <div className="p-3 text-sm text-white/90">{p.title}</div>
                </div>
              ))}
            </div>
          </div>

          <Contact />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default TestimonialsContact;
