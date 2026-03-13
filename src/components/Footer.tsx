import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <img 
              src="https://efzybrnlapxwxkorddtv.supabase.co/storage/v1/object/sign/LEX%20holding/02.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTdmZmQ5ZS1jYWE3LTRmY2MtYTgzNS1mYzgwZGE1YWY0ZjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMRVggaG9sZGluZy8wMi5wbmciLCJpYXQiOjE3NzMzOTcyMTQsImV4cCI6MjA4ODc1NzIxNH0.5f9RIwOZ22MPwG94Xm5KoMEZcoVwUYqzuy1d33odSLk" 
              alt="LEX HOLDING" 
              className="h-36 w-auto object-contain brightness-0 invert" 
              referrerPolicy="no-referrer" 
            />
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            L'Excellence au Service du Développement. Un groupe multisectoriel engagé pour l'avenir de la RDC.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white/40">Nos Pôles</h4>
          <ul className="space-y-4">
            <li><Link to="/pole/kitoko" className="text-sm text-white/60 hover:text-white transition-colors">Immobilier</Link></li>
            <li><Link to="/pole/educatio" className="text-sm text-white/60 hover:text-white transition-colors">Éducation</Link></li>
            <li><Link to="/pole/agricultura" className="text-sm text-white/60 hover:text-white transition-colors">Agriculture</Link></li>
            <li><Link to="/pole/musicae" className="text-sm text-white/60 hover:text-white transition-colors">Musique</Link></li>
            <li><Link to="/pole/transportatio" className="text-sm text-white/60 hover:text-white transition-colors">Logistique</Link></li>
            <li><Link to="/pole/salus" className="text-sm text-white/60 hover:text-white transition-colors">Santé & Vétérinaire</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white/40">Groupe</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">À Propos</Link></li>
            <li><Link to="/investisseurs" className="text-sm text-white/60 hover:text-white transition-colors">Investisseurs</Link></li>
            <li><Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Carrières</Link></li>
            <li><Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Presse</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white/40">Contact</h4>
          <ul className="space-y-6">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-white/40 mt-1" />
              <span className="text-sm text-white/60">Siège Social, Kinshasa, RDC</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-white/40" />
              <span className="text-sm text-white/60">+243 980 631 745</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-white/40" />
              <span className="text-sm text-white/60">contact@lexholding.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-white/20">
        <p>© 2026 LEX HOLDING. TOUS DROITS RÉSERVÉS.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
