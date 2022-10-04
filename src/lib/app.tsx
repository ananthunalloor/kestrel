import Router, { Route } from 'preact-router';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/provider/auth-context-provider';
import { MainLayout } from './layout/main-layout';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { PageNotFound } from './pages/page-not-found';
import { Profile } from './pages/profile';
import { routeHandler } from './routes/routes';

export function App() {
  return (
    <AuthContextProvider>
      <MainLayout>
        <div className='w-full h-screen bg-base-100'>
          <Toaster
            toastOptions={{
              duration: 2000
            }}
          />
          <Router onChange={routeHandler}>
            <Route path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
            <Route path='/:+' component={PageNotFound} />
          </Router>
        </div>
      </MainLayout>
    </AuthContextProvider>
  );
}
