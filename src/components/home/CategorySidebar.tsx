'use client';
import { motion } from 'framer-motion';

export interface Category {
  id: number;
  title: string;
  title_en?: string;
  emoji: string;
}

interface CategorySidebarProps {
  categories: Category[];
  selectedId: number | null;
  onSelect: (id: number | null) => void;
  locale: string;
}

export default function CategorySidebar({ categories, selectedId, onSelect, locale }: CategorySidebarProps) {
  return (
    <>
      {/* Mobile horizontal scroll */}
      <div className="lg:hidden w-full overflow-x-auto py-4 px-4 scrollbar-hide flex gap-2 border-b border-gray-100 dark:border-gray-800">
        <button
          onClick={() => onSelect(null)}
          className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedId === null 
              ? 'bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 border-transparent' 
              : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          <span>🎬</span>
          <span>全部</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedId === cat.id 
                ? 'bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 border-transparent' 
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{locale === 'en' ? (cat.title_en || cat.title) : cat.title}</span>
          </button>
        ))}
      </div>

      {/* Desktop vertical sidebar */}
      <aside className="hidden lg:block w-48 shrink-0 relative">
        <div className="sticky top-32 flex flex-col gap-2">
          <button
            onClick={() => onSelect(null)}
            className={`flex items-center gap-3 w-full px-5 py-3 rounded-full text-sm font-medium transition-all ${
              selectedId === null 
                ? 'bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 border-transparent scale-105' 
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <span className="text-xl">🎬</span>
            <span>全部</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`flex items-center gap-3 w-full px-5 py-3 rounded-full text-sm font-medium transition-all ${
                selectedId === cat.id 
                  ? 'bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 border-transparent scale-105' 
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <span className="text-xl">{cat.emoji}</span>
              <span>{locale === 'en' ? (cat.title_en || cat.title) : cat.title}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
