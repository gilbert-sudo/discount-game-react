import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    title: "Premier achat parfait",
    text: `"Livraison rapide. Produit conforme Tarif intéressant. Premier achat et pas le dernier!"`,
    author: "Olivier",
    date: "08/06/2026"
  },
  {
    id: 2,
    title: "Parfait !",
    text: `"Première commande sur ce site passée le 26 avril... super emballage et blu-rays sont en parfait état."`,
    author: "Toon",
    date: "29/04/2026"
  },
  {
    id: 3,
    title: "Dernière commande reçue",
    text: `"Reçu le 15 04 c’est ma troisième commande toujours nickel bien emballé livraison rapide."`,
    author: "Champion",
    date: "15/04/2026"
  },
  {
    id: 4,
    title: "Impeccable",
    text: `"Livraison rapide d'une grosse commande, très satisfait d'avoir pu rattraper bon nombre de films à prix réduit."`,
    author: "Bap",
    date: "29/08/2025"
  }
];

const Reviews = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-white/5 pb-4 pl-2">
        <h2 className="text-3xl font-display font-bold uppercase tracking-wider text-slate-900 dark:text-white">Derniers Avis Clients</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviewsData.map((review) => (
          <div key={review.id} className="bg-white dark:bg-dark-card border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#8b5cf6]/50 dark:hover:border-[#a855f7]/50 transition-colors cursor-pointer group shadow-sm dark:shadow-none hover:-translate-y-1">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#ff4655] text-[#ff4655]" />
              ))}
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{review.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">{review.text}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-bold text-slate-900 dark:text-white">{review.author}</span>
              <span className="text-xs text-slate-400">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
