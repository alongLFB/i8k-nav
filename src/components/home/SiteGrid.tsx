'use client';
import { useMemo } from 'react';
import SiteCard, { Site } from './SiteCard';
import { AnimatePresence } from 'framer-motion';

export default function SiteGrid({ sites, locale, searchQuery }: { sites: Site[], locale: string, searchQuery: string }) {
  
  const filteredSites = useMemo(() => {
    if (!searchQuery.trim()) return sites;
    const lowerQuery = searchQuery.toLowerCase();
    return sites.filter(site => {
      const name = locale === 'en' ? (site.name_en || site.name) : site.name;
      const desc = locale === 'en' ? (site.description_en || site.description) : site.description;
      return name.toLowerCase().includes(lowerQuery) || 
             desc.toLowerCase().includes(lowerQuery) ||
             site.url.toLowerCase().includes(lowerQuery) ||
             site.tags?.some(t => t.toLowerCase().includes(lowerQuery));
    });
  }, [sites, searchQuery, locale]);

  return (
    <div className="flex-1 w-full max-w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {searchQuery ? '搜索结果' : '推荐站点'}
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
          共收录 {filteredSites.length} 个优质影视网站
        </span>
      </div>

      {filteredSites.length === 0 ? (
        <div className="py-20 text-center text-gray-500">
          <p className="text-lg">没有找到匹配的网站</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSites.map(site => (
              <SiteCard key={site.id} site={site} locale={locale} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
