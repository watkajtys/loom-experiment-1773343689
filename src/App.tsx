import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './lib/ProtectedRoute';
import Dashboard from './Dashboard';
import { Login } from './features/auth/Login';

function Home() {
  return <Navigate to="/login" replace />;
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
