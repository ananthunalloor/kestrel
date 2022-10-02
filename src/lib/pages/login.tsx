import { LoginForm } from '../components/login-form/login-form';

export function Login() {
  return (
    <div className='w-full h-[90vh] justify-center flex items-center'>
      <div className='w-[450px]'>
        <LoginForm />
      </div>
    </div>
  );
}
