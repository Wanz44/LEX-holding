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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          LEX<span className="font-light">HOLDING</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors">Accueil</Link>
          <div className="relative group">
            <button className="flex items-center text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors">
              Nos Pôles <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {BRANCHES.map((branch) => (
                <Link
                  key={branch.id}
                  to={`/pole/${branch.id}`}
                  className="block px-6 py-3 text-xs uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {branch.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/investisseurs" className="text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors">Investisseurs</Link>
          <Link to="/contact" className="px-6 py-2 border border-white/20 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">Contact</Link>
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
