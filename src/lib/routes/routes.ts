import { route, RouterOnChangeArgs } from 'preact-router';
import { onLogout } from './../utils/auth';

export const routeHandler = (e: RouterOnChangeArgs) => {
  switch (e.url) {
    case '/profile':
      route('/profile', true);
      break;
    case '/login':
      route('/login', true);
      break;
    case '/logout':
      onLogout();
      break;
  }
};
