'use client';
import { useState, useMemo } from 'react';
import Header from './Header';
import CategorySidebar, { Category } from './CategorySidebar';
import SiteGrid from './SiteGrid';
import { Site } from './SiteCard';
import { useLocale } from 'next-intl';

interface HomeClientProps {
  categories: Category[];
  sites: Site[];
  settings?: Record<string, string>;
  locale: string;
}

export default function HomeClient({ categories, sites, settings, locale }: HomeClientProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const isEn = locale === 'en';

  const displayedSites = useMemo(() => {
    let result = sites;
    if (selectedCategoryId !== null) {
      result = result.filter(s => (s.categoryId ?? (s as any).category_id) === selectedCategoryId);
    }
    return result;
  }, [sites, selectedCategoryId]);

  const copyright = (isEn ? settings?.footer_copyright_en : settings?.footer_copyright) || '© 2026 i8K影视导航 (i8k.tv). All rights reserved.';

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900 flex flex-col">
      <Header onSearch={setSearchQuery} settings={settings} />
      
      <main className="flex-1 w-full mx-auto max-w-7xl px-6 py-8 relative">
        {/* Mobile category sidebar */}
        <div className="lg:hidden mb-6 -mx-6 px-6">
          <CategorySidebar 
            categories={categories} 
            selectedId={selectedCategoryId} 
            onSelect={setSelectedCategoryId} 
            locale={locale} 
          />
        </div>

        <div className="flex gap-8 items-start relative">
          <div className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-28">
              <CategorySidebar 
                categories={categories} 
                selectedId={selectedCategoryId} 
                onSelect={setSelectedCategoryId} 
                locale={locale} 
              />
            </div>
          </div>
          <SiteGrid 
            sites={displayedSites} 
            searchQuery={searchQuery} 
            locale={locale} 
          />
        </div>
      </main>

      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>{copyright}</p>
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">本站为影视导航聚合网站，仅提供网站索引链接，不存储任何视频资源。</p>
      </footer>
    </div>
  );
}
