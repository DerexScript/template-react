import AboutList from '../pages/About/list';
import IRoutes from './IRoutes';

const routesAbout: IRoutes[] = [
  {
    path: '/about',
    component: AboutList,
    visibleInDisplay: true,
    displayName: 'About',
  },
];

export default routesAbout;
