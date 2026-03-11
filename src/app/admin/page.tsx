'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase-client';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('supernova@snmmortgage.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError('Incorrect password. Please try again.');
      setLoading(false);
    } else {
      router.push('/admin/team');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1f1a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Image src="/logo-transparent.png" alt="Supernova Mortgage Brokers" width={80} height={80} />
        </div>

        <div className="bg-gradient-to-b from-[#0e2922] to-[#0c2318] border border-[#d29e4a]/20 rounded-3xl p-8 shadow-2xl shadow-black/40">
          <h1 className="text-2xl font-bold text-white text-center mb-2">Admin Login</h1>
          <p className="text-sm text-white/40 text-center mb-8">Supernova Mortgage Brokers</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full bg-black/30 border border-[#d29e4a]/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d29e4a]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  className="w-full bg-black/30 border border-[#d29e4a]/20 rounded-xl px-4 py-3 pr-11 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d29e4a]/60 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-400 text-xs text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] text-[#0e2922] font-semibold text-sm shadow-lg shadow-[#d29e4a]/25 hover:shadow-[#d29e4a]/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-xs text-white/20 text-center mt-6">
          <a href="/" className="hover:text-white/40 transition-colors">← Back to site</a>
        </p>
      </div>
    </div>
  );
}
