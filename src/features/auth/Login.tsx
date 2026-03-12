import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full border-4 border-border-heavy bg-panel-industrial p-8 flex flex-col items-center gap-6 corner-accent corner-top-left shadow-2xl">
        <div className="flex items-center gap-3 bg-primary px-6 py-2 border-r-4 border-b-4 border-black w-full justify-center">
          <span className="material-symbols-outlined text-black scale-110 font-bold">terminal</span>
          <span className="text-black font-bold text-sm tracking-widest">CONSOLE_V4.0_SHELL</span>
        </div>
        <div className="text-center space-y-2 mt-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white">LOGIN_REQUIRED</h1>
          <p className="text-gray-500 text-xs font-bold tracking-widest">AUTHENTICATION MODULE OFFLINE</p>
        </div>
        
        <div className="w-full bg-black p-4 border-2 border-border-heavy text-center font-mono text-xs text-primary mt-4">
          <p className="mb-2 opacity-80">&gt; SYSTEM_READY</p>
          <p className="mb-2 opacity-80">&gt; AWAITING_CREDENTIALS</p>
          <p className="animate-pulse">&gt; _</p>
        </div>

        <Link to="/dashboard" className="w-full">
          <Button variant="primary" className="w-full justify-center py-4 text-sm mt-4">
            BYPASS_AUTH_PHASE_1
          </Button>
        </Link>
      </div>
    </div>
  );
}
