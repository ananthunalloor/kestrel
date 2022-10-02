import clsx from 'clsx';
import { onLogin } from '../../utils/utils';

export interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className = '' }: LoginFormProps) {
  const onSubmit = async e => {
    e?.preventDefault();
    if (!e?.target[1]?.value && !e?.target[1]?.value) return;
    onLogin(e.target[0].value, e.target[1].value);
  };

  return (
    <form onSubmit={onSubmit} className={clsx('form-control gap-6', className)}>
      <div class='card-body'>
        <div class='form-control'>
          <label class='label'>
            <span class='label-text'>Email</span>
          </label>
          <input
            type='text'
            placeholder='Email'
            id='email'
            class='input input-bordered'
          />
        </div>
        <div class='form-control'>
          <label class='label'>
            <span class='label-text'>Password</span>
          </label>
          <input
            type='text'
            placeholder='Password'
            class='input input-bordered'
            id='password'
          />
          <label class='label'>
            <a href='#' class='label-text-alt link link-hover '>
              Forgot password?
            </a>
          </label>
        </div>
        <div class='form-control mt-6'>
          <button class='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
