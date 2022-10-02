import { useState } from 'preact/hooks';
import { Dropdown } from '../../ui-components/dropdown/dropdown';
import { Modal } from '../../ui-components/modal/modal';
import { isUserLoggedIn } from '../../utils/utils';
import { LoginForm } from '../login-form/login-form';

export interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  let [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/profile', label: 'Profile' },
    { href: '/', label: 'Dashboard' },
    { href: '/login', label: 'Settings' },
    { href: '/logout', label: 'Log Out' }
  ];

  return (
    <header className='navbar bg-base-100 h-20 px-20 drop-shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl' href='/'>
          KESTREL
        </a>
      </div>
      <div className='flex-none gap-2'>
        {isUserLoggedIn.value ? (
          <Dropdown
            menuLinks={links}
            menuButton={
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img src='https://placeimg.com/80/80/people' />
                </div>
              </label>
            }
          />
        ) : (
          <button className='btn' onClick={() => setIsOpen(true)}>
            Login
          </button>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        footer={
          <button
            class='btn btn-circle btn-ghost absolute top-1 right-1'
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        }
        title='Login'
        titleClassName='text-4xl font-bold text-center'
      >
        <LoginForm />
      </Modal>
    </header>
  );
}
