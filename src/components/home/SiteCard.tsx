'use client';
import { motion } from 'framer-motion';
import SiteLogo from '@/components/common/SiteLogo';

export interface Site {
  id: number;
  name: string;
  name_en?: string | null;
  nameEn?: string | null;
  url: string;
  logo?: string;
  logoUrl?: string;
  logo_url?: string;
  description: string;
  description_en?: string | null;
  descriptionEn?: string | null;
  rating: number;
  is_hot?: boolean;
  isHot?: boolean;
  is_recommended?: boolean;
  isRecommended?: boolean;
  tags?: string[] | string;
  tags_en?: string[] | string;
  tagsEn?: string[] | string;
  bg_gradient?: string;
  bgGradient?: string;
  categoryId?: number;
  category_id?: number;
}

export default function SiteCard({ site, locale }: { site: Site; locale: string }) {
  const isEn = locale === 'en';
  const name = isEn ? (site.name_en || site.nameEn || site.name) : site.name;
  const description = isEn ? (site.description_en || site.descriptionEn || site.description) : site.description;
  const gradient = site.bg_gradient || site.bgGradient || 'from-white to-gray-50 dark:from-gray-900 dark:to-gray-800';

  const isHot = Boolean(site.is_hot ?? site.isHot);
  const isRecommended = Boolean(site.is_recommended ?? site.isRecommended);
  const logoUrl = site.logo_url || site.logoUrl || site.logo || '';

  // Parse tags
  const parseTags = (rawTags: any): string[] => {
    if (!rawTags) return [];
    if (Array.isArray(rawTags)) return rawTags;
    if (typeof rawTags === 'string') {
      try {
        const parsed = JSON.parse(rawTags);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        return rawTags.split(',').map(s => s.trim()).filter(Boolean);
      }
    }
    return [];
  };

  const zhTags = parseTags(site.tags);
  const enTags = parseTags(site.tags_en || site.tagsEn);
  const displayTags = (isEn && enTags.length > 0) ? enTags : zhTags;

  const getHref = (rawUrl: string) => {
    try {
      const u = new URL(rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`);
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
      className={`group relative block p-5 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-xs hover:shadow-xl hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 bg-linear-to-br ${gradient} overflow-hidden flex flex-col h-full`}
    >
      {isHot && (
        <div className="absolute top-3 right-3 bg-linear-to-r from-red-500 to-rose-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs z-10 tracking-wider">
          HOT
        </div>
      )}
      {isRecommended && (
        <div className="absolute top-3 left-3 bg-linear-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs z-10">
          {isEn ? '⭐ Recommended' : '⭐ 推荐'}
        </div>
      )}

      <div className="flex items-start gap-4 mt-3">
        <div className="w-12 h-12 shrink-0 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200/80 dark:border-gray-700 shadow-xs">
          <SiteLogo
            url={site.url}
            logoUrl={logoUrl}
            name={name}
            size={48}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors truncate">
              {name}
            </h3>
            <div className="flex text-yellow-400 text-xs shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < (site.rating || 5) ? 'opacity-100' : 'opacity-20'}>★</span>
              ))}
            </div>
          </div>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="shrink-0 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all mt-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="flex flex-wrap gap-1.5">
          {displayTags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 text-[11px] font-medium border border-orange-200/60 dark:border-orange-800/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2.5 text-[11px] text-gray-400 dark:text-gray-500 truncate font-mono">
          {site.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </div>
      </div>
    </motion.a>
  );
}
