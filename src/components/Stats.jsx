import React from 'react';
import { motion } from 'framer-motion';
import { Users, Activity, DollarSign } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, delta, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl"
  >
    <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${color} opacity-20 blur-2xl`} />
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm text-white/70">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
    {delta && (
      <p className="mt-3 text-sm text-emerald-400">{delta} this month</p>
    )}
  </motion.div>
);

const PaymentsChart = () => {
  // simple SVG sparkline for payments analytics
  const points = [5, 9, 7, 14, 18, 16, 20, 24, 22, 28, 32, 40];
  const pathD = points
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * 30} ${80 - v}`)
    .join(' ');
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-white">Payments analytics</h4>
        <span className="text-xs text-white/60">Last 12 weeks</span>
      </div>
      <svg viewBox="0 0 330 80" className="h-32 w-full">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d={pathD} fill="none" stroke="url(#grad)" strokeWidth="3" />
        <polygon
          points={`${pathD.replace(/L/g, '').replace('M', '')} L 330 80 L 0 80 Z`}
          fill="url(#grad)"
          opacity="0.25"
        />
      </svg>
      <div className="mt-2 grid grid-cols-3 gap-4 text-sm text-white/70">
        <div>
          <p className="text-white/60">Avg. Donation</p>
          <p className="font-medium text-white">$56.40</p>
        </div>
        <div>
          <p className="text-white/60">Conversion</p>
          <p className="font-medium text-white">4.7%</p>
        </div>
        <div>
          <p className="text-white/60">Refunds</p>
          <p className="font-medium text-emerald-400">0.3%</p>
        </div>
      </div>
    </div>
  );
};

const DonorsList = () => {
  const donors = [
    { name: 'Ava Brooks', amount: 120 },
    { name: 'Liam Chen', amount: 80 },
    { name: 'Maya Singh', amount: 350 },
    { name: 'Ethan Park', amount: 40 },
    { name: 'Noah Patel', amount: 200 },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between">
        <h4>Recent donors</h4>
        <span className="text-xs text-white/60">Live</span>
      </div>
      <ul className="space-y-3">
        {donors.map((d, i) => (
          <li key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/80 to-cyan-400/80 text-xs font-semibold">
                {d.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <span className="text-white/80">{d.name}</span>
            </div>
            <span className="font-medium">${d.amount.toFixed(0)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="relative mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <StatCard
          icon={DollarSign}
          label="Total raised"
          value="$1,284,320"
          delta="+12%"
          color="bg-fuchsia-500"
        />
        <StatCard
          icon={Users}
          label="Active donors"
          value="24,581"
          delta="+8%"
          color="bg-cyan-400"
        />
        <StatCard
          icon={Activity}
          label="Campaigns running"
          value="47"
          delta="+5%"
          color="bg-indigo-500"
        />
        <div className="space-y-5">
          <PaymentsChart />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="md:col-span-2">
          <PaymentsChart />
        </div>
        <DonorsList />
      </div>
    </section>
  );
};

export default Stats;
