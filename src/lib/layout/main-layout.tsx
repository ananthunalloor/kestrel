import { Navbar } from '../components/navbar/navbar';
import { RequireAuth } from '../ui-components/require-auth/require-auth';

export function MainLayout(props: { children: JSX.Element }) {
  return (
    <div className='w-full h-screen bg-secondary-content flex flex-col '>
      <RequireAuth>
        <Navbar />
      </RequireAuth>
      <div className='flex-grow'>{props.children}</div>
    </div>
  );
}
