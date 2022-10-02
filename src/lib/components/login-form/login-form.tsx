import clsx from 'clsx';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { onLogin } from '../../utils/utils';
import { LoginFormType } from '../../types/common';

export interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className = '' }: LoginFormProps) {
  const loginSchema = object({
    email: string().email().required(),
    password: string().required()
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormType>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormType) => {
    onLogin(data.email, data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx('form-control gap-6', className)}
    >
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
            {...register('email')}
          />
          <p className='text-error pl-4 pt-1 text-sm'>
            {errors.email?.message}
          </p>
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
            {...register('password')}
          />
          <p className='text-error pl-4 pt-1 text-sm'>
            {errors.password?.message}
          </p>
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
