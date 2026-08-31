'use client';
import { useState, useEffect, useRef } from 'react';
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
  const heroInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 滚动超过 100px 时在顶部常驻导航栏中平滑显示紧凑搜索栏与移动端快捷搜索
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeroSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      heroInputRef.current?.focus();
    }, 280);
  };

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

  const handleInputChange = (value: string) => {
    setQuery(value);
    if (engine === 'site') {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <>
      {/* 1. 顶部常驻固定导航栏（固定高度 h-14 sm:h-16，绝不发生高度形变与抖动） */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/90 transition-colors">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 gap-2 sm:gap-4">
          
          {/* 左侧：Logo 与 站点名称 */}
          <div className="flex items-center gap-6 shrink-0">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
              <img
                src="/favicon.svg"
                alt="i8K"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-xs group-hover:scale-105 transition-transform"
              />
              <span className="text-base sm:text-lg font-bold bg-linear-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                {siteTitle}
              </span>
            </Link>

            {/* 桌面端导航链接 */}
            <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
              <Link
                href={`/${locale}`}
                className="text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors"
              >
                {tNav('home')}
              </Link>
              <a
                href="https://downsub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors"
              >
                {tNav('subtitle_download')}
              </a>
              <Link
                href={`/${locale}/about`}
                className="text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors"
              >
                {tNav('about')}
              </Link>
            </nav>
          </div>

          {/* 中间：桌面端滚动后平滑淡入的常驻紧凑搜索框 */}
          <div className={`hidden md:block flex-1 max-w-md transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative flex items-center rounded-full border border-gray-200 bg-gray-50/80 shadow-xs focus-within:border-orange-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-200 dark:border-gray-700 dark:bg-gray-900/80 dark:focus-within:border-orange-400 dark:focus-within:ring-orange-900/30">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder={tHome('search_placeholder')}
                  className="w-full bg-transparent px-4 py-1.5 text-xs text-gray-900 outline-none dark:text-white placeholder-gray-400"
                />
                {query && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="pr-2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                )}
                <button
                  type="submit"
                  className="mr-1 px-3 py-1 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity shrink-0"
                >
                  {tHome('search_btn')}
                </button>
              </div>
            </form>
          </div>

          {/* 移动端：滚动后出现的优雅快捷搜索按钮（点击平滑回顶并聚焦） */}
          <div className={`md:hidden flex-1 flex justify-end transition-all duration-300 ${scrolled ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <button
              type="button"
              onClick={scrollToHeroSearch}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-gray-800 border border-orange-200/80 dark:border-gray-700 text-xs text-orange-600 dark:text-orange-400 font-medium active:scale-95 transition-all shadow-2xs"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="truncate max-w-[90px]">{query || tHome('search_btn')}</span>
            </button>
          </div>

          {/* 右侧：功能按钮与设置项 */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium mr-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{tNav('tagline')}</span>
            </div>
            <Link
              href={`/${locale}/admin`}
              className="text-xs text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1"
              title={tNav('admin')}
            >
              <span>⚙️</span>
              <span className="hidden sm:inline">{tNav('admin')}</span>
            </Link>
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* 2. 首页 Hero 核心搜索区（自然随页面滚动，拥有大气的视觉重心） */}
      <section className="w-full mx-auto max-w-4xl px-4 sm:px-6 pt-8 pb-4 text-center">
        {/* 大标题与副标题 */}
        <div className="mb-6 space-y-2">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-linear-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
            {siteTitle}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {siteSubtitle}
          </p>
        </div>

        {/* 移动端快捷导航 */}
        <div className="lg:hidden flex items-center justify-center gap-4 mb-6 text-xs font-medium">
          <Link
            href={`/${locale}`}
            className="text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors"
          >
            {tNav('home')}
          </Link>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <a
            href="https://downsub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors"
          >
            {tNav('subtitle_download')}
          </a>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <Link
            href={`/${locale}/about`}
            className="text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors"
          >
            {tNav('about')}
          </Link>
        </div>

        {/* 主搜索框 */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative flex items-center rounded-full border border-gray-300/90 bg-white shadow-md transition-all focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-200/50 dark:border-gray-700 dark:bg-gray-900 dark:focus-within:border-orange-400 dark:focus-within:ring-orange-950/40">
              
              {/* 搜索引擎选择器 */}
              <div className="relative flex items-center border-r border-gray-200 dark:border-gray-700 pl-4 pr-2 shrink-0">
                <label htmlFor="search-engine" className="sr-only">
                  {tHome('search_engine_label')}
                </label>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <select
                  id="search-engine"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                  className="appearance-none bg-white dark:bg-gray-900 px-2 py-3.5 text-xs sm:text-sm font-medium text-gray-700 outline-none cursor-pointer dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                  title={tHome('select_search_engine')}
                >
                  <option value="site" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                    {tHome('search_engine_site')}
                  </option>
                  <option value="douban" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                    {tHome('search_engine_douban')}
                  </option>
                  <option value="imdb" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                    {tHome('search_engine_imdb')}
                  </option>
                </select>
                <svg className="w-3.5 h-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* 搜索输入框 */}
              <input
                ref={heroInputRef}
                type="text"
                value={query}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={tHome('search_placeholder')}
                className="flex-1 bg-transparent px-4 sm:px-6 py-3 sm:py-3.5 text-gray-900 outline-none dark:text-white placeholder-gray-400 text-xs sm:text-sm"
              />

              {/* 清空按钮 */}
              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-2 sm:px-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  ✕
                </button>
              )}

              {/* 搜索按钮 */}
              <button
                type="submit"
                className="mr-1.5 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white text-xs sm:text-sm font-semibold hover:opacity-90 shadow-xs transition-opacity shrink-0"
              >
                {tHome('search_btn')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
