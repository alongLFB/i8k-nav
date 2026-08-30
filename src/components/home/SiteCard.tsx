'use client';
import { motion } from 'framer-motion';

export interface Site {
  id: number;
  name: string;
  name_en?: string;
  url: string;
  logo: string;
  description: string;
  description_en?: string;
  rating: number;
  is_hot: boolean;
  is_recommended: boolean;
  tags: string[];
  bg_gradient?: string;
  categoryId: number;
}

export default function SiteCard({ site, locale }: { site: Site, locale: string }) {
  const name = locale === 'en' ? (site.name_en || site.name) : site.name;
  const description = locale === 'en' ? (site.description_en || site.description) : site.description;
  const gradient = site.bg_gradient || 'from-white to-gray-50 dark:from-gray-900 dark:to-gray-800';

  const getHref = (rawUrl: string) => {
    try {
      const u = new URL(rawUrl);
      u.searchParams.set('ref', 'i8k.alonglfb.com');
      return u.toString();
    } catch {
      return rawUrl.includes('?') ? `${rawUrl}&ref=i8k.alonglfb.com` : `${rawUrl}?ref=i8k.alonglfb.com`;
    }
  };

  return (
    <motion.a
      href={getHref(site.url)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`group relative block p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 bg-linear-to-br ${gradient} overflow-hidden flex flex-col h-full`}
    >
      {site.is_hot && (
        <div className="absolute top-3 right-3 bg-linear-to-r from-red-500 to-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
          HOT
        </div>
      )}
      {site.is_recommended && (
        <div className="absolute top-3 left-3 bg-linear-to-r from-emerald-400 to-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
          ⭐推荐
        </div>
      )}

      <div className="flex items-start gap-4 mt-4">
        <div className="w-12 h-12 shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700">
          {site.logo ? (
            <img src={site.logo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xl font-bold text-gray-400">{name.charAt(0)}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
              {name}
            </h3>
            <div className="flex text-yellow-400 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < site.rating ? 'opacity-100' : 'opacity-20'}>⭐</span>
              ))}
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="shrink-0 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all mt-1">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="flex flex-wrap gap-2">
          {site.tags?.map((tag, i) => (
            <span key={i} className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium border border-blue-100 dark:border-blue-800">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 text-xs text-gray-400 dark:text-gray-500 truncate font-mono">
          {site.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </div>
      </div>
    </motion.a>
  );
}
