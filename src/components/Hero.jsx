import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pt-24 pb-10 lg:flex-row lg:gap-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full max-w-xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-xl">
            <Rocket className="h-4 w-4 text-fuchsia-400" />
            <span className="text-white/80">Modern fundraising for impact-driven orgs</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Power your charity with a sleek fundraising platform
          </h1>
          <p className="text-white/70 md:text-lg">
            Beautiful donation experiences, real-time analytics, and transparent reporting. Engage donors, run campaigns, and grow your mission in one place.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90"
            >
              Get a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#campaigns"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur-xl transition hover:bg-white/10"
            >
              Explore campaigns
            </a>
          </div>
          {/* Mini hero image strip */}
          <div className="mt-6 grid grid-cols-3 gap-3 opacity-90 sm:grid-cols-6">
            {[
              'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1509099873735-ef4bff19e808?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1509817316-1c5250ca0872?q=80&w=1200&auto=format&fit=crop',
            ].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5"
              >
                <img
                  src={src}
                  alt="impact"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Spline scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-0 h-[420px] w-full flex-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft gradient overlay for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Parallax band */}
      <div
        className="relative h-24 w-full bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-90"
      >
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>
    </section>
  );
};

export default Hero;
