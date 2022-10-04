import { User } from 'pocketbase';
import { useState } from 'preact/hooks';
import {
  authenticatedUser as authUser,
  isAuthenticated as isAuth
} from '../../utils/auth';
import { AuthContext } from '../auth-context';

export const AuthContextProvider = (props: { children: JSX.Element }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(
    authUser
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    isAuth || false
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        user: authenticatedUser,
        setUser: setAuthenticatedUser,
        setIsAuthenticated: setIsAuthenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
