'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { LocaleToggle } from '@/components/layout/LocaleToggle';

interface HeaderProps {
  onSearch: (query: string) => void;
  settings?: Record<string, string>;
}

export default function Header({ onSearch, settings }: HeaderProps) {
  const tHome = useTranslations('home');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const isEn = locale === 'en';

  const siteTitle = (isEn ? settings?.site_title_en : settings?.site_title) || (isEn ? 'i8K Video Navigation' : 'i8K影视导航');
  const siteSubtitle = (isEn ? settings?.site_subtitle_en : settings?.site_subtitle) || (isEn ? 'i8k.tv - The Most Comprehensive Free HD Video Site Navigation' : 'i8k.tv - 最全免费高清在线影视网站导航');

  const [query, setQuery] = useState('');
  const [engine, setEngine] = useState('site');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (engine === 'site') {
      onSearch(query);
    } else if (engine === 'douban') {
      window.open(`https://search.douban.com/movie/subject_search?search_text=${encodeURIComponent(query)}`, '_blank');
    } else if (engine === 'imdb') {
      window.open(`https://www.imdb.com/find?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 sticky top-0 z-50 transition-all duration-300">
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
        
        {/* Top bar with toggles */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 dark:border-gray-800/60 text-xs">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-gray-500 dark:text-gray-400">i8k.tv 聚合导航</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/${locale}/admin`}
              className="text-xs text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 px-2 py-1 rounded transition-colors"
            >
              ⚙️ {tNav('admin')}
            </Link>
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center gap-3">
          <div className="text-center">
            <h1 className="text-2xl font-bold bg-linear-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent flex items-center justify-center">
              <Link href={`/${locale}`} className="flex items-center">
                <span className="text-2xl mr-2">🎬</span>
                {siteTitle}
              </Link>
            </h1>
          </div>
          <nav className="transition-opacity duration-300 opacity-100">
            <ul className="flex items-center gap-3">
              <li>
                <Link href={`/${locale}`} className="text-xs font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors whitespace-nowrap">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <a href="https://downsub.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors whitespace-nowrap">
                  {tNav('subtitle_download')}
                </a>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-xs font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors whitespace-nowrap">
                  {tNav('about')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center transition-all duration-300 flex-col gap-4">
          <div className="transition-all duration-300 text-center">
            <h1 className={`font-bold bg-linear-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent flex items-center justify-center transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-4xl'}`}>
              <Link href={`/${locale}`} className="flex items-center">
                <span className={`${scrolled ? 'text-2xl' : 'text-3xl'} mr-2`}>🎬</span>
                {siteTitle}
              </Link>
            </h1>
            {!scrolled && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300">
                {siteSubtitle}
              </p>
            )}
          </div>

          <nav className={`transition-opacity duration-300 ${scrolled ? 'hidden' : 'block'}`}>
            <ul className="flex items-center gap-6">
              <li>
                <Link href={`/${locale}`} className="text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors whitespace-nowrap">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <a href="https://downsub.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors whitespace-nowrap">
                  {tNav('subtitle_download')}
                </a>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors whitespace-nowrap">
                  {tNav('about')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search bar */}
          <div className="w-full max-w-2xl">
            <form onSubmit={handleSubmit} className="w-full max-w-3xl">
              <div className="relative flex items-center rounded-full border border-gray-300 bg-white shadow-sm transition-all focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 dark:border-gray-700 dark:bg-gray-800 dark:focus-within:border-orange-400 dark:focus-within:ring-orange-800/40">
                <div className="relative flex items-center border-r border-gray-200 dark:border-gray-700 pl-4 pr-2">
                  <label htmlFor="search-engine" className="sr-only">搜索引擎</label>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <select
                    id="search-engine"
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                    className="appearance-none bg-transparent px-2 py-3 text-sm font-medium text-gray-700 outline-none cursor-pointer dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                    title="选择搜索类型"
                  >
                    <option value="site">{tHome('search_engine_site')}</option>
                    <option value="douban">{tHome('search_engine_douban')}</option>
                    <option value="imdb">{tHome('search_engine_imdb')}</option>
                  </select>
                  <svg className="w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (engine === 'site') {
                      onSearch(e.target.value);
                    }
                  }}
                  placeholder={tHome('search_placeholder')}
                  className="flex-1 bg-transparent px-6 py-3 text-gray-900 outline-none dark:text-white placeholder-gray-400 text-sm"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      onSearch('');
                    }}
                    className="pr-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                )}
                <button
                  type="submit"
                  className="mr-1.5 px-5 py-2 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  搜索
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </header>
  );
}
