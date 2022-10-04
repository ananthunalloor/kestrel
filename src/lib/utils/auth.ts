import PocketBase, { User } from 'pocketbase';
import { route } from 'preact-router';
import { useContext } from 'preact/hooks';
import { BASE_URl } from '../constants/constant';
import { AuthContext } from '../context/auth-context';
import { alert } from './utils';

const client = new PocketBase(BASE_URl);

/**
 * Cancel all requests, clear the auth store, and redirect to the login page.
 */
export const onLogout = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  client.cancelAllRequests();
  client.authStore.clear();
  setIsAuthenticated(false);
  alert('success', 'Logout successful');
  route('/login', true);
};

/**
 * This function takes a username and password, and returns the user details if the login is
 * successful.
 * @param {string} username - The email address of the user.
 * @param {string} password - string - The user's password.
 * @returns The userDetails object.
 */
export const onLogin = async (username: string, password: string) => {
  return await client.users.authViaEmail(username, password);
};

/**
 * If the authStore is valid, return true, otherwise return false.
 * @returns The isValid property of the authStore object.
 */
export const isAuthenticated = () => {
  return client.authStore.isValid || false;
};

/**
 * It returns the authenticated user from the authStore, or null if there is no authenticated user
 * @returns The authenticated user or null.
 */
export const authenticatedUser = () => {
  return (client.authStore.model as User) || null;
};
