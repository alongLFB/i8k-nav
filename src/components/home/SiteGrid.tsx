'use client';
import { useMemo } from 'react';
import SiteCard, { Site } from './SiteCard';
import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function SiteGrid({ sites, locale, searchQuery }: { sites: Site[], locale: string, searchQuery: string }) {
  const tHome = useTranslations('home');
  const isEn = locale === 'en';
  
  const filteredSites = useMemo(() => {
    if (!searchQuery.trim()) return sites;
    const lowerQuery = searchQuery.toLowerCase();
    return sites.filter(site => {
      const name = (site.name || '').toLowerCase();
      const nameEn = (site.name_en || site.nameEn || '').toLowerCase();
      const desc = (site.description || '').toLowerCase();
      const descEn = (site.description_en || site.descriptionEn || '').toLowerCase();
      const url = (site.url || '').toLowerCase();

      let tagsStr = '';
      if (Array.isArray(site.tags)) tagsStr += site.tags.join(' ');
      else if (typeof site.tags === 'string') tagsStr += site.tags;
      if (Array.isArray(site.tags_en)) tagsStr += ' ' + site.tags_en.join(' ');
      else if (typeof site.tags_en === 'string') tagsStr += ' ' + site.tags_en;
      else if (typeof site.tagsEn === 'string') tagsStr += ' ' + site.tagsEn;

      return name.includes(lowerQuery) || 
             nameEn.includes(lowerQuery) ||
             desc.includes(lowerQuery) ||
             descEn.includes(lowerQuery) ||
             url.includes(lowerQuery) ||
             tagsStr.toLowerCase().includes(lowerQuery);
    });
  }, [sites, searchQuery]);

  return (
    <div className="flex-1 w-full max-w-full">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span>{searchQuery ? '🔍' : '✨'}</span>
          <span>{searchQuery ? tHome('search_results') : tHome('recommended_sites')}</span>
        </h2>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 shadow-xs">
          {isEn ? (
            `${tHome('site_count_prefix')} ${filteredSites.length} ${tHome('site_count_suffix')}`
          ) : (
            `${tHome('site_count_prefix')} ${filteredSites.length} ${tHome('site_count_suffix')}`
          )}
        </span>
      </div>

      {filteredSites.length === 0 ? (
        <div className="py-20 text-center text-gray-500 bg-white dark:bg-gray-900 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
          <div className="text-4xl mb-3">🎬</div>
          <p className="text-base font-medium">{tHome('no_matching_sites')}</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
