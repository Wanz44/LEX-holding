import { useParams, Link } from 'react-router-dom';
import { BRANCHES } from '../types';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Music, Truck, Sprout, GraduationCap, HeartPulse } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  GraduationCap,
  Sprout,
  Music,
  Truck,
  HeartPulse,
};

export default function BranchDetail() {
  const { id } = useParams();
  const branch = BRANCHES.find(b => b.id === id);

  if (!branch) return <div className="h-screen flex items-center justify-center text-white">Pôle non trouvé</div>;

  const Icon = ICON_MAP[branch.icon];

  return (
    <main className="bg-black min-h-screen pt-24">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={branch.image}
            alt={branch.name}
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl space-y-8"
          >
            <Link to="/" className="inline-flex items-center text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Retour à l'accueil
            </Link>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px" style={{ backgroundColor: branch.color }} />
                <span className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: branch.color }}>{branch.domain}</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">{branch.name}</h1>
            </div>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              {branch.description}
            </p>
            <div className="flex space-x-6">
              <button className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-opacity-90 transition-all">
                Nos Services
              </button>
              <button className="px-10 py-4 border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-all">
                Contact Direct
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black/40">Expertise & Vision</h2>
                <h3 className="text-4xl font-bold tracking-tighter leading-tight">
                  Une approche sur mesure pour des résultats d'exception.
                </h3>
                <p className="text-lg text-black/60 leading-relaxed font-light">
                  {branch.fullName} s'engage à fournir des solutions innovantes et adaptées aux réalités du marché congolais. Notre expertise multisectorielle nous permet d'anticiper les besoins et de surpasser les attentes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: branch.color }} />
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Service Excellence 0{i}</h4>
                      <p className="text-xs text-black/40 leading-relaxed">Description détaillée du service spécifique proposé par cette branche du groupe.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-black overflow-hidden">
                <img
                  src={branch.image}
                  alt="Feature"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-black p-8 flex flex-col justify-center items-center text-center">
                <Icon size={48} className="text-white mb-4" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Pôle {branch.domain}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Branch Features */}
      {branch.id === 'musicae' && (
        <section className="py-32 px-6 bg-black text-white border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center space-y-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Studio & Productions</h2>
            <div className="bg-white/5 p-12 border border-white/10">
              <Music className="w-16 h-16 mx-auto mb-8 text-purple-500" />
              <p className="text-2xl font-light italic text-white/60 mb-8">"La musique est le reflet de l'âme d'une nation."</p>
              <button className="px-10 py-4 border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all">
                Écouter nos dernières productions
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 px-6 bg-black text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Prêt à collaborer avec {branch.name} ?</h2>
          <p className="text-lg text-white/40 font-light">
            Nos experts sont à votre disposition pour étudier vos besoins et vous proposer des solutions adaptées.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto px-12 py-5 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-opacity-90 transition-all">
              Demander un devis
            </button>
            <button className="w-full md:w-auto px-12 py-5 border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-all">
              Nous contacter <ArrowRight className="ml-4 inline" size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
