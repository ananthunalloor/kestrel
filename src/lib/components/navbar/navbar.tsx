import { AuthContext } from '../../context/auth-context';
import { Dropdown } from '../../ui-components/dropdown/dropdown';

const links = [
  { href: '/', label: 'Home' },
  { href: '/profile', label: 'Profile' },
  { href: '/login', label: 'Login' },
  { href: '/logout', label: 'Log Out' }
];

export interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  return (
    <AuthContext.Consumer>
      {data => {
        return (
          <header className='navbar bg-base-100 h-20 px-20 drop-shadow-sm'>
            <div className='flex-1'>
              <a className=' text-xl' href='/'>
                KESTREL
              </a>
            </div>
            <div className='flex-none gap-2'>
              {data.isAuthenticated && (
                <Dropdown
                  menuLinks={links}
                  menuButton={
                    <label
                      tabIndex={0}
                      className='btn btn-ghost btn-circle avatar'
                    >
                      <div className='w-10 rounded-full bg-secondary'>
                        <img src='https://placeimg.com/80/80/people' />
                      </div>
                    </label>
                  }
                />
              )}
            </div>
          </header>
        );
      }}
    </AuthContext.Consumer>
  );
}
