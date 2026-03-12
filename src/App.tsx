import { useAuth } from './lib/AuthContext';

export default function App() {
  const { isValid, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Loom Initialized</h1>
      <div id="auth-status" className="text-lg">
        {isValid && user ? `Logged in as ${user.email || 'user'}` : 'Not logged in'}
      </div>
    </div>
  )
}
