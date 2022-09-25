import { h } from 'preact';
import Router, { route, Route } from 'preact-router';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { PageNotFound } from './pages/page-not-found';
import { Profile } from './pages/profile';

import PocketBase from 'pocketbase';

export function App() {
  const client = new PocketBase('http://127.0.0.1:8090');

  const routeHandler = e => {
    const isAuth = client.authStore.isValid;
    console.log('Authorization', isAuth);
    switch (e.url) {
      case '/profile':
        if (isAuth) route('/profile', true);
        else route('/login', true);
        break;
      case '/login':
        if (isAuth) route('/profile', true);
        else route('/login', true);
        break;
    }
  };

  return (
    <>
      <nav class='bg-slate-700 p-2 w-full h-10'>
        <ul class='text-white flex gap-4'>
          <a href='/'>Home</a>
          <a href='/login'>Login</a>
          <a href='/profile'>Profile</a>
        </ul>
      </nav>
      <Router onChange={routeHandler}>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/:+' component={PageNotFound} />
      </Router>
    </>
  );
}
