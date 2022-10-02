import { h } from 'preact';
import Router, { Route } from 'preact-router';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { PageNotFound } from './pages/page-not-found';
import { Profile } from './pages/profile';
import { routeHandler } from './utils/utils';
import { Navbar } from './components/navbar/navbar';

export function App() {
  return (
    <div className='w-full h-screen bg-base-200'>
      <Navbar />
      <Router onChange={routeHandler}>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/:+' component={PageNotFound} />
      </Router>
    </div>
  );
}
