import service from '../../images/service.jpg';
import pokestudio from '../../images/pokestudio.jpg';

export const topProjectsData = [
  {
    id: 'project0',
    name: 'Service (Working on...)',
    picture: service,
    tech: [
      'HTML5',
      'CSS3',
      'Typescript',
      'React',
      'NextJs',
      'SSR',
      'Redux/toolkit',
      'react-persist',
      'NodeJs',
      'Express',
      'MongoDB',
      'Auth-User',
      'mongoose',
      'REST API',
      'Hooks',
      'css-modules',
      'RWD',
    ],
    overwiev:
      'Application that allow waitstaff to add restaurants, menus with detailed dishes, manage tables, effortlessly split bills, solving billing and order management challenges. Also allows inviting waitstaff to collaborate. All data securely stored in a database.',
    web: 'https://service-app-jet.vercel.app/',
    git: 'https://github.com/SzEmil/service-app',
  },
  {
    id: 'project1',
    name: 'PokeStudio',
    picture: pokestudio,
    tech: [
      'HTML5',
      'CSS3',
      'Typescript',
      'React',
      'react-router',
      'Redux/toolkit',
      'react-persist',
      'Firebase/Auth',
      'Firebase/database',
      'pokeApi',
      'Hooks',
      'css-modules',
      'RWD',
    ],
    overwiev:
      'Users can browse Pokémon, register for a personal Pokédex, store Pokémon in their own database, open packs, battle AI opponents, earn rewards, and share information on a public board!',
    web: 'https://szemil.github.io/PokeStudio/',
    git: 'https://github.com/SzEmil/PokeStudio',
  },
];
