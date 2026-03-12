import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from './authService';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { TABS } from '../../lib/constants';
import { Sidebar } from '../../components/layout/Sidebar';
import { Footer } from '../../components/layout/Footer';

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
    <DashboardLayout 
        activeTab={TABS.AUTH} 
        onTabChange={() => {}}
        sidebar={<Sidebar hardwareToggles={[]} subProcesses={[]} />}
        footer={<Footer logs={[]} diagnostics={[]} />}
    >
      <div className="flex flex-col h-full items-center justify-center p-8">
        <div className="w-full max-w-2xl bg-black border-4 border-border-heavy p-8 corner-accent corner-top-left corner-top-right">
          <div className="flex justify-between items-center mb-8 border-b-4 border-border-heavy pb-4">
            <h2 className="text-3xl font-bold tracking-[0.2em]">SYS_ACCESS</h2>
            <div className="flex gap-2">
              <div className="w-4 h-4 border-2 border-primary"></div>
              <div className="w-4 h-4 bg-primary neon-cyan-glow"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-4">
              <div className="bg-primary/10 border-l-4 border-primary p-4">
                <p className="text-xs text-primary font-bold">SECURITY_NOTICE: UNAUTHORIZED ACCESS ATTEMPTS WILL BE LOGGED AND TRACED.</p>
              </div>
              {error && (
                <div className="bg-red-brutal/10 border-l-4 border-red-brutal p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-brutal">error</span>
                  <p className="text-xs text-red-brutal font-bold">{error}</p>
                </div>
              )}
              <form onSubmit={handleLogin} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold tracking-widest block">OPERATOR_ID</label>
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
                  <label className="text-[10px] text-zinc-500 font-bold tracking-widest block">ACCESS_KEY</label>
                  <div className="flex relative">
                    <input 
                      type="password" 
                      value={accessKey}
                      onChange={(e) => setAccessKey(e.target.value)}
                      className="input-industrial w-full font-mono text-lg tracking-[0.3em] pl-4" 
                      placeholder="********" 
                      disabled={isLoading}
                      required
                    />
                    <div className="absolute right-0 top-0 h-full w-12 border-l-2 border-border-heavy bg-zinc-900 flex items-center justify-center cursor-help">
                      <span className="material-symbols-outlined text-zinc-600 text-sm">key</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="px-10 py-3 bg-primary text-black font-bold text-sm border-4 border-black hover:bg-white transition-colors shadow-[4px_4px_0px_#00f3ff55] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'AUTHENTICATING...' : 'INIT_HANDSHAKE'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
