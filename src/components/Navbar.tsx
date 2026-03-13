import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BRANCHES } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="https://efzybrnlapxwxkorddtv.supabase.co/storage/v1/object/sign/LEX%20holding/02.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTdmZmQ5ZS1jYWE3LTRmY2MtYTgzNS1mYzgwZGE1YWY0ZjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMRVggaG9sZGluZy8wMi5wbmciLCJpYXQiOjE3NzMzOTcyMTQsImV4cCI6MjA4ODc1NzIxNH0.5f9RIwOZ22MPwG94Xm5KoMEZcoVwUYqzuy1d33odSLk" 
            alt="LEX HOLDING" 
            className="h-32 md:h-36 w-auto object-contain brightness-0 invert" 
            referrerPolicy="no-referrer" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all hover:tracking-[0.4em]">Accueil</Link>
          <div className="relative group">
            <button className="flex items-center text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all hover:tracking-[0.4em]">
              Nos Pôles <ChevronDown className="ml-2 w-3 h-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-zinc-950 border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-2">
                {BRANCHES.map((branch) => (
                  <Link
                    key={branch.id}
                    to={`/pole/${branch.id}`}
                    className="flex items-center justify-between px-6 py-4 text-[10px] uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 transition-all rounded-xl group/item"
                  >
                    <span>{branch.name}</span>
                    <div className="w-1 h-1 rounded-full bg-white opacity-0 group-hover/item:opacity-100 transition-opacity" style={{ backgroundColor: branch.color }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/investisseurs" className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all hover:tracking-[0.4em]">Investisseurs</Link>
          <Link to="/contact" className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white/90 transition-all rounded-full shadow-xl shadow-white/5">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 md:hidden"
          >
            <div className="p-6 flex flex-col space-y-4">
              <Link to="/" className="text-lg uppercase tracking-widest text-white">Accueil</Link>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-white/40">Nos Pôles</p>
                {BRANCHES.map((branch) => (
                  <Link
                    key={branch.id}
                    to={`/pole/${branch.id}`}
                    className="block text-sm uppercase tracking-widest text-white/80 pl-4"
                  >
                    {branch.name}
                  </Link>
                ))}
              </div>
              <Link to="/investisseurs" className="text-lg uppercase tracking-widest text-white">Investisseurs</Link>
              <Link to="/contact" className="text-lg uppercase tracking-widest text-white">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
