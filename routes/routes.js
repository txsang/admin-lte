import App from 'components/app';
import {PageNotFound} from 'components/page-not-found';
import {Login, HomePage} from "components/pages";


const routes = [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        exact: true,
        path: '/',
      },{
        component: Login,
        exact: true,
        path: '/login',
      }, {
        component: PageNotFound,
        exact: true,
        path: '*'
      }
    ]
  }
];

export default routes;
