export interface Branch {
  id: string;
  name: string;
  fullName: string;
  domain: string;
  description: string;
  color: string;
  icon: string;
  image: string;
  services: string[];
  stats?: { label: string; value: string }[];
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
    services: [
      "Vente de Villas de Luxe",
      "Location d'Appartements Haut de Gamme",
      "Gestion de Patrimoine Immobilier",
      "Conseil en Investissement Foncier"
    ],
    stats: [
      { label: "Biens Vendus", value: "150+" },
      { label: "Clients Satisfaits", value: "500+" },
      { label: "Experts", value: "12" }
    ]
  },
  {
    id: "educatio",
    name: "LEX EDUCATIO",
    fullName: "Lex Educatio",
    domain: "Éducation & Formation",
    description: "Formation professionnelle, coaching et développement des compétences pour les leaders de demain.",
    color: "#2563EB", // Blue
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    services: [
      "Coaching Exécutif",
      "Formation en Management",
      "Séminaires de Leadership",
      "Accompagnement de Carrière"
    ],
    stats: [
      { label: "Apprenants", value: "2000+" },
      { label: "Formateurs", value: "25" },
      { label: "Programmes", value: "15" }
    ]
  },
  {
    id: "agricultura",
    name: "LEX AGRICULTURA",
    fullName: "Lex Agricultura Manducare",
    domain: "Agriculture & Agro-industrie",
    description: "Exploitation agricole moderne, élevage diversifié et solutions alimentaires durables pour la souveraineté alimentaire.",
    color: "#16A34A", // Green
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    services: [
      "Production Maraîchère",
      "Élevage de Bétail",
      "Aviculture (Volaille)",
      "Pisciculture",
      "Transformation Agro-alimentaire",
      "Distribution de Produits Frais"
    ],
    stats: [
      { label: "Hectares", value: "500+" },
      { label: "Production/An", value: "1200T" },
      { label: "Partenaires", value: "40" }
    ]
  },
  {
    id: "musicae",
    name: "LEX MUSICAE",
    fullName: "Lex Productio Musicae",
    domain: "Industrie Créative",
    description: "Production musicale de classe mondiale et management d'artistes talentueux.",
    color: "#9333EA", // Purple
    icon: "Music",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    services: [
      "Enregistrement Studio",
      "Mixage & Mastering",
      "Management d'Artistes",
      "Événementiel Culturel"
    ],
    stats: [
      { label: "Albums Produits", value: "30+" },
      { label: "Artistes", value: "15" },
      { label: "Récompenses", value: "10" }
    ]
  },
  {
    id: "transportatio",
    name: "LEX TRANSPORTATIO",
    fullName: "Lex Transportatio",
    domain: "Logistique & Transport",
    description: "Solutions de transport sécurisées et logistique intégrée pour le commerce national et international.",
    color: "#DC2626", // Red
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    services: [
      "Fret Routier National",
      "Logistique de Dernier Kilomètre",
      "Entreposage Sécurisé",
      "Gestion de Flotte"
    ],
    stats: [
      { label: "Véhicules", value: "80+" },
      { label: "Destinations", value: "25" },
      { label: "Tonnage/Mois", value: "5000T" }
    ]
  },
  {
    id: "salus",
    name: "LEX SALUS",
    fullName: "Lex Salus",
    domain: "Santé & Bien-être",
    description: "Services médicaux, soins vétérinaires et solutions de bien-être innovantes pour une vie plus saine.",
    color: "#0891B2", // Cyan
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&w=800&q=80",
    services: [
      "Consultations Médicales",
      "Services Vétérinaires",
      "Soins à Domicile",
      "Programmes de Bien-être",
      "Télémédecine"
    ],
    stats: [
      { label: "Patients/An", value: "10k+" },
      { label: "Médecins", value: "20" },
      { label: "Cliniques", value: "3" }
    ]
  },
];
