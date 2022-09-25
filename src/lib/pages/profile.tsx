import PocketBase, { User, Admin } from 'pocketbase';
import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import { Auth } from '../types/auth';

export interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const client = new PocketBase('http://127.0.0.1:8090');

  const [userInfo] = useState<Auth | User>(client.authStore.model as User);

  const onLogout = () => {
    client.authStore.clear();
    route('/login', true);
  };
  console.log(JSON.stringify(userInfo?.profile?.username));
  return (
    <>
      <h3>{`Profile -${userInfo?.profile?.username} `}</h3>
      <button onClick={onLogout} class='px-4 py-2 bg-gray-400 m-4'>
        Logout
      </button>
    </>
  );
}