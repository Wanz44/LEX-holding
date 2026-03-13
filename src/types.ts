export interface Branch {
  id: string;
  name: string;
  fullName: string;
  domain: string;
  description: string;
  color: string;
  icon: string;
  image: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "kitoko",
    name: "LEX KITOKO AGENCY",
    fullName: "Lex Kitoko Agency",
    domain: "Immobilier",
    description: "Vente et achat de biens immobiliers d'exception à Kinshasa.",
    color: "#F27D26", // Orange
    icon: "Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "educatio",
    name: "LEX EDUCATIO",
    fullName: "Lex Educatio",
    domain: "Éducation & Formation",
    description: "Formation professionnelle, coaching et développement des compétences.",
    color: "#2563EB", // Blue
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "agricultura",
    name: "LEX AGRICULTURA",
    fullName: "Lex Agricultura Manducare",
    domain: "Agriculture & Agro-industrie",
    description: "Exploitation agricole et solutions alimentaires durables.",
    color: "#16A34A", // Green
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "musicae",
    name: "LEX MUSICAE",
    fullName: "Lex Productio Musicae",
    domain: "Industrie Créative",
    description: "Production musicale et accompagnement d'artistes.",
    color: "#9333EA", // Purple
    icon: "Music",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "transportatio",
    name: "LEX TRANSPORTATIO",
    fullName: "Lex Transportatio",
    domain: "Logistique & Transport",
    description: "Transport de biens et logistique intégrée.",
    color: "#DC2626", // Red
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "salus",
    name: "LEX SALUS",
    fullName: "Lex Salus",
    domain: "Santé & Bien-être",
    description: "Services médicaux et solutions de bien-être.",
    color: "#0891B2", // Cyan
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&w=800&q=80",
  },
];
