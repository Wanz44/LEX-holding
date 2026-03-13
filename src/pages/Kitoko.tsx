import { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, ArrowRight, Filter, X, Bed, Bath, Sofa, Utensils, Car, Users, Maximize } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    salons: 2,
    diningRooms: 1,
    parking: "4 places",
    families: 1,
    landSize: "600 m²",
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
    salons: 1,
    diningRooms: 1,
    parking: "2 places",
    families: 1,
    landSize: "N/A",
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
    salons: 0,
    diningRooms: 0,
    parking: "N/A",
    families: 0,
    landSize: "2,500 m²",
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
    salons: 2,
    diningRooms: 1,
    parking: "3 places",
    families: 1,
    landSize: "500 m²",
    size: "320 m²"
  },
  {
    id: 5,
    title: "Résidence Moderne Ngaliema",
    type: "Appartement",
    transaction: "Vente",
    commune: "Ngaliema",
    price: "350,000 $",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    baths: 2,
    salons: 1,
    diningRooms: 1,
    parking: "1 place",
    families: 1,
    landSize: "N/A",
    size: "150 m²"
  },
  {
    id: 6,
    title: "Villa de Maître Mont-Ngafula",
    type: "Villa",
    transaction: "Vente",
    commune: "Mont-Ngafula",
    price: "950,000 $",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    beds: 6,
    baths: 5,
    salons: 3,
    diningRooms: 2,
    parking: "6 places",
    families: 1,
    landSize: "1,200 m²",
    size: "600 m²"
  },
  {
    id: 7,
    title: "Espace Commercial Gombe",
    type: "Terrain",
    transaction: "Location",
    commune: "Gombe",
    price: "5,000 $ / mois",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    beds: 0,
    baths: 0,
    salons: 0,
    diningRooms: 0,
    parking: "5 places",
    families: 0,
    landSize: "N/A",
    size: "200 m²"
  },
  {
    id: 8,
    title: "Maison Familiale Lemba",
    type: "Villa",
    transaction: "Vente",
    commune: "Lemba",
    price: "280,000 $",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    beds: 4,
    baths: 2,
    salons: 1,
    diningRooms: 1,
    parking: "2 places",
    families: 1,
    landSize: "400 m²",
    size: "220 m²"
  }
];

export default function Kitoko() {
  const [filterType, setFilterType] = useState('Tous');
  const [filterTransaction, setFilterTransaction] = useState('Tous');
  const [filterCommune, setFilterCommune] = useState('Toutes');
  const [selectedProperty, setSelectedProperty] = useState<typeof PROPERTIES[0] | null>(null);

  const filteredProperties = PROPERTIES.filter(p => 
    (filterType === 'Tous' || p.type === filterType) &&
    (filterTransaction === 'Tous' || p.transaction === filterTransaction) &&
    (filterCommune === 'Toutes' || p.commune === filterCommune)
  );

  return (
    <main className="bg-white pt-24">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Immobilier"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-orange-500 font-bold">L'Art de Vivre à Kinshasa</span>
            <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-none">LEX KITOKO AGENCY</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest uppercase max-w-2xl mx-auto">Immobilier d'Exception & Conseil en Investissement</p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-8 md:p-12 rounded-2xl border border-black/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Type de Bien</label>
              <select 
                className="w-full border-b-2 border-black/5 py-3 focus:border-orange-500 outline-none transition-colors bg-transparent font-medium"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option>Tous</option>
                <option>Villa</option>
                <option>Appartement</option>
                <option>Terrain</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Transaction</label>
              <select 
                className="w-full border-b-2 border-black/5 py-3 focus:border-orange-500 outline-none transition-colors bg-transparent font-medium"
                value={filterTransaction}
                onChange={(e) => setFilterTransaction(e.target.value)}
              >
                <option>Tous</option>
                <option>Vente</option>
                <option>Location</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Commune</label>
              <select 
                className="w-full border-b-2 border-black/5 py-3 focus:border-orange-500 outline-none transition-colors bg-transparent font-medium"
                value={filterCommune}
                onChange={(e) => setFilterCommune(e.target.value)}
              >
                <option>Toutes</option>
                <optgroup label="Zone de la Gombe">
                  <option>Gombe</option>
                </optgroup>
                <optgroup label="Zone de la Funa">
                  <option>Bandalungwa</option>
                  <option>Bumbu</option>
                  <option>Kalamu</option>
                  <option>Kasa-Vubu</option>
                  <option>Makala</option>
                  <option>Ngiri-Ngiri</option>
                  <option>Selembao</option>
                </optgroup>
                <optgroup label="Zone de la Lukunga">
                  <option>Barumbu</option>
                  <option>Kintambo</option>
                  <option>Lingwala</option>
                  <option>Mont-Ngafula</option>
                  <option>Ngaliema</option>
                </optgroup>
                <optgroup label="Zone du Mont-Amba">
                  <option>Kisenso</option>
                  <option>Lemba</option>
                  <option>Limete</option>
                  <option>Matete</option>
                  <option>Ngaba</option>
                </optgroup>
                <optgroup label="Zone de la Tshangu">
                  <option>Kimbanseke</option>
                  <option>Kinsuka (Maluku)</option>
                  <option>Maluku</option>
                  <option>Masina</option>
                  <option>Ndjili</option>
                  <option>Nsele</option>
                </optgroup>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Recherche</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Mots clés..." 
                  className="w-full border-b-2 border-black/5 py-3 focus:border-orange-500 outline-none transition-colors bg-transparent font-medium"
                />
                <Search className="absolute right-0 top-3 w-4 h-4 text-black/20" />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-[#F27D26] text-white uppercase tracking-widest text-xs font-bold py-5 px-8 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center group">
                Rechercher <Filter className="ml-2 w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Sélection Exclusive</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Biens de Prestige</h3>
          </div>
          <p className="text-black/40 text-sm max-w-sm leading-relaxed">
            Découvrez notre sélection rigoureuse des plus belles propriétés actuellement disponibles sur le marché kinois.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filteredProperties.map((prop) => (
            <motion.div
              layout
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProperty(prop)}
            >
              <div className="relative aspect-[16/11] overflow-hidden mb-8 rounded-3xl shadow-xl">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex space-x-2">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-black shadow-sm">
                    {prop.transaction}
                  </span>
                  <span className="bg-orange-500 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-white shadow-sm">
                    Premium
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="px-10 py-4 bg-white text-black text-[10px] uppercase tracking-widest font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                    Détails du bien
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin size={12} className="text-orange-500" />
                    <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold">{prop.type} • {prop.commune}</p>
                  </div>
                  <h4 className="text-3xl font-bold tracking-tight group-hover:text-orange-500 transition-colors">{prop.title}</h4>
                  <div className="flex items-center space-x-8 text-xs text-black/40 uppercase tracking-widest font-medium">
                    <span className="flex items-center"><HomeIcon size={14} className="mr-2 text-black/20" /> {prop.size}</span>
                    {prop.beds > 0 && <span className="flex items-center"> {prop.beds} Chambres</span>}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold tracking-tight text-black">{prop.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img 
                    src={selectedProperty.image} 
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-orange-500 text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
                        {selectedProperty.transaction}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">
                        {selectedProperty.type} • {selectedProperty.commune}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tighter">{selectedProperty.title}</h2>
                    <p className="text-3xl font-bold text-orange-500">{selectedProperty.price}</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <div className="flex items-center text-black/40 space-x-2">
                        <Bed size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Chambres</span>
                      </div>
                      <p className="text-xl font-bold">{selectedProperty.beds}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-black/40 space-x-2">
                        <Sofa size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Salons</span>
                      </div>
                      <p className="text-xl font-bold">{selectedProperty.salons}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-black/40 space-x-2">
                        <Bath size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Salles de Bain</span>
                      </div>
                      <p className="text-xl font-bold">{selectedProperty.baths}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-black/40 space-x-2">
                        <Utensils size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Salles à Manger</span>
                      </div>
                      <p className="text-xl font-bold">{selectedProperty.diningRooms}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-black/40 space-x-2">
                        <Car size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Parking</span>
                      </div>
                      <p className="text-xl font-bold">{selectedProperty.parking}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-black/40 space-x-2">
                        <Users size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Familles</span>
                      </div>
                      <p className="text-xl font-bold">{selectedProperty.families}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-black/40 space-x-2">
                        <Maximize size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Surface</span>
                      </div>
                      <p className="text-xl font-bold">{selectedProperty.size}</p>
                    </div>
                    {selectedProperty.transaction === "Vente" && (
                      <div className="space-y-2">
                        <div className="flex items-center text-black/40 space-x-2">
                          <MapPin size={16} />
                          <span className="text-[10px] uppercase tracking-widest font-bold">Taille Parcelle</span>
                        </div>
                        <p className="text-xl font-bold">{selectedProperty.landSize}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-8 border-t border-black/5">
                    <button className="w-full py-5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-zinc-800 transition-all">
                      Contacter l'agent pour ce bien
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Service Conseil - Enhanced */}
      <section className="bg-zinc-950 text-white py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 blur-[120px] rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-orange-500">Investissement</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">Conseil Stratégique & Accompagnement.</h3>
            </div>
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-xl">
              Nous redéfinissons les standards de l'immobilier en RDC. Notre équipe d'experts offre un accompagnement 360° pour les investisseurs exigeants, garantissant sécurité juridique et rentabilité optimale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Expatriés</h4>
                <p className="text-xs text-white/40 leading-relaxed">Solutions de relocalisation et recherche de résidences sécurisées.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Investisseurs</h4>
                <p className="text-xs text-white/40 leading-relaxed">Analyse de marché, acquisition de terrains et gestion de projets.</p>
              </div>
            </div>
            <button className="inline-flex items-center px-12 py-5 bg-orange-500 text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
              Prendre rendez-vous <ArrowRight className="ml-4" size={18} />
            </button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" className="w-full aspect-[3/4] object-cover grayscale rounded-3xl shadow-2xl" alt="Bureau" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" className="w-full aspect-[3/4] object-cover grayscale rounded-3xl shadow-2xl mt-20" alt="Luxe" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
