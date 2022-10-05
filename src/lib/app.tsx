import 'material-symbols';
import AsyncRoute from 'preact-async-route';
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
        <>
          <Toaster
            toastOptions={{
              duration: 2000
            }}
          />
          <Router onChange={routeHandler}>
            <Route path='/' component={Home} />
            <AsyncRoute path='/login' component={Login} />
            <AsyncRoute path='/profile' component={Profile} />
            <AsyncRoute path='/:+' component={PageNotFound} />
          </Router>
        </>
      </MainLayout>
    </AuthContextProvider>
  );
}
