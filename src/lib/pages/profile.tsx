import { RequireAuth } from '../ui-components/require-auth/require-auth';

export interface ProfileProps {}

export function Profile({}: ProfileProps) {
  return (
    <RequireAuth>
      <h3>profile</h3>
    </RequireAuth>
  );
}
