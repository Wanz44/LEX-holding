import { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, ArrowRight, Filter } from 'lucide-react';
import { motion } from 'motion/react';

const PROPERTIES = [
  {
    id: 1,
    title: "Villa Moderne Gombe",
    type: "Villa",
    transaction: "Vente",
    commune: "Gombe",
    price: "1,200,000 $",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    beds: 5,
    baths: 4,
    size: "450 m²"
  },
  {
    id: 2,
    title: "Appartement de Luxe Ngaliema",
    type: "Appartement",
    transaction: "Location",
    commune: "Ngaliema",
    price: "3,500 $ / mois",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    baths: 2,
    size: "180 m²"
  },
  {
    id: 3,
    title: "Terrain Industriel Limete",
    type: "Terrain",
    transaction: "Vente",
    commune: "Limete",
    price: "450,000 $",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    beds: 0,
    baths: 0,
    size: "2,500 m²"
  },
  {
    id: 4,
    title: "Villa avec Piscine Kintambo",
    type: "Villa",
    transaction: "Vente",
    commune: "Kintambo",
    price: "850,000 $",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    beds: 4,
    baths: 3,
    size: "320 m²"
  }
];

export default function Kitoko() {
  const [filterType, setFilterType] = useState('Tous');
  const [filterCommune, setFilterCommune] = useState('Toutes');

  const filteredProperties = PROPERTIES.filter(p => 
    (filterType === 'Tous' || p.type === filterType) &&
    (filterCommune === 'Toutes' || p.commune === filterCommune)
  );

  return (
    <main className="bg-white pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Immobilier"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">LEX KITOKO AGENCY</h1>
            <p className="text-xl text-white/80 font-light tracking-widest uppercase">Immobilier d'Exception à Kinshasa</p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white shadow-2xl p-8 md:p-12 border border-black/5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Type de Bien</label>
              <select 
                className="w-full border-b border-black/10 py-2 focus:border-orange-500 outline-none transition-colors"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option>Tous</option>
                <option>Villa</option>
                <option>Appartement</option>
                <option>Terrain</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Commune</label>
              <select 
                className="w-full border-b border-black/10 py-2 focus:border-orange-500 outline-none transition-colors"
                value={filterCommune}
                onChange={(e) => setFilterCommune(e.target.value)}
              >
                <option>Toutes</option>
                <option>Gombe</option>
                <option>Ngaliema</option>
                <option>Limete</option>
                <option>Kintambo</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Recherche</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Mots clés..." 
                  className="w-full border-b border-black/10 py-2 focus:border-orange-500 outline-none transition-colors"
                />
                <Search className="absolute right-0 top-2 w-4 h-4 text-black/20" />
              </div>
            </div>
            <button className="bg-[#F27D26] text-white uppercase tracking-widest text-xs font-bold py-4 px-8 hover:bg-orange-600 transition-colors flex items-center justify-center">
              Rechercher <Filter className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black/40">Notre Catalogue</h2>
            <h3 className="text-4xl font-bold tracking-tighter">Biens Disponibles</h3>
          </div>
          <p className="text-black/40 text-sm">{filteredProperties.length} biens trouvés</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProperties.map((prop) => (
            <motion.div
              layout
              key={prop.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
                  {prop.transaction}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-full py-3 bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-orange-500 hover:text-white transition-colors">
                    Voir les détails
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-orange-500 font-bold">{prop.type} • {prop.commune}</p>
                  <h4 className="text-2xl font-bold tracking-tight">{prop.title}</h4>
                  <div className="flex items-center space-x-6 text-xs text-black/40 uppercase tracking-widest">
                    <span className="flex items-center"><HomeIcon size={14} className="mr-2" /> {prop.size}</span>
                    {prop.beds > 0 && <span>{prop.beds} Ch.</span>}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold tracking-tight">{prop.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Conseil */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Accompagnement</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Conseil & Investissement.</h3>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Nous accompagnons les expatriés et les investisseurs locaux dans toutes les étapes de leur projet immobilier à Kinshasa. De la recherche de terrain à la gestion locative, Lex Kitoko Agency est votre partenaire de confiance.
            </p>
            <button className="inline-flex items-center px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-orange-500 hover:text-white transition-all">
              Prendre rendez-vous <ArrowRight className="ml-4" size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" className="w-full aspect-square object-cover grayscale" alt="Bureau" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" className="w-full aspect-square object-cover grayscale mt-12" alt="Luxe" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </main>
  );
}
