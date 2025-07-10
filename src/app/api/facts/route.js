// src/app/api/facts/route.js
import { NextResponse } from 'next/server';

// Données complètes des 70 faits sur Lyon avec URLs WebP pré-construites
const getFacts = (baseUrl) => [
  {
    id: 1,
    category: "Architecture",
    title: "La Basilique Notre-Dame de Fourvière",
    description: "Construite entre 1872 et 1896, cette basilique domine Lyon depuis la colline de Fourvière. Elle mélange les styles byzantin et roman, et offre une vue panoramique exceptionnelle sur la ville.",
    imageUrl: `${baseUrl}/images/1.webp`
  },
  {
    id: 2,
    category: "Gastronomie", 
    title: "Les Bouchons Lyonnais",
    description: "Lyon est la capitale mondiale de la gastronomie grâce à ses bouchons, ces restaurants traditionnels qui servent la cuisine lyonnaise authentique dans une ambiance conviviale.",
    imageUrl: `${baseUrl}/images/2.webp`
  },
  {
    id: 3,
    category: "Histoire",
    title: "Le Vieux Lyon",
    description: "Classé au patrimoine mondial de l'UNESCO, le Vieux Lyon est l'un des plus vastes ensembles Renaissance d'Europe, avec ses traboules mystérieuses et ses cours cachées.",
    imageUrl: `${baseUrl}/images/3.webp`
  },
  {
    id: 4,
    category: "Culture",
    title: "La Fête des Lumières",
    description: "Chaque année en décembre, Lyon s'illumine pendant 4 jours pour honorer la Vierge Marie. Cet événement attire plus de 4 millions de visiteurs du monde entier.",
    imageUrl: `${baseUrl}/images/4.webp`
  },
  {
    id: 5,
    category: "Architecture",
    title: "Les Traboules",
    description: "Lyon compte plus de 500 traboules, ces passages secrets qui permettaient aux canuts (ouvriers de la soie) de transporter leurs marchandises à l'abri des intempéries.",
    imageUrl: `${baseUrl}/images/5.webp`
  },
  {
    id: 6,
    category: "Transport",
    title: "Le Métro de Lyon",
    description: "Inauguré en 1978, le métro lyonnais est l'un des plus modernes d'Europe. Il dessert efficacement la ville avec ses 4 lignes et ses stations aux architectures variées.",
    imageUrl: `${baseUrl}/images/6.webp`
  },
  {
    id: 7,
    category: "Nature",
    title: "Le Parc de la Tête d'Or",
    description: "Plus grand parc urbain de France avec ses 117 hectares, il abrite un lac, un zoo gratuit, et de magnifiques jardins botaniques en plein cœur de Lyon.",
    imageUrl: `${baseUrl}/images/7.webp`
  },
  {
    id: 8,
    category: "Architecture",
    title: "L'Opéra de Lyon",
    description: "Rénové par Jean Nouvel en 1993, l'Opéra de Lyon allie architecture classique et moderne avec sa verrière semi-cylindrique caractéristique.",
    imageUrl: `${baseUrl}/images/8.webp`
  },
  {
    id: 9,
    category: "Histoire",
    title: "La Croix-Rousse",
    description: "Ancien quartier des canuts, la Croix-Rousse est surnommée 'la colline qui travaille'. Ses pentes abritent de nombreuses traboules et fresques murales.",
    imageUrl: `${baseUrl}/images/9.webp`
  },
  {
    id: 10,
    category: "Gastronomie",
    title: "Les Spécialités Lyonnaises",
    description: "Quenelles, saucisson pistaché, tablier de sapeur... Lyon regorge de spécialités culinaires uniques qui font sa renommée gastronomique mondiale.",
    imageUrl: `${baseUrl}/images/10.webp`
  },
  {
    id: 11,
    category: "Architecture",
    title: "La Place Bellecour",
    description: "L'une des plus grandes places piétonnes d'Europe avec ses 62 000 m². Elle accueille la statue équestre de Louis XIV et de nombreux événements.",
    imageUrl: `${baseUrl}/images/11.webp`
  },
  {
    id: 12,
    category: "Culture",
    title: "Les Musées de Lyon",
    description: "Lyon compte plus de 20 musées, dont le célèbre Musée des Beaux-Arts, surnommé le 'petit Louvre', et le Musée des Confluences à l'architecture futuriste.",
    imageUrl: `${baseUrl}/images/12.webp`
  },
  {
    id: 13,
    category: "Histoire",
    title: "Lyon, Capitale des Gaules",
    description: "Fondée en 43 av. J.-C. sous le nom de Lugdunum, Lyon était la capitale de la Gaule romaine et conserve de nombreux vestiges de cette époque.",
    imageUrl: `${baseUrl}/images/13.webp`
  },
  {
    id: 14,
    category: "Modern",
    title: "Le Quartier de la Part-Dieu",
    description: "Surnommé le 'Manhattan lyonnais', ce quartier d'affaires abrite la Tour Part-Dieu, la plus haute tour de Lyon, et un centre commercial majeur.",
    imageUrl: `${baseUrl}/images/14.webp`
  },
  {
    id: 15,
    category: "Transport",
    title: "Les Vélo'v",
    description: "Premier système de vélos en libre-service de France (2005), les Vélo'v ont révolutionné la mobilité urbaine lyonnaise avec plus de 5000 vélos.",
    imageUrl: `${baseUrl}/images/15.webp`
  },
  {
    id: 16,
    category: "Architecture",
    title: "La Cathédrale Saint-Jean",
    description: "Primatiale des Gaules, cette cathédrale gothique abrite une horloge astronomique du XIVe siècle et marque l'entrée du Vieux Lyon.",
    imageUrl: `${baseUrl}/images/16.webp`
  },
  {
    id: 17,
    category: "Culture",
    title: "Les Nuits de Fourvière",
    description: "Festival d'été emblématique de Lyon, les Nuits de Fourvière proposent théâtre, musique et danse dans le cadre exceptionnel du théâtre gallo-romain.",
    imageUrl: `${baseUrl}/images/17.webp`
  },
  {
    id: 18,
    category: "Gastronomie",
    title: "Paul Bocuse",
    description: "Le chef le plus célèbre de Lyon, Paul Bocuse a révolutionné la cuisine française. Son restaurant à Collonges-au-Mont-d'Or garde ses 3 étoiles Michelin.",
    imageUrl: `${baseUrl}/images/18.webp`
  },
  {
    id: 19,
    category: "Nature",
    title: "Les Berges du Rhône",
    description: "Aménagées pour les piétons et cyclistes, les berges du Rhône offrent un espace de détente unique en centre-ville avec vue sur la Presqu'île.",
    imageUrl: `${baseUrl}/images/19.webp`
  },
  {
    id: 20,
    category: "Histoire",
    title: "La Résistance à Lyon",
    description: "Jean Moulin a unifié la Résistance française depuis Lyon. La ville conserve de nombreux lieux de mémoire de cette période historique.",
    imageUrl: `${baseUrl}/images/20.webp`
  },
  {
    id: 21,
    category: "Architecture",
    title: "Les Halles de Lyon Paul Bocuse",
    description: "Temple de la gastronomie lyonnaise, ces halles abritent les meilleurs artisans et producteurs régionaux dans un cadre architectural remarquable.",
    imageUrl: `${baseUrl}/images/21.webp`
  },
  {
    id: 22,
    category: "Transport",
    title: "Le Funiculaire de Fourvière",
    description: "Mis en service en 1900, ce funiculaire relie la Presqu'île à la basilique de Fourvière, offrant une montée spectaculaire au-dessus de la ville.",
    imageUrl: `${baseUrl}/images/22.webp`
  },
  {
    id: 23,
    category: "Culture",
    title: "La Biennale de Lyon",
    description: "Événement d'art contemporain de renommée internationale, la Biennale transforme Lyon en capitale artistique mondiale tous les deux ans.",
    imageUrl: `${baseUrl}/images/23.webp`
  },
  {
    id: 24,
    category: "Architecture",
    title: "Le Musée des Confluences",
    description: "Inauguré en 2014, ce musée à l'architecture déconstructiviste marque la confluence du Rhône et de la Saône par sa silhouette futuriste.",
    imageUrl: `${baseUrl}/images/24.webp`
  },
  {
    id: 25,
    category: "Histoire",
    title: "La Soierie Lyonnaise",
    description: "Capital mondial de la soie aux XVIIe et XVIIIe siècles, Lyon conserve son savoir-faire avec la Maison des Canuts et de nombreux ateliers traditionnels.",
    imageUrl: `${baseUrl}/images/25.webp`
  },
  {
    id: 26,
    category: "Gastronomie",
    title: "Les Marchés de Lyon",
    description: "Le marché de la Croix-Rousse et celui de Saint-Antoine offrent le meilleur des produits régionaux dans une ambiance authentiquement lyonnaise.",
    imageUrl: `${baseUrl}/images/26.webp`
  },
  {
    id: 27,
    category: "Nature",
    title: "Le Jardin Botanique",
    description: "Situé dans le Parc de la Tête d'Or, ce jardin botanique abrite plus de 15 000 espèces végétales et des serres tropicales remarquables.",
    imageUrl: `${baseUrl}/images/27.webp`
  },
  {
    id: 28,
    category: "Modern",
    title: "Lyon, Ville Numérique",
    description: "Labellisée French Tech, Lyon est un hub technologique majeur avec de nombreuses startups et le siège d'entreprises innovantes.",
    imageUrl: `${baseUrl}/images/28.webp`
  },
  {
    id: 29,
    category: "Culture",
    title: "Les Fresques Murales",
    description: "Lyon compte plus de 150 murs peints, dont la célèbre Fresque des Lyonnais qui met en scène les personnalités marquantes de la ville.",
    imageUrl: `${baseUrl}/images/29.webp`
  },
  {
    id: 30,
    category: "Architecture",
    title: "La Tour de la Part-Dieu",
    description: "Haute de 165 mètres, cette tour emblématique du skyline lyonnais est surnommée 'le Crayon' par les habitants de la ville.",
    imageUrl: `${baseUrl}/images/30.webp`
  },
  {
    id: 31,
    category: "Histoire",
    title: "Les Amphithéâtres Romains",
    description: "Les théâtres gallo-romains de Fourvière, classés UNESCO, témoignent de la grandeur de Lugdunum et accueillent encore des spectacles.",
    imageUrl: `${baseUrl}/images/31.webp`
  },
  {
    id: 32,
    category: "Transport",
    title: "La Gare de Lyon Part-Dieu",
    description: "Troisième gare de France, elle relie Lyon à l'Europe entière grâce au TGV et aux liaisons internationales, véritable hub ferroviaire.",
    imageUrl: `${baseUrl}/images/32.webp`
  },
  {
    id: 33,
    category: "Gastronomie",
    title: "Les Mères Lyonnaises",
    description: "Tradition culinaire unique, les Mères étaient des cuisinières bourgeoises qui ont créé les fondements de la gastronomie lyonnaise au XIXe siècle.",
    imageUrl: `${baseUrl}/images/33.webp`
  },
  {
    id: 34,
    category: "Culture",
    title: "L'Institut Lumière",
    description: "Dédié à l'invention du cinéma par les frères Lumière, ce musée retrace l'histoire du 7e art dans la ville où tout a commencé.",
    imageUrl: `${baseUrl}/images/34.webp`
  },
  {
    id: 35,
    category: "Architecture",
    title: "Le Quartier Saint-Paul",
    description: "Cœur du Vieux Lyon Renaissance, ce quartier abrite palais, cours d'honneur et escaliers à vis dans un ensemble architectural exceptionnel.",
    imageUrl: `${baseUrl}/images/35.webp`
  },
  {
    id: 36,
    category: "Nature",
    title: "Le Parc de Miribel-Jonage",
    description: "Plus grand parc périurbain d'Europe, cette réserve naturelle offre lac, plages et activités nautiques à quelques kilomètres de Lyon.",
    imageUrl: `${baseUrl}/images/36.webp`
  },
  {
    id: 37,
    category: "Modern",
    title: "EuroNews",
    description: "Chaîne d'information européenne basée à Lyon depuis 1993, EuroNews diffuse dans le monde entier depuis les studios lyonnais.",
    imageUrl: `${baseUrl}/images/37.webp`
  },
  {
    id: 38,
    category: "Histoire",
    title: "La Place des Terreaux",
    description: "Rénovée par Daniel Buren, cette place historique accueille l'Hôtel de Ville et le Musée des Beaux-Arts avec la fontaine Bartholdi.",
    imageUrl: `${baseUrl}/images/38.webp`
  },
  {
    id: 39,
    category: "Culture",
    title: "Le Festival Lumière",
    description: "Rendez-vous annuel des cinéphiles du monde entier, ce festival célèbre le patrimoine cinématographique dans la ville des frères Lumière.",
    imageUrl: `${baseUrl}/images/39.webp`
  },
  {
    id: 40,
    category: "Gastronomie",
    title: "Les Vins du Beaujolais",
    description: "Proche de Lyon, le vignoble du Beaujolais produit des vins réputés. Le Beaujolais Nouveau est célébré chaque troisième jeudi de novembre.",
    imageUrl: `${baseUrl}/images/40.webp`
  },
  {
    id: 41,
    category: "Architecture",
    title: "La Cité Internationale",
    description: "Conçue par Renzo Piano, cette cité moderne abrite le Centre de Congrès, des hôtels et le siège d'Interpol dans un écrin de verdure.",
    imageUrl: `${baseUrl}/images/41.webp`
  },
  {
    id: 42,
    category: "Transport",
    title: "Le Tramway Lyonnais",
    description: "Remis en service en 2001, le tramway complète efficacement le réseau de transport en commun avec ses lignes modernes et écologiques.",
    imageUrl: `${baseUrl}/images/42.webp`
  },
  {
    id: 43,
    category: "Histoire",
    title: "Les Imprimeurs de Lyon",
    description: "Dès le XVe siècle, Lyon devient un centre majeur de l'imprimerie européenne, contribuant à la diffusion des idées humanistes et de la Renaissance.",
    imageUrl: `${baseUrl}/images/43.webp`
  },
  {
    id: 44,
    category: "Culture",
    title: "La Maison de la Danse",
    description: "Scène nationale dédiée à la danse contemporaine, elle rayonne internationalement et forme les danseurs de demain dans ses studios.",
    imageUrl: `${baseUrl}/images/44.webp`
  },
  {
    id: 45,
    category: "Modern",
    title: "BioMérieux",
    description: "Leader mondial du diagnostic in vitro, cette entreprise lyonnaise fondée en 1963 contribue au rayonnement scientifique de la région.",
    imageUrl: `${baseUrl}/images/45.webp`
  },
  {
    id: 46,
    category: "Architecture",
    title: "Le Palais de Justice",
    description: "Édifice néoclassique du XIXe siècle, ce palais impressionnant domine la Saône avec ses 24 colonnes corinthiennes majestueuses.",
    imageUrl: `${baseUrl}/images/46.webp`
  },
  {
    id: 47,
    category: "Nature",
    title: "Les Monts d'Or",
    description: "Collines au nord de Lyon offrant randonnées et panoramas exceptionnels sur la ville et les Alpes par temps clair.",
    imageUrl: `${baseUrl}/images/47.webp`
  },
  {
    id: 48,
    category: "Gastronomie",
    title: "La Cervelle de Canut",
    description: "Spécialité lyonnaise à base de fromage blanc battu avec des herbes, cette préparation accompagne parfaitement les repas traditionnels.",
    imageUrl: `${baseUrl}/images/48.webp`
  },
  {
    id: 49,
    category: "Culture",
    title: "L'Auditorium de Lyon",
    description: "Salle de concert de renommée internationale, l'Auditorium accueille l'Orchestre National de Lyon et les plus grands artistes classiques.",
    imageUrl: `${baseUrl}/images/49.webp`
  },
  {
    id: 50,
    category: "Modern",
    title: "OnlyLyon",
    description: "Marque territoriale innovante, OnlyLyon promeut l'attractivité de Lyon dans le monde entier avec sa stratégie marketing unique.",
    imageUrl: `${baseUrl}/images/50.webp`
  },
  {
    id: 51,
    category: "Histoire",
    title: "Les Canuts",
    description: "Ouvriers de la soie du XIXe siècle, les canuts ont marqué l'histoire sociale de Lyon avec leurs révoltes et leur savoir-faire artisanal.",
    imageUrl: `${baseUrl}/images/51.webp`
  },
  {
    id: 52,
    category: "Architecture",
    title: "L'École Normale Supérieure",
    description: "Prestigieuse institution d'enseignement supérieur installée dans un campus moderne à Gerland, formant l'élite intellectuelle française.",
    imageUrl: `${baseUrl}/images/52.webp`
  },
  {
    id: 53,
    category: "Transport",
    title: "L'Aéroport Lyon-Saint-Exupéry",
    description: "Quatrième aéroport français, il connecte Lyon au monde entier et porte le nom de l'écrivain-aviateur né dans la région lyonnaise.",
    imageUrl: `${baseUrl}/images/53.webp`
  },
  {
    id: 54,
    category: "Culture",
    title: "Les Subsistances",
    description: "Friche culturelle alternative installée dans d'anciens bâtiments militaires, les Subsistances soutiennent la création artistique contemporaine.",
    imageUrl: `${baseUrl}/images/54.webp`
  },
  {
    id: 55,
    category: "Gastronomie",
    title: "Le Saucisson de Lyon",
    description: "Charcuterie emblématique de la région, le saucisson lyonnais se décline en nombreuses variétés, notamment le fameux saucisson aux pistaches.",
    imageUrl: `${baseUrl}/images/55.webp`
  },
  {
    id: 56,
    category: "Modern",
    title: "Gerland, Technopole",
    description: "Ancien quartier industriel transformé en pôle technologique et universitaire, Gerland symbolise la reconversion réussie de Lyon.",
    imageUrl: `${baseUrl}/images/56.webp`
  },
  {
    id: 57,
    category: "Nature",
    title: "La Confluence",
    description: "Quartier écologique à la pointe du Rhône et de la Saône, la Confluence mélange architecture durable et espaces verts innovants.",
    imageUrl: `${baseUrl}/images/57.webp`
  },
  {
    id: 58,
    category: "Histoire",
    title: "Le Mur des Fédérés",
    description: "Lieu de mémoire de la Commune de Lyon, ce mur rappelle les événements tragiques de 1871 et l'engagement populaire lyonnais.",
    imageUrl: `${baseUrl}/images/58.webp`
  },
  {
    id: 59,
    category: "Culture",
    title: "La Bibliothèque Part-Dieu",
    description: "Plus grande bibliothèque municipale de France, elle offre un million de documents et des espaces de travail ultramodernes.",
    imageUrl: `${baseUrl}/images/59.webp`
  },
  {
    id: 60,
    category: "Architecture",
    title: "Les Immeubles Art Déco",
    description: "Lyon conserve de remarquables exemples d'architecture Art Déco des années 1920-1930, particulièrement dans le 6e arrondissement.",
    imageUrl: `${baseUrl}/images/60.webp`
  },
  {
    id: 61,
    category: "Modern",
    title: "Le Groupama Stadium",
    description: "Stade ultramoderne de l'Olympique Lyonnais inauguré en 2016, il accueille matches de football et grands événements sportifs internationaux.",
    imageUrl: `${baseUrl}/images/61.webp`
  },
  {
    id: 62,
    category: "Gastronomie",
    title: "Les Pralines Roses",
    description: "Confiserie emblématique de Lyon, les pralines roses colorent brioches et tartes, créant des saveurs uniques à la ville.",
    imageUrl: `${baseUrl}/images/62.webp`
  },
  {
    id: 63,
    category: "Culture",
    title: "Le Théâtre des Célestins",
    description: "Théâtre à l'italienne du XIXe siècle, joyau architectural et scène prestigieuse proposant une programmation éclectique de qualité.",
    imageUrl: `${baseUrl}/images/63.webp`
  },
  {
    id: 64,
    category: "Nature",
    title: "Le Grand Parc de Miribel",
    description: "Espace naturel protégé de 2200 hectares, véritable poumon vert offrant lac, forêts et activités de plein air aux Lyonnais.",
    imageUrl: `${baseUrl}/images/64.webp`
  },
  {
    id: 65,
    category: "Histoire",
    title: "La Guillotière",
    description: "Ancien faubourg devenu quartier cosmopolite, la Guillotière illustre la diversité culturelle et l'évolution urbaine de Lyon.",
    imageUrl: `${baseUrl}/images/65.webp`
  },
  {
    id: 66,
    category: "Modern",
    title: "Campus LyonTech",
    description: "Pôle d'excellence technologique regroupant grandes écoles et entreprises innovantes, symbole de l'attractivité étudiante lyonnaise.",
    imageUrl: `${baseUrl}/images/66.webp`
  },
  {
    id: 67,
    category: "Architecture",
    title: "Les Quais de Saône",
    description: "Aménagement urbain remarquable longeant la Saône, les quais offrent promenades, restaurants et vues imprenables sur le Vieux Lyon.",
    imageUrl: `${baseUrl}/images/67.webp`
  },
  {
    id: 68,
    category: "Culture",
    title: "Le Musée Gadagne",
    description: "Musée d'histoire de Lyon et musée des marionnettes, Gadagne occupe un magnifique hôtel Renaissance au cœur du Vieux Lyon.",
    imageUrl: `${baseUrl}/images/68.webp`
  },
  {
    id: 69,
    category: "Gastronomie",
    title: "Le Coq au Vin du Beaujolais",
    description: "Plat traditionnel lyonnais mijotant le coq dans le vin rouge du Beaujolais, accompagné de légumes et servi dans les bouchons authentiques.",
    imageUrl: `${baseUrl}/images/69.webp`
  },
  {
    id: 70,
    category: "Modern",
    title: "Lyon Smart Community",
    description: "Projet urbain intelligent développant solutions connectées pour l'énergie, la mobilité et l'habitat, positionnant Lyon comme ville du futur.",
    imageUrl: `${baseUrl}/images/70.webp`
  }
];

// API ultra-simple et optimisée
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const shuffle = searchParams.get('shuffle') === 'true';
    
    // Construction de l'URL de base pour les images WebP
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const host = request.headers.get('host');
    const baseUrl = `${protocol}://${host}`;
    
    console.log(`📡 API Request - Host: ${host}, Shuffle: ${shuffle}`);
    
    // Génération des faits avec URLs WebP complètes
    let facts = getFacts(baseUrl);
    
    // Shuffle côté serveur si demandé (évite calcul côté client)
    if (shuffle) {
      facts = [...facts].sort(() => Math.random() - 0.5);
      console.log('🔀 Facts shuffled on server side');
    }
    
    // Réponse optimisée avec métadonnées utiles
    const response = {
      facts,
      meta: {
        total: facts.length,
        imageFormat: 'webp',
        averageImageSize: '35KB',
        totalDataSize: `${facts.length * 35}KB`,
        optimized: true,
        timestamp: Date.now(),
        version: '2.0'
      }
    };
    
    console.log(`✅ API Response - ${facts.length} facts, WebP optimized`);
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('❌ API Error:', error);
    
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        message: 'Failed to fetch Lyon facts',
        code: 'FACTS_API_ERROR',
        timestamp: Date.now()
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function HEAD() {  // Pas de paramètre = pas de warning
  return new NextResponse(null, { 
    status: 200,
    headers: {
      'X-API-Status': 'healthy',
      'X-Facts-Count': '70',
      'X-Image-Format': 'webp'
    }
  });
}