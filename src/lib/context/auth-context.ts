import { User } from 'pocketbase';
import { createContext } from 'preact';

export interface UserContext {
  user: User | null;
  setUser(user: User | null): void;
  isAuthenticated?: boolean;
  setIsAuthenticated(isAuthenticated?: boolean): void;
}
const userContext: UserContext = {
  user: null,
  isAuthenticated: false,
  setUser: (user: User | null) => {
    return;
  },
  setIsAuthenticated: (isAuthenticated?: boolean) => {
    return;
  }
};

export const AuthContext = createContext(userContext);
