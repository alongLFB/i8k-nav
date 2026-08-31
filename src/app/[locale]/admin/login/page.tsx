'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Shield, Loader2, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { LocaleToggle } from '@/components/layout/LocaleToggle';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);
  const [lockoutTime, setLockoutTime] = useState<number | null>(null);
  const [now, setNow] = useState<number>(0);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const t = useTranslations('login');
  const locale = useLocale();

  useEffect(() => {
    if (!lockoutTime) return;
    setNow(Date.now());
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [lockoutTime]);

  const isLockedOut = lockoutTime !== null && now < lockoutTime;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutTime && Date.now() < lockoutTime) {
      setError(t('lockedOut'));
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push(`/${locale}/admin`);
      } else {
        setError(data.message || t('error'));
        if (data.remainingAttempts !== undefined) {
          setRemainingAttempts(data.remainingAttempts);
        }
        if (data.lockoutTime !== undefined) {
          setLockoutTime(data.lockoutTime);
        }
      }
    } catch (err) {
      setError(t('networkError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 bg-linear-to-br from-orange-50 via-gray-50 to-red-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-orange-950/20">
      {/* Top Bar with Toggles */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between py-2">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
        >
          <ArrowLeft size={14} />
          {t('backToHome')}
        </Link>
        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>

      <div className="w-full max-w-md mx-auto my-auto p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200/80 dark:border-gray-800">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25 mb-4 text-white">
            <Shield size={32} />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-red-600 text-center">
            {t('title')}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-xs text-center">{t('subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('passwordPlaceholder')}
                className="w-full pl-4 pr-12 py-3 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white transition-all"
                disabled={loading || isLockedOut}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs flex flex-col gap-1 border border-red-200 dark:border-red-800">
              <span className="font-medium">{error}</span>
              {remainingAttempts !== null && (
                <span>{t('remainingAttempts', { count: remainingAttempts })}</span>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || isLockedOut || !password}
            className="w-full py-3 px-4 bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl text-sm font-semibold shadow-md shadow-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            {loading ? t('loading') : t('submit')}
          </button>
        </form>
      </div>

      <footer className="text-center text-xs text-gray-400 dark:text-gray-500 py-4">
        © 2026 i8K Video Navigation. All rights reserved.
      </footer>
    </div>
  );
}
