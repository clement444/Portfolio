import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    id: 'projet-sql-soc',
    title: 'Base de données analytique pour un SOC',
    description:
      "Projet de SQL avancé réalisé en groupe dans le cadre du module PostgreSQL. La base modélise un SOC : des équipements surveillés, des règles de détection, des alertes horodatées et des incidents assignés à des analystes organisés en hiérarchie. Le dépôt contient le schéma, un jeu de données de 240 alertes et des requêtes analytiques.",
    technologies: ['PostgreSQL', 'SQL'],
    repositoryUrl:
      'https://github.com/clement444/projet-sql-pauline_thomas_clement_damien',
  },
  {
    id: 'forum-node',
    title: 'Forum web en Node.js',
    description:
      "Application de forum avec inscription, connexion par session cookie et mots de passe hashés avec bcrypt. Les utilisateurs créent des posts avec catégories et image, commentent, likent et peuvent modifier ou supprimer leurs propres contenus. Le projet se lance en local ou avec Docker Compose, les données étant conservées dans des volumes.",
    technologies: ['JavaScript', 'Node.js', 'SQLite', 'EJS', 'Docker'],
    repositoryUrl: 'https://github.com/clement444/Projet-ProjJS.2-Forum',
  },
  {
    id: 'forum-go',
    title: 'Forum web en Go',
    description:
      "Même cahier des charges que le forum Node.js, mais écrit en Go avec SQLite. Gestion des sessions par cookie avec expiration, mots de passe hashés avec bcrypt, posts avec catégories et image, commentaires, likes et dislikes, filtrage des posts et pages d'erreur dédiées. Le projet se lance en local ou dans un conteneur Docker.",
    technologies: ['Go', 'SQLite', 'HTML', 'CSS', 'Docker'],
    repositoryUrl: 'https://github.com/clement444/Projet---ProjJS.2---Forum',
  },
  {
    id: 'uno-web',
    title: 'UNO en ligne',
    description:
      "Jeu de UNO multijoueur réalisé en groupe. L'application gère la création de compte, la connexion, un lobby avec recherche et filtre des salons, une salle d'attente jusqu'à quatre joueurs et une partie appliquant les règles classiques du UNO, y compris le UNO et le Contre-UNO. Le serveur tourne avec Bun.",
    technologies: ['JavaScript', 'HTML', 'CSS', 'Bun'],
    repositoryUrl: 'https://github.com/clement444/Projet-Uno-Web',
  },
  {
    id: 'java-arena',
    title: 'Pokémon Arena en Java',
    description:
      "Jeu console réalisé pour le cours de programmation orientée objet. Le joueur dirige un dresseur, combat des Pokémon sauvages avec un système d'avantages de type, utilise des objets, achète dans une boutique et sauvegarde sa progression dans un fichier CSV. Le projet met en pratique l'héritage, le polymorphisme, l'encapsulation, les collections et les exceptions personnalisées.",
    technologies: ['Java'],
    repositoryUrl: 'https://github.com/clement444/PROJET-JAVA-ARENA',
  },
  {
    id: 'campus-library',
    title: 'Campus Library',
    description:
      "Petite application web en Go réalisée pour un examen de Git avancé. Elle affiche une liste de livres, la fiche détaillée de chaque livre et une page de contact.",
    technologies: ['Go', 'HTML', 'CSS'],
    repositoryUrl: 'https://github.com/clement444/exam-git-avance',
  },
  {
    id: 'mini-wiki-tech',
    title: 'Mini wiki technique sur Git',
    description:
      "Wiki réalisé en groupe qui présente le workflow Git et les outils associés. Il explique les bases de Git pour les débutants et regroupe les commandes utiles.",
    technologies: ['HTML', 'CSS'],
    repositoryUrl: 'https://github.com/clement444/mini-wiki-tech',
  },
];
