import PocketBase from 'pocketbase';
import { route } from 'preact-router';

export function LoginForm() {
  const client = new PocketBase('http://127.0.0.1:8090');

  const onSubmit = async e => {
    e.preventDefault();
    const userAuthData = await client.users.authViaEmail(
      e.target[0].value,
      e.target[1].value
    );
    console.log(userAuthData);
    route('/profile', true);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        class='m-4 p-2 bg-slate-300 text-black'
        type='text'
        placeholder='Email'
        id='email'
      />
      <input
        class='m-4 p-2 bg-slate-300 text-black'
        type='password'
        placeholder='Password'
        id='password'
      />
      <button class='px-4 py-2 bg-gray-400 m-4' type='submit'>
        login
      </button>
    </form>
  );
}
