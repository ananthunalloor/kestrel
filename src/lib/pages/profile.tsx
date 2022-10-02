import { User } from 'pocketbase';
import { useState } from 'preact/hooks';
import { Auth } from '../types/auth';
import { onLogout, userDetails } from '../utils/utils';

export interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const [userInfo] = useState<Auth | User>(userDetails as User);

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
