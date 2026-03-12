import { useAuth } from './lib/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './lib/ProtectedRoute';

function Home() {
  const { isValid, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Loom Initialized</h1>
      <div id="auth-status" className="text-lg">
        {isValid && user ? `Logged in as ${user.email || 'user'}` : 'Not logged in'}
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <p>Please log in.</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4" id="dashboard-title">Dashboard</h1>
      <p>Welcome to the protected dashboard area.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
