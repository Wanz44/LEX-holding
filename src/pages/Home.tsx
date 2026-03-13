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
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black/40">À Propos de Lex Holding</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Un acteur majeur de la <br /> transformation économique.
            </h3>
            <p className="text-lg text-black/60 leading-relaxed font-light">
              Lex Holding est un groupe diversifié opérant dans les secteurs clés de l'économie congolaise. De l'immobilier de luxe à l'agro-industrie, nous appliquons les plus hauts standards de rigueur et d'innovation pour créer de la valeur durable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4">
                <Shield className="w-8 h-8 text-black" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Discrétion</h4>
                <p className="text-xs text-black/40">La confidentialité au cœur de nos relations d'affaires.</p>
              </div>
              <div className="space-y-4">
                <Target className="w-8 h-8 text-black" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Sérieux</h4>
                <p className="text-xs text-black/40">Un engagement total pour la réussite de chaque projet.</p>
              </div>
              <div className="space-y-4">
                <Zap className="w-8 h-8 text-black" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Efficacité</h4>
                <p className="text-xs text-black/40">Des résultats concrets pour un impact réel.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              alt="Architecture moderne"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black p-10 hidden md:flex flex-col justify-end">
              <span className="text-6xl font-bold text-white">10+</span>
              <span className="text-xs text-white/40 uppercase tracking-widest mt-2">Années d'Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mosaic Section */}
      <section id="poles" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Nos Filiales</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Un Écosystème de Solutions.</h3>
            </div>
            <p className="text-white/40 max-w-md text-sm leading-relaxed">
              Chaque branche de Lex Holding est un leader dans son domaine, portée par une vision commune d'excellence et de développement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {BRANCHES.map((branch, index) => (
              <Link
                key={branch.id}
                to={`/pole/${branch.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-black"
              >
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">0{index + 1}</span>
                    <div
                      className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all"
                      style={{ borderColor: branch.color }}
                    >
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white tracking-tight">{branch.name}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{branch.domain}</p>
                    <div
                      className="h-1 w-0 group-hover:w-full transition-all duration-500"
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
