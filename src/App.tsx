import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Kitoko from './pages/Kitoko';
import BranchDetail from './pages/BranchDetail';
import { motion, AnimatePresence } from 'motion/react';

function ScrollToTop() {
  const { pathname } = window.location;
  window.scrollTo(0, 0);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black font-sans selection:bg-white selection:text-black">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pole/kitoko" element={<Kitoko />} />
            <Route path="/pole/:id" element={<BranchDetail />} />
            {/* Placeholder for other pages */}
            <Route path="/investisseurs" element={
              <div className="h-screen flex items-center justify-center text-white text-center px-6">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter">Espace Investisseurs</h1>
                  <p className="text-white/40 uppercase tracking-widest text-xs">Section en cours de développement</p>
                </div>
              </div>
            } />
            <Route path="/contact" element={
              <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto space-y-12">
                  <div className="space-y-4">
                    <h1 className="text-5xl font-bold tracking-tighter">Contactez-nous</h1>
                    <p className="text-black/40 uppercase tracking-widest text-xs">Siège Social - Kinshasa, RDC</p>
                  </div>
                  <form 
                    className="space-y-8"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const name = formData.get('name');
                      const email = formData.get('email');
                      const subject = formData.get('subject');
                      const message = formData.get('message');
                      const text = `Nom: ${name}%0AEmail: ${email}%0ASujet: ${subject}%0AMessage: ${message}`;
                      window.open(`https://wa.me/243980631745?text=${text}`, '_blank');
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Nom Complet</label>
                        <input name="name" type="text" required className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Email</label>
                        <input name="email" type="email" required className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Sujet</label>
                      <select name="subject" className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors">
                        <option>Demande d'information générale</option>
                        <option>Investissement</option>
                        <option>Partenariat</option>
                        <option>Lex Kitoko (Immobilier)</option>
                        <option>Lex Salus (Santé & Vétérinaire)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Message</label>
                      <textarea name="message" rows={6} required className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full py-5 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-black/90 transition-all">
                      Envoyer le message via WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}
