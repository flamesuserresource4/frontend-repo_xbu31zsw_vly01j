import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Showcase from './components/Showcase';
import TestimonialsContact from './components/TestimonialsContact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">ImpactOS</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#campaigns" className="hover:text-white">Campaigns</a>
            <a href="#stats" className="hover:text-white">Analytics</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a
              href="#contact"
              className="rounded-xl bg-white/5 px-4 py-2 font-medium text-white backdrop-blur-xl hover:bg-white/10"
            >
              Sign in
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Stats />
        <Showcase />
        <TestimonialsContact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
              <span className="font-semibold tracking-tight">ImpactOS</span>
            </div>
            <p className="mt-2 text-sm text-white/60">
              A modern platform for charities and nonprofits to run campaigns, accept payments, and
              grow donor relationships.
            </p>
          </div>
          <div>
            <h5 className="mb-2 font-medium">About</h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#campaigns" className="hover:text-white">Programs</a></li>
              <li><a href="#stats" className="hover:text-white">Analytics</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2 font-medium">Legal</h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-7xl px-6 text-left text-xs text-white/50">© {new Date().getFullYear()} ImpactOS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
