import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Tableau de bord',
    link: '/dashboard',
    icon: 'bx-home'
  },
  /*{
    label: 'Contrôles de masse',
    link: '/masse',
    icon: 'bx-scatter-chart'
  },*/
  {
    id: 2,
    label: 'Contrôles unitaires',
    icon: 'bx-face',
    subItems: [
      {
        label: 'Contrôles de masse',
        link: '/masse',
        parentId: 2
      },
      {
        label: 'Bulletins à flaguer',
        link: '/flag',
        parentId: 2
      },
      {
        label: 'Anomalies de rubriques',
        link: '/rubriques',
        parentId: 2
      },
      {
        label: 'Anomalies de montants',
        link: '/montants',
        parentId: 2
      },
      {
        label: 'Anomalies avérées',
        link: '/averees',
        parentId: 2
      },
    ]
  },
  {
    label: 'Échantillonnage',
    link: '/echantillonnage',
    icon: 'bx-table'
  },
  {
    label: 'Administration',
    link: '/administration',
    icon: 'bx-euro'
  },
];
