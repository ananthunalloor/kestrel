import { route } from 'preact-router';
import { useContext, useEffect } from 'preact/hooks';
import { AuthContext } from '../../context/auth-context';

export function RedirectUser(props: { children: JSX.Element }) {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      route('/', true);
    }
  }, []);

  return !isAuthenticated ? props.children : null;
}
