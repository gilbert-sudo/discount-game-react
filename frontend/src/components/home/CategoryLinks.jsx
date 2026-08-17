import React from 'react';
import { Gamepad2, Box, Aperture, Cpu, Disc3, Disc, Headphones, Flame } from 'lucide-react';

const categories = [
  { name: 'Playstation', icon: Gamepad2, color: '#00439C', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=600' },
  { name: 'Xbox', icon: Box, color: '#107C10', image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Nintendo', icon: Aperture, color: '#E60012', image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Rétro Gaming', icon: Cpu, color: '#FF9900', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600' },
  { name: 'Blu-Ray', icon: Disc3, color: '#005CB9', image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=600' },
  { name: 'DVD', icon: Disc, color: '#333333', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600' },
  { name: 'Musique', icon: Headphones, color: '#1DB954', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600' },
  { name: 'Déstockage', icon: Flame, color: '#ff4655', isDestockage: true, image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600' }
];

const CategoryLinks = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-slate-900 dark:text-white pl-2">Parcourir</h2>
      </div>
      
      {/* 
        Mobile: Horizontal scroll container (hide scrollbar) 
        Tablet/Desktop: CSS Grid
      */}
      <div className="flex overflow-x-auto gap-4 pb-6 pt-2 px-2 -mx-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-4 xl:grid-cols-8 md:overflow-visible md:pb-0 md:pt-0 md:px-0 md:mx-0">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          
          return (
            <a 
              key={index} 
              href="#" 
              className={`relative group overflow-hidden rounded-3xl flex-shrink-0 w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-auto md:h-[160px] lg:h-[180px] xl:h-[200px] snap-start shadow-md hover:-translate-y-2 transition-all duration-300
                ${cat.isDestockage ? 'ring-2 ring-[#ff4655] shadow-[#ff4655]/20' : ''}
              `}
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ backgroundColor: `${cat.color}E6` }} // 90% opacity hex
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-white font-bold text-sm sm:text-base leading-tight drop-shadow-md">
                  {cat.name}
                </span>
                {cat.isDestockage && (
                  <span className="text-xs font-semibold text-[#ff4655] bg-white/90 px-2 py-0.5 rounded-full mt-2 w-max inline-block shadow-sm">
                    Offres chaudes
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryLinks;
