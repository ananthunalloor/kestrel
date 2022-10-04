import { Navbar } from '../components/navbar/navbar';
import { RequireAuth } from '../ui-components/require-auth/require-auth';

export function MainLayout(props: { children: JSX.Element }) {
  return (
    <div className=''>
      <RequireAuth>
        <Navbar />
      </RequireAuth>
      {props.children}
    </div>
  );
}
