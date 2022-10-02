import PocketBase from 'pocketbase';
import { route, RouterOnChangeArgs } from 'preact-router';
import { signal } from '@preact/signals';

const BASE_URl =
  process.env.NODE_ENV === 'production'
    ? 'http://127.0.0.1:8090'
    : 'https://kestrel.fly.dev/';

export const client = new PocketBase(BASE_URl);

export const userDetails = client.authStore.model;

export const isUserLoggedIn = signal(client.authStore.isValid || false);

export const onLogout = async () => {
  client.authStore.clear();
  isUserLoggedIn.value = false;
  route('/login', true);
};

export const onLogin = async (username: string, password: string) => {
  const userDetails = await client.users.authViaEmail(username, password);
  route('/', true);
  isUserLoggedIn.value = client.authStore.isValid;
  return userDetails;
};

export const isLoggedIn = () => {
  return isUserLoggedIn.value;
};

export const routeHandler = (e: RouterOnChangeArgs) => {
  switch (e.url) {
    case '/profile':
      if (isUserLoggedIn.value) route('/profile', true);
      else route('/login', true);
      break;
    case '/login':
      if (isUserLoggedIn.value) route('/profile', true);
      else route('/login', true);
      break;
    case '/logout':
      onLogout();
      break;
  }
};
