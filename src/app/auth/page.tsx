'use client';

import { AuthContainer } from './components/auth-container';

function AuthenticationPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <AuthContainer />
    </main>
  );
}

export default AuthenticationPage;
