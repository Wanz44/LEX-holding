import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRANCHES } from '../types';
import { ArrowRight, Shield, Zap, Target } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-buildings-and-skyscrapers-at-night-4324-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight">
              L'EXCELLENCE AU SERVICE <br /> DU DÉVELOPPEMENT
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-light tracking-wide mb-12 max-w-2xl mx-auto">
              Discrétion, Sérieux, Efficacité. Lex Holding façonne l'avenir de la RDC à travers des investissements stratégiques et multisectoriels.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="#poles"
                className="px-10 py-4 bg-white text-black text-sm uppercase tracking-widest font-semibold hover:bg-white/90 transition-all"
              >
                Découvrir nos pôles d'expertise
              </a>
              <Link
                to="/contact"
                className="px-10 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold hover:bg-white/10 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-40 px-6 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 border border-black rounded-full" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] border border-black rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-black/40">Notre Vision</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                Bâtir l'avenir, <br /> un secteur à la fois.
              </h3>
            </div>
            <p className="text-xl text-black/60 leading-relaxed font-light max-w-xl">
              Lex Holding est un conglomérat stratégique dédié à l'émergence de la République Démocratique du Congo. Nous investissons dans l'excellence opérationnelle et l'innovation pour transformer les défis en opportunités de croissance durable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Discrétion</h4>
                <p className="text-[10px] text-black/40 leading-relaxed">Confidentialité absolue dans nos partenariats stratégiques.</p>
              </div>
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Sérieux</h4>
                <p className="text-[10px] text-black/40 leading-relaxed">Rigueur et intégrité au cœur de chaque décision.</p>
              </div>
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Efficacité</h4>
                <p className="text-[10px] text-black/40 leading-relaxed">Optimisation des ressources pour un impact maximal.</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-black/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Architecture moderne"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-black/90 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <div className="flex items-end space-x-4">
                  <span className="text-5xl font-bold text-white leading-none">10+</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Années d'Excellence <br /> en RDC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mosaic Section */}
      <section id="poles" className="py-40 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40">Notre Écosystème</h2>
              <h3 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none">Pôles d'Expertise.</h3>
            </div>
            <p className="text-white/40 max-w-md text-lg font-light leading-relaxed">
              Chaque filiale de Lex Holding incarne notre promesse d'excellence, apportant des solutions concrètes aux besoins de la nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRANCHES.map((branch, index) => (
              <Link
                key={branch.id}
                to={`/pole/${branch.id}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-black border border-white/5"
              >
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">0{index + 1}</span>
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-black/20 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500"
                    >
                      <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: branch.color }}>{branch.domain}</p>
                      <h4 className="text-3xl font-bold text-white tracking-tight leading-tight">{branch.name}</h4>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {branch.description}
                    </p>
                    <div
                      className="h-1 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                      style={{ backgroundColor: branch.color }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-white text-black text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">Prêt à investir dans l'avenir ?</h2>
          <p className="text-lg text-black/60 font-light leading-relaxed">
            Que vous soyez un investisseur, un partenaire potentiel ou un client, Lex Holding est à votre écoute pour concrétiser vos ambitions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-5 bg-black text-white text-sm uppercase tracking-widest font-semibold hover:bg-black/90 transition-all"
          >
            Démarrer une collaboration <ArrowRight className="ml-4" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
