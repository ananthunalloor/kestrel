import { LoginForm } from '../components/login-form/login-form';
import { RedirectUser } from '../ui-components/redirect-user/redirect-user';

export function Login() {
  return (
    <RedirectUser>
      <div className='w-full h-full justify-center flex items-center bg-login-gradient bg-no-repeat bg-cover'>
        <div className=' card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <LoginForm />
        </div>
      </div>
    </RedirectUser>
  );
}
