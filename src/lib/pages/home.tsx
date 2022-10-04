import { RequireAuth } from '../ui-components/require-auth/require-auth';

export interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <RequireAuth>
      <div className='w-full h-full'>Home</div>
    </RequireAuth>
  );
}
