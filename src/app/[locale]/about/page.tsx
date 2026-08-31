'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { LocaleToggle } from '@/components/layout/LocaleToggle';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { ArrowLeft, Sparkles, Film, Search, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-orange-50/20 to-red-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-orange-950/20 text-foreground flex flex-col justify-between p-4 sm:p-8">
      {/* Top Header Navigation */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between py-2">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
        >
          <ArrowLeft size={16} />
          {t('back_to_home')}
        </Link>
        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-3xl w-full mx-auto my-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200/80 dark:border-gray-800">
        <div className="p-8 sm:p-12 text-center bg-linear-to-br from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <img src="/favicon.svg" alt="i8K Logo" className="w-16 h-16 rounded-2xl shadow-lg mb-4 bg-white/10 p-1 backdrop-blur-xs" />
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              {t('title')}
            </h1>
            <p className="text-white/90 font-medium text-sm sm:text-base max-w-lg">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            {t('description')}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-orange-50/50 dark:bg-gray-800/60 border border-orange-100 dark:border-gray-700 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-xs">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{t('feature_1_title')}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t('feature_1_desc')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-orange-50/50 dark:bg-gray-800/60 border border-orange-100 dark:border-gray-700 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-xs">
                <Film size={20} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{t('feature_2_title')}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t('feature_2_desc')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-orange-50/50 dark:bg-gray-800/60 border border-orange-100 dark:border-gray-700 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-red-500 text-white flex items-center justify-center shadow-xs">
                <Search size={20} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{t('feature_3_title')}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t('feature_3_desc')}</p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Link 
              href={`/${locale}`}
              className="px-8 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-orange-500/25 text-sm"
            >
              {t('back_to_home')}
            </Link>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <footer className="text-center text-xs text-gray-400 dark:text-gray-500 py-4">
        © 2026 i8K Video Navigation (i8k.tv). All rights reserved.
      </footer>
    </div>
  );
}
