import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from './authService';

export function Login() {
  const [operatorId, setOperatorId] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Unified authentication handler for login operations
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await authService.login(operatorId, accessKey);
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Authentication failed:', err);
      setError(err.message || 'AUTHENTICATION_FAILED');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-8 gap-8 w-full">
      {/* SYS_ACCESS BLOCK */}
      <div className="w-full max-w-4xl bg-black border-4 border-border-heavy p-8 corner-accent corner-top-left corner-top-right">
        <div className="flex justify-between items-center mb-8 border-b-4 border-border-heavy pb-4">
          <h2 className="text-3xl font-bold tracking-[0.2em] text-primary">SYS_ACCESS</h2>
          <div className="flex gap-2">
            <div className="w-4 h-4 border-2 border-primary"></div>
            <div className="w-4 h-4 bg-primary neon-cyan-glow"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-primary/10 border-l-4 border-primary p-4">
              <p className="text-[10px] text-primary font-bold">PROVIDE OPERATOR CREDENTIALS TO INITIALIZE HARDWARE INTERFACE. IF NEW UNIT: PROCEED TO GRID_ENROLLMENT BELOW.</p>
            </div>
            {error && (
              <div className="bg-red-brutal/10 border-l-4 border-red-brutal p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-brutal">error</span>
                <p className="text-[10px] text-red-brutal font-bold">{error}</p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleLogin} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold tracking-widest block uppercase">Operator_ID</label>
                <input 
                  type="text" 
                  value={operatorId}
                  onChange={(e) => setOperatorId(e.target.value)}
                  className="input-industrial w-full" 
                  placeholder="ID_STATION_XXXX" 
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold tracking-widest block uppercase">Access_Key</label>
                <div className="flex relative">
                  <input 
                    type="password" 
                    value={accessKey}
                    onChange={(e) => setAccessKey(e.target.value)}
                    className="input-industrial w-full font-mono text-lg tracking-[0.3em] pl-4 pr-12" 
                    placeholder="********" 
                    disabled={isLoading}
                    required
                  />
                  <div className="absolute right-0 top-0 h-full w-12 border-l-2 border-border-heavy bg-zinc-900 flex items-center justify-center cursor-help">
                    <span className="material-symbols-outlined text-zinc-600 text-sm">key</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end h-[42px]">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full px-4 py-2 bg-primary text-black font-bold text-sm border-4 border-black hover:bg-white transition-colors shadow-[4px_4px_0px_#00f3ff55] disabled:opacity-50 disabled:cursor-not-allowed h-full flex items-center justify-center whitespace-nowrap"
                >
                  {isLoading ? 'AUTHENTICATING...' : 'INIT_HANDSHAKE'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
