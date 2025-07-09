export async function GET() {
  const facts = [
    {id: 1,
      category: "climat",
      title: "Lyon se réchauffe plus vite que la France !",
      description: "Lyon a gagné 2,4°C depuis 1960, alors que la France n'a pris que 1,7°C. Cette différence s'explique par l'effet urbain : le béton et l'asphalte amplifient la chaleur. Les conséquences sont concrètes : plus de canicules et davantage de décès lors des épisodes de forte chaleur.",
      imageUrl: "/images/1.jpg"
    },
    {id: 2,
      category: "climat",
      title: "5°C d'écart entre centre-ville et campagne",
      description: "Météo-France a mesuré des différences de 3 à 5°C entre le centre de Lyon et la campagne environnante. Les surfaces minérales stockent la chaleur le jour et la restituent la nuit. Même après le coucher du soleil, la température reste élevée en ville.",
      imageUrl: "/images/2.jpg"
    },
    {
      id: 3,
      category: "environnement",
      title: "Tous les Lyonnais respirent un air pollué",
      description: "L'Organisation mondiale de la santé fixe des seuils de pollution de l'air. À Lyon, 100% du territoire les dépasse. Cela concerne donc tous les 520 000 habitants. Les principales sources sont le trafic routier et le chauffage des bâtiments.",
      imageUrl: "/images/3.jpg"
    },
    {
      id: 4,
      category: "climat",
      title: "Les jours de forte chaleur ont été multipliés par 8",
      description: "Entre 1950 et 1990, Lyon comptait moins d'un demi-jour de forte chaleur par an. Depuis 1990, la moyenne dépasse 4 jours. Une forte chaleur combine 34°C le jour et 20°C la nuit minimum.",
      imageUrl: "/images/4.jpg"
    },
    {
      id: 5,
      category: "environnement",
      title: "87 hectares végétalisés en 4 ans",
      description: "Depuis 2020, la ville a créé l'équivalent de 122 terrains de football en espaces verts. En 2024, 9 hectares d'espaces publics ont été végétalisés. S'y ajoutent 4 hectares dans les nouveaux projets immobiliers privés.",
      imageUrl: "/images/5.png"
    },
    {
      id: 6,
      category: "santé",
      title: "La chaleur a tué jusqu'à 90 personnes en plus",
      description: "Durant l'été 2022, entre 71 et 90 décès supplémentaires ont été enregistrés dans le Rhône lors des périodes de forte chaleur. Cette surmortalité de 5 à 25% touche surtout les personnes âgées et précaires. La ville a renforcé son dispositif de protection.",
      imageUrl: "/images/6.png"
    },
    {
      id: 7,
      category: "environnement",
      title: "L'air est mauvais 11 jours par mois",
      description: "L'indice communal de qualité de l'air révèle 11 jours de pollution par mois en moyenne. Cet indice mesure cinq polluants différents. Pour informer les habitants, la Tour Incity change de couleur chaque soir selon la prévision du lendemain.",
      imageUrl: "/images/7.jpg"
    },
    {
      id: 8,
      category: "énergie",
      title: "12% d'économies d'énergie en un an",
      description: "La ville a réduit sa consommation énergétique de 12% en 2024. L'éclairage public a baissé de 30% et les véhicules municipaux consomment 20% de carburant en moins depuis 2019. Au total, 7 millions d'euros ont été économisés.",
      imageUrl: "/images/8.jpg"
    },
    {
      id: 9,
      category: "environnement",
      title: "338 jours de restrictions d'eau en 8 ans",
      description: "Entre 2016 et 2024, Lyon a connu 338 jours d'alerte sécheresse. En 2023, 87 jours de restrictions ont été décrétés. Ces interdictions d'arroser et de laver deviennent de plus en plus fréquentes avec le changement climatique.",
      imageUrl: "/images/9.jpg"
    },
    {
      id: 10,
      category: "sécurité",
      title: "84% des rues limitées à 30 km/h",
      description: "Lyon est devenue une ville 30 : 84% de ses voies sont limitées à 30 km/h maximum. Cette limitation améliore la sécurité et réduit le bruit. Parallèlement, le nombre d'emplacements vélo a doublé depuis 2019.",
      imageUrl: "/images/10.jpg"
    },
{ id: 11,
  category: "alimentation",
  title: "55% des repas scolaires sont bio",
  description: "Dans les cantines municipales, plus de la moitié des repas servis aux enfants sont issus de l'agriculture biologique. Cette proportion a progressé de 51% à 55% en un an. L'objectif est de proposer une alimentation saine tout en soutenant les producteurs locaux.",
  imageUrl: "/images/11.jpg"
},
{
  id: 12,
  category: "nature",
  title: "37 vergers urbains plantés depuis 2019",
  description: "Lyon comptait zéro verger municipal en 2019. Aujourd'hui, 37 vergers urbains poussent dans la ville. Ces espaces produisent des fruits pour les habitants tout en créant des îlots de fraîcheur. Certains sont gérés par les écoles, d'autres par les riverains.",
  imageUrl: "/images/12.jpg"
},
{
  id: 13,
  category: "déchets",
  title: "1005 bébés utilisent des couches compostables",
  description: "Lyon teste les couches compostables dans ses crèches municipales. Le dispositif concerne désormais 1005 berceaux dans les 2e, 3e, 6e et 8e arrondissements. Ces couches réduisent les déchets et limitent l'exposition aux perturbateurs endocriniens.",
  imageUrl: "/images/13.jpg"
},
{
  id: 14,
  category: "social",
  title: "500€ par m² pour les logements sociaux",
  description: "Lyon aide les bailleurs sociaux avec des subventions pouvant atteindre 500€ par mètre carré. C'est un record en France. Cette enveloppe de 34,5 millions d'euros vise à atteindre 25% de logements sociaux dans la ville.",
  imageUrl: "/images/14.jpg"
},
{
  id: 15,
  category: "mobilité",
  title: "39 674 emplacements vélo dans la ville",
  description: "Le nombre d'emplacements vélo a doublé depuis 2019. Lyon compte aujourd'hui 39 674 places de stationnement pour bicyclettes. Cette politique s'accompagne de 48,8% des voies équipées d'aménagements cyclables.",
  imageUrl: "/images/15.jpg"
},
{
  id: 16,
  category: "international",
  title: "100 000€ d'aide humanitaire pour Gaza",
  description: "La ville a versé 100 000€ d'aide humanitaire pour la population civile de Gaza. Cette somme a été répartie entre la Croix-Rouge (50 000€ en 2023) et Médecins du Monde (50 000€ en 2024).",
  imageUrl: "/images/16.jpg"
},
{
  id: 17,
  category: "environnement",
  title: "863 agents sensibilisés à la transition écologique",
  description: "La ville forme massivement ses 8 500 agents à la transition écologique. 863 ont déjà été sensibilisés grâce à des formats numériques et présentiels. 74 agents ont même participé à une Convention Citoyenne pour le Climat interne.",
  imageUrl: "/images/17.jpg"
},
{
  id: 18,
  category: "jeunesse",
  title: "6 900 places dans les centres de loisirs",
  description: "Le dispositif « Hé Hop » propose 6 900 places aux enfants de 3 à 16 ans pendant les vacances scolaires. Cette offre municipale inédite mélange activités physiques, découvertes culturelles et lien avec la nature.",
  imageUrl: "/images/18.jpg"
},
{
  id: 19,
  category: "innovation",
  title: "La Tour Incity annonce la qualité de l'air",
  description: "Chaque soir, la Tour Incity s'illumine selon la qualité de l'air prévue pour le lendemain. Cette initiative d'ATMO Auvergne-Rhône-Alpes informe visuellement tous les Lyonnais pendant 1h30. Un code couleur simple pour un enjeu de santé publique.",
  imageUrl: "/images/19.jpg"
},
{
  id: 20,
  category: "culture",
  title: "17 200 livres vendus à la braderie municipale",
  description: "La braderie annuelle de la Bibliothèque municipale a attiré 2 560 visiteurs. 17 200 livres, CD et vinyles ont quitté les collections pour une nouvelle vie chez les habitants. Les documents étaient vendus 1€, les beaux-livres 5€.",
  imageUrl: "/images/20.jpg"
},
{
  id: 21,
  category: "environnement",
  title: "12 nouvelles toilettes sèches dans les parcs",
  description: "Lyon a installé 12 toilettes sèches à lombricompostage dans ses parcs et jardins. Ces sanitaires écologiques transforment 100% des déchets en compost agricole. Les urines sont récupérées et les fèces compostées par les lombrics.",
  imageUrl: "/images/21.jpg"
},
{
  id: 22,
  category: "sécurité",
  title: "293 policiers formés contre les violences sexistes",
  description: "Tous les agents de police municipale ont été formés à la prévention des violences sexistes et sexuelles. 250 agents en 2023, puis 43 nouveaux en 2024. Lyon déploie également le dispositif « Angela » avec 250 lieux sûrs pour les victimes.",
  imageUrl: "/images/22.jpg"
},
{
  id: 23,
  category: "santé",
  title: "113 malades chroniques dans le sport-santé",
  description: "L'« Espace Sport Santé » accompagne 113 personnes en situation de maladies chroniques. Ce dispositif municipal propose une activité physique adaptée pour améliorer la santé des publics vulnérables.",
  imageUrl: "/images/23.jpg"
},
{
  id: 24,
  category: "enfance",
  title: "71% des enfants adorent leur Rue des enfants",
  description: "La ville a interrogé 3 700 enfants sur les aménagements « Rue des enfants ». 71% déclarent apprécier ou adorer leur rue réaménagée. 85% des 1 100 parents interrogés trouvent également la rue plus agréable.",
  imageUrl: "/images/24.jpg"
},
{
  id: 25,
  category: "emploi",
  title: "127 700€ de subventions jeunesse doublées",
  description: "La ville a doublé ses subventions aux structures jeunesse, atteignant 127 700€. Cette enveloppe finance l'accompagnement des 15-29 ans dans leur quotidien et leur engagement pour la transition écologique.",
  imageUrl: "/images/25.jpg"
},
{
  id: 26,
  category: "commerce",
  title: "80 commerçants dans le circuit court",
  description: "80 commerçants participent à la démarche « Ici.C.Local » pour promouvoir les produits locaux. Ce label permet aux consommateurs de connaître immédiatement la provenance des aliments sur les marchés lyonnais.",
  imageUrl: "/images/26.jpg"
},
{
  id: 27,
  category: "démographie",
  title: "29% de la population a entre 15 et 29 ans",
  description: "Lyon compte 29% de jeunes entre 15 et 29 ans, soit 151 000 personnes environ. Cette forte proportion fait de Lyon une ville particulièrement dynamique.",
  imageUrl: "/images/27.jpg"
},
{
  id: 28,
  category: "logement",
  title: "23,69% de logements sociaux atteints",
  description: "Lyon a atteint 23,69% de logements sociaux en 2023, contre 22,99% en 2022. L'objectif de 25% se rapproche grâce aux 34,5 millions d'euros investis par la municipalité.",
  imageUrl: "/images/28.jpg"
},
{
  id: 29,
  category: "agriculture",
  title: "La dernière ferme de Lyon sauvée",
  description: "La ferme Perraud à Saint-Rambert est la dernière exploitation agricole de Lyon intra-muros. La ville est entrée au capital de la coopérative qui l'a reprise pour pérenniser ce projet de maraîchage biologique et d'élevage.",
  imageUrl: "/images/29.jpg"
},
{
  id: 30,
  category: "environnement",
  title: "1,7 million d'aides à la transition écologique",
  description: "Lyon a obtenu 1,7 million d'euros de financements extérieurs pour sa transition écologique. Cette somme provient des certificats d'économie d'énergie, du Fonds Vert, de l'ADEME et de l'Europe.",
  imageUrl: "/images/30.jpg"
},
{
  id: 31,
  category: "ville",
  title: "10 808 habitants par km², Lyon ultra-dense",
  description: "Lyon affiche une densité de 10 808 habitants par kilomètre carré. Cette forte concentration urbaine explique en partie les problèmes de chaleur et de pollution. La densité a légèrement diminué entre 2020 et 2021.",
  imageUrl: "/images/31.jpg"
},
{
  id: 32,
  category: "biodiversité",
  title: "481 jardins citoyens fleurissent dans la ville",
  description: "Les Lyonnais cultivent 481 jardins citoyens répartis sur tout le territoire. Ces espaces regroupent jardins partagés, jardins familiaux et composteurs collectifs. Ils renforcent le lien social tout en végétalisant la ville.",
  imageUrl: "/images/32.jpg"
},
{
  id: 33,
  category: "handicap",
  title: "9,95% d'agents en situation de handicap",
  description: "La ville emploie 9,95% d'agents bénéficiaires de l'obligation d'emploi handicap. Ce taux dépasse l'objectif légal de 6% et les engagements pris avec le Fonds pour l'insertion des personnes handicapées dans la fonction publique.",
  imageUrl: "/images/33.jpg"
},
{
  id: 34,
  category: "égalité",
  title: "L'écart salarial hommes-femmes diminue",
  description: "L'écart de rémunération entre hommes et femmes est passé de -10,2% à -8% depuis 2020. Cette réduction s'explique par les augmentations salariales accordées en priorité aux métiers les plus féminisés comme l'administration et le social.",
  imageUrl: "/images/34.jpg"
},
{
  id: 35,
  category: "propreté",
  title: "130 marchés forains trient leurs déchets",
  description: "Depuis janvier 2024, les 130 marchés forains gérés par la ville ont changé leur gestion des déchets. Les grands marchés trient en trois flux : biodéchets, cartons et tout-venant. Les petits marchés repartent avec leurs déchets.",
  imageUrl: "/images/35.jpg"
},
{
  id: 36,
  category: "crèches",
  title: "43,20% de places en crèche pour les moins de 3 ans",
  description: "Le taux d'accueil en crèche est passé de 37,40% en 2022 à 43,20% en 2024. Cette progression améliore significativement la conciliation entre vie familiale et vie professionnelle pour les parents lyonnais.",
  imageUrl: "/images/36.jpg"
},
{
  id: 37,
  category: "numérique",
  title: "63,8% du matériel informatique reconditionné",
  description: "La ville achète 63,8% de ses équipements informatiques reconditionnés depuis le début de l'année. Cette démarche réduit l'impact environnemental du numérique. Les matériels réformés sont donnés à l'entreprise Envie pour revalorisation.",
  imageUrl: "/images/37.jpg"
},
{
  id: 38,
  category: "espaces verts",
  title: "31 m² d'espaces végétalisés par habitant",
  description: "Chaque Lyonnais dispose de 31 mètres carrés d'espaces végétalisés en comptant tous les espaces verts. Ce chiffre inclut les parcs, jardins et espaces naturels. Il ne faut pas le confondre avec les 8,1 m² d'espaces verts publics stricto sensu.",
  imageUrl: "/images/38.jpg"
},
{
  id: 39,
  category: "écoles",
  title: "39 écoles bénéficient du dispositif Coup de pouce",
  description: "Le programme Coup de pouce aide les enfants qui parlent peu à développer leur langage. 46 petits groupes de 5 enfants sont organisés dans 39 écoles lyonnaises.",
  imageUrl: "/images/39.jpg"
},
{
  id: 40,
  category: "environnement",
  title: "100% de l'électricité municipale renouvelable",
  description: "La ville achète 100% de son électricité garantie d'origine européenne renouvelable. Depuis 2024, 20% des bâtiments publics sont alimentés par de l'électricité 100% française et renouvelable. La transition énergétique s'accélère.",
  imageUrl: "/images/40.jpg"
},
{
  id: 41,
  category: "eau",
  title: "86,94% de rendement du réseau d'eau potable",
  description: "Le réseau d'eau potable lyonnais affiche un rendement de 86,94% en 2023, contre 85,91% en 2020-21. Cette amélioration signifie moins de fuites et moins de gaspillage. L'eau distribuée respecte 100% des normes de qualité physico-chimique.",
  imageUrl: "/images/41.jpg"
},
{
  id: 42,
  category: "sports",
  title: "123 places gratuites pour les Jeux paralympiques",
  description: "La ville a offert 123 places gratuites aux associations lyonnaises pour assister aux épreuves paralympiques. Le relais de la flamme paralympique s'est déroulé place Bellecour avec un village d'animations handisport du 26 au 28 août.",
  imageUrl: "/images/42.jpg"
},
{
  id: 43,
  category: "insertion",
  title: "101 728 heures d'insertion dans les marchés publics",
  description: "Les entreprises qui travaillent avec la ville ont réalisé 101 728 heures d'insertion en 2023. Ces heures permettent à des personnes éloignées de l'emploi de retrouver une activité professionnelle via les marchés publics municipaux.",
  imageUrl: "/images/43.jpg"
},
{
  id: 44,
  category: "seniors",
  title: "46 bénéficiaires des balades seniors adaptées",
  description: "La ville organise des sorties à la journée pour 46 seniors en grande précarité et à mobilité réduite. Ces balades vers Tournus permettent de lutter contre l'isolement social. Un minibus récupère les participants à leur domicile.",
  imageUrl: "/images/44.jpg"
},
{
  id: 45,
  category: "biodiversité",
  title: "89 jardins collectifs cultivés par les habitants",
  description: "Les Lyonnais entretiennent 89 jardins citoyens collectifs répartis entre jardins partagés et jardins familiaux. Ces espaces de 30 hectares au total permettent de cultiver des légumes tout en créant du lien social dans les quartiers.",
  imageUrl: "/images/45.jpg"
},
{
  id: 46,
  category: "environnement",
  title: "135 partenaires dans l'Agora Lyon 2030",
  description: "L'Agora Lyon 2030 rassemble 135 acteurs engagés pour le climat : entreprises, associations, établissements publics et acteurs de l'enseignement. Cette alliance créée en 2023 s'est enrichie de 71 nouveaux membres en 2024.",
  imageUrl: "/images/46.jpg"
},
{
  id: 47,
  category: "innovation",
  title: "OnlyOffice remplace Microsoft dans les bureaux",
  description: "La ville migre ses 8 500 agents de Microsoft Office vers OnlyOffice, une suite bureautique libre. Ce choix renforce l'indépendance vis-à-vis des géants du numérique et limite l'obsolescence programmée des équipements informatiques.",
  imageUrl: "/images/47.jpg"
},
{
  id: 48,
  category: "construction",
  title: "La Tour Guillot-Bourdeix livrée en 2028",
  description: "Le projet de rénovation de la Tour Guillot-Bourdeix dans le 8e arrondissement associe rénovation thermique et construction bas carbone. Cette programmation mixte comprendra 50% de logements abordables, des commerces solidaires et un tiers-lieu.",
  imageUrl: "/images/48.jpg"
},
{
  id: 49,
  category: "budget",
  title: "1,312 milliard d'euros d'investissements planifiés",
  description: "La ville a programmé 1,312 milliard d'euros d'investissements pour équiper et rénover Lyon entre 2021 et 2026. Ce budget finance la construction d'écoles, la rénovation de bâtiments municipaux et les infrastructures. 91% de l'augmentation récente va au développement durable.",
  imageUrl: "/images/49.jpg"
},
{
  id: 50,
  category: "sécurité",
  title: "250 structures adhèrent au réseau Angela",
  description: "Le dispositif Angela contre le harcèlement de rue compte 250 lieux sûrs adhérents. Ces commerces, bars et associations formés accueillent les personnes qui ne se sentent pas en sécurité sur l'espace public. 26 formations ont été dispensées.",
  imageUrl: "/images/50.jpg"
},
{
  id: 51,
  category: "biodiversité",
  title: "19% de couverture végétale sur le territoire",
  description: "L'indice de canopée révèle que 19% du territoire lyonnais est couvert par la végétation. Cet indicateur mesure la surface occupée par les feuillages vus du ciel. La ville travaille à augmenter ce pourcentage pour lutter contre la chaleur urbaine.",
  imageUrl: "/images/51.jpg"
},
{
  id: 52,
  category: "recherche",
  title: "Campus OMS : Lyon centre mondial de formation santé",
  description: "L'Organisation Mondiale de la Santé a choisi Lyon pour implanter son Campus de l'Académie. Ce centre de formation continue deviendra la structure de référence mondiale en santé publique. Il ouvre ses portes fin 2024 dans le Biodistrict de Gerland.",
  imageUrl: "/images/52.jpg"
},
{
  id: 53,
  category: "emploi",
  title: "349 589 emplois sur le territoire en 2021",
  description: "Lyon compte 349 589 emplois, soit une progression de 8 227 postes depuis 2019. La ville offre 143 emplois pour 100 actifs résidents, confirmant son attractivité économique. 29% des activités concernent les services intellectuels spécialisés.",
  imageUrl: "/images/53.jpg"
},
{
  id: 54,
  category: "commerce",
  title: "656 marchés publics conclus chaque année",
  description: "La ville signe en moyenne 656 marchés publics par an pour un montant total de 253 millions d'euros. Ces contrats avec 5 100 fournisseurs financent les services municipaux selon des critères sociaux et environnementaux renforcés.",
  imageUrl: "/images/54.jpg"
},
{
  id: 55,
  category: "patrimoine",
  title: "160 millions d'euros pour rénover les bâtiments",
  description: "La municipalité investit 160 millions d'euros dans la rénovation thermique de son patrimoine bâti. L'objectif est de diviser par deux les consommations énergétiques d'ici 2050 et de réduire de 80% les émissions de gaz à effet de serre.",
  imageUrl: "/images/55.jpg"
},
{
  id: 56,
  category: "inclusion",
  title: "Distributeurs de protections périodiques gratuits",
  description: "Deux distributeurs de protections périodiques gratuites ont été installés dans les bibliothèques Part-Dieu et Bachut. Cette mesure lutte contre la précarité menstruelle qui touche 1,7 million de femmes en France selon les études.",
  imageUrl: "/images/56.jpg"
},
{
  id: 57,
  category: "formation",
  title: "720 agents de crèche formés au plein air",
  description: "720 agents municipaux des crèches ont été formés à la pédagogie de plein air en 2022. Cette approche éducative permet aux enfants de découvrir la nature au quotidien grâce aux nouvelles cours végétalisées des établissements.",
  imageUrl: "/images/57.jpg"
},
{
  id: 58,
  category: "événements",
  title: "Certification ISO 20121 pour les événements durables",
  description: "La ville a obtenu la certification ISO 20121 qui garantit des événements responsables et durables. Cette norme encadre les conséquences sociales, économiques et écologiques des manifestations comme la Fête des Lumières.",
  imageUrl: "/images/58.jpg"
},
{
  id: 59,
  category: "solidarité",
  title: "Accès gratuit aux piscines et patinoires pour les précaires",
  description: "Le CCAS a lancé l'opération « j'ai piscine, j'ai patinoire » pour les familles en difficulté financière. Ce dispositif offre un accès gratuit ou à tarif réduit aux équipements sportifs municipaux. L'objectif est de démocratiser le sport pour tous.",
  imageUrl: "/images/59.jpg"
},
{
  id: 60,
  category: "sécurité",
  title: "175 piétons et 169 cyclistes blessés en 2022",
  description: "Les accidents de circulation ont touché 175 piétons et 169 cyclistes à Lyon en 2022. Trois cyclistes sont décédés. Ces chiffres montrent l'importance des aménagements sécurisés et de la limitation à 30 km/h pour protéger les usagers fragiles.",
  imageUrl: "/images/60.jpg"
}, 
{
  id: 61,
  category: "education",
  title: "2 300 enfants dans des écoles avec cours nature",
  description: "2 300 élèves bénéficient de cours végétalisées dans leurs écoles ou crèches. Ces espaces remplacent le bitume par des arbres, des plantes et des sols perméables. L'objectif est de reconnecter les enfants avec la nature au quotidien.",
  imageUrl: "/images/61.jpg"
},
{
  id: 62,
  category: "innovation",
  title: "1er marché électricité 100% française et renouvelable",
  description: "La ville a signé son premier marché pour une électricité 100% garantie d'origine française et renouvelable. Ce contrat effectif en 2024 concerne 20% des bâtiments publics. Le reste est alimenté par de l'électricité européenne renouvelable.",
  imageUrl: "/images/62.jpg"
},
{
  id: 63,
  category: "compostage",
  title: "2 701 bornes à compost dans la ville",
  description: "Lyon compte 2 701 bornes à compost et 947 composteurs partagés. Cela représente environ un équipement de compostage pour 143 habitants. Ces installations permettent de valoriser les déchets organiques des ménages en compost fertile pour les jardins.",
  imageUrl: "/images/63.jpg"
},
{
  id: 64,
  category: "solidarité",
  title: "Première tarification sociale du stationnement en France",
  description: "Depuis juin 2024, Lyon applique la première politique de stationnement selon les revenus en France. Les tarifs varient selon le poids du véhicule, sa motorisation et les critères sociaux des familles. Une révolution pour le partage de l'espace public.",
  imageUrl: "/images/64.jpg"
},
{
  id: 65,
  category: "pollution sonore",
  title: "3,57% des Lyonnais surexposés au bruit",
  description: "3,57% de la population lyonnaise subit une surexposition au bruit selon les mesures de juin 2023. La pollution sonore provient principalement des transports routiers, ferroviaires et aériens. Les grands axes concentrent les nuisances les plus importantes.",
  imageUrl: "/images/65.jpg"
},
{
  id: 66,
  category: "biodiversité",
  title: "126 espèces protégées observées sur le territoire",
  description: "Sur les 3 053 espèces observées à Lyon en 2022, 126 bénéficient d'un statut de protection. On compte 5 espèces animales et 121 espèces végétales protégées. Le zoo et le jardin botanique accueillent également des espèces menacées selon l'UICN.",
  imageUrl: "/images/66.jpg"
},
{
  id: 67,
  category: "risques environnementaux",
  title: "31 espèces exotiques envahissantes dans les parcs",
  description: "31 espèces exotiques envahissantes ont été recensées dans les espaces publics lyonnais en 2020. Ces plantes ou animaux introduits perturbent les écosystèmes locaux. La ville développe des stratégies de gestion pour préserver la biodiversité native.",
  imageUrl: "/images/67.jpg"
},
{
  id: 68,
  category: "environnement",
  title: "17 projets environnement dans le budget participatif",
  description: "17 projets sur le thème « Environnement et nature en ville » ont été sélectionnés dans le budget participatif 2023. Ils représentent 2,265 millions d'euros, soit 18% du budget total. Les habitants votent directement pour ces initiatives écologiques.",
  imageUrl: "/images/68.jpg"
},
{
  id: 69,
  category: "climat",
  title: "1 153 kilotonnes de CO2 émises par Lyon",
  description: "Le territoire lyonnais émet 1 153 kilotonnes équivalent CO2 par an, soit 2,3 tonnes par habitant. Les secteurs résidentiel et tertiaire représentent 77% des émissions, les transports 18%. Ces émissions ont baissé de 28% depuis 2008.",
  imageUrl: "/images/69.jpg"
},
{
  id: 70,
  category: "coopération",
  title: "Jumelage agricole avec la commune de Thurins",
  description: "Lyon a signé un contrat de réciprocité avec Thurins, commune rurale de l'ouest lyonnais. Cette coopération porte sur la jeunesse, l'éducation, l'alimentation et l'agriculture. Elle illustre les complémentarités entre ville et campagne pour la transition écologique.",
  imageUrl: "/images/70.jpg"
}
  ];
  
  return Response.json({ facts });
}