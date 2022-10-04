import Router, { Route } from 'preact-router';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/navbar/navbar';
import { AuthContextProvider } from './context/provider/auth-context-provider';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { PageNotFound } from './pages/page-not-found';
import { Profile } from './pages/profile';
import { routeHandler } from './routes/routes';

export function App() {
  return (
    <AuthContextProvider>
      <div className='w-full h-screen bg-base-200'>
        <Toaster
          toastOptions={{
            duration: 2000
          }}
        />
        <Navbar />
        <Router onChange={routeHandler}>
          <Route path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/:+' component={PageNotFound} />
        </Router>
      </div>
    </AuthContextProvider>
  );
}
