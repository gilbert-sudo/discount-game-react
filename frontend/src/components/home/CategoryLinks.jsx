import React from 'react';
import { Gamepad2, Box, Aperture, Cpu, Disc3, Disc, Headphones, Flame } from 'lucide-react';

const categories = [
  { name: 'Playstation', icon: Gamepad2, color: '#c000ff' },
  { name: 'Xbox', icon: Box, color: '#c000ff' },
  { name: 'Nintendo', icon: Aperture, color: '#c000ff' },
  { name: 'Rétro Gaming', icon: Cpu, color: '#c000ff' },
  { name: 'Blu-Ray', icon: Disc3, color: '#c000ff' },
  { name: 'DVD', icon: Disc, color: '#c000ff' },
  { name: 'Musique', icon: Headphones, color: '#c000ff' },
  { name: 'Déstockage', icon: Flame, color: '#ff4655', isDestockage: true }
];

const CategoryLinks = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-slate-900 dark:text-white pl-2">Parcourir</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          
          if (cat.isDestockage) {
            return (
              <a key={index} href="#" className="bg-white dark:bg-dark-card border border-slate-200 dark:border-white/5 rounded-3xl py-8 flex flex-col items-center justify-center gap-4 hover:bg-slate-50 dark:hover:bg-dark-hover hover:border-[#c000ff]/50 dark:hover:border-[#c000ff]/50 transition-all group shadow-sm dark:shadow-none hover:-translate-y-1">
                <div className="p-4 bg-[#ff4655]/10 rounded-full group-hover:bg-[#ff4655]/20 transition-colors">
                  <Icon className="w-8 h-8 text-[#ff4655]" />
                </div>
                <span className="text-sm font-bold text-[#ff4655]">{cat.name}</span>
              </a>
            );
          }

          return (
            <a key={index} href="#" className="bg-white dark:bg-dark-card border border-slate-200 dark:border-white/5 rounded-3xl py-8 flex flex-col items-center justify-center gap-4 hover:bg-slate-50 dark:hover:bg-dark-hover hover:border-[#c000ff]/50 dark:hover:border-[#c000ff]/50 transition-all group shadow-sm dark:shadow-none hover:-translate-y-1">
              <div className="p-4 bg-slate-100 dark:bg-dark-hover rounded-full group-hover:bg-[#c000ff]/10 transition-colors">
                <Icon className="w-8 h-8 text-slate-500 dark:text-slate-400 group-hover:text-[#c000ff] transition-colors" />
              </div>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{cat.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryLinks;
