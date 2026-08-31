'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Shield, Settings, FolderOpen, Globe, Plus, Edit2, Trash2, LogOut, Check, X, Loader2, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { LocaleToggle } from '@/components/layout/LocaleToggle';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import SiteLogo from '@/components/common/SiteLogo';

interface CategoryData {
  id: number;
  title: string;
  title_en?: string;
  titleEn?: string;
  emoji: string;
  sort_order: number;
}

interface SiteData {
  id: number;
  category_id: number;
  name: string;
  name_en?: string;
  description: string;
  description_en?: string;
  url: string;
  logo_url: string;
  tags: string;
  tags_en: string;
  rating: number;
  is_hot: boolean;
  is_recommended: boolean;
  bg_gradient: string;
  sort_order: number;
}

const BG_GRADIENT_PRESETS = [
  { key: "rose", value: "from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20" },
  { key: "orange", value: "from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20" },
  { key: "purple", value: "from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20" },
  { key: "green", value: "from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20" },
  { key: "cyan", value: "from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20" },
  { key: "indigo", value: "from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20" },
  { key: "amber", value: "from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20" },
  { key: "sky", value: "from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'settings' | 'categories' | 'sites'>('settings');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);
  
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [sites, setSites] = useState<SiteData[]>([]);
  
  const [settings, setSettings] = useState({
    site_title: '',
    site_title_en: '',
    site_subtitle: '',
    site_subtitle_en: '',
    footer_copyright: '',
    footer_copyright_en: ''
  });

  // Modal states
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSiteModal, setShowSiteModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Partial<CategoryData> | null>(null);
  const [editingSite, setEditingSite] = useState<Partial<SiteData> | null>(null);
  const [siteFilterCategoryId, setSiteFilterCategoryId] = useState<number | 'all'>('all');

  const router = useRouter();
  const t = useTranslations('admin');
  const locale = useLocale();
  const isEn = locale === 'en';

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [catsRes, sitesRes, setsRes] = await Promise.all([
        fetch('/api/admin/categories'),
        fetch('/api/admin/sites'),
        fetch('/api/admin/settings')
      ]);
      
      if (catsRes.ok) setCategories(await catsRes.json());
      if (sitesRes.ok) setSites(await sitesRes.json());
      if (setsRes.ok) setSettings(await setsRes.json());
      
    } catch (error) {
      showToast(t('load_error'), 'error');
    } finally {
      setLoading(false);
    }
  }, [t]);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (!res.ok) {
        router.push(`/${locale}/admin/login`);
        return;
      }
      fetchData();
    } catch (error) {
      router.push(`/${locale}/admin/login`);
    }
  }, [fetchData, locale, router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push(`/${locale}/admin/login`);
  };

  const saveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      if (res.ok) showToast(t('settings_save_success'), 'success');
      else showToast(t('save_failed'), 'error');
    } catch (error) {
      showToast(t('save_failed'), 'error');
    } finally {
      setSaving(false);
    }
  };

  const saveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const method = editingCategory?.id ? 'PUT' : 'POST';
      const res = await fetch('/api/admin/categories', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCategory)
      });
      if (res.ok) {
        showToast(t('category_save_success'), 'success');
        setShowCategoryModal(false);
        fetchData();
      } else {
        showToast(t('save_failed'), 'error');
      }
    } catch (error) {
      showToast(t('save_failed'), 'error');
    } finally {
      setSaving(false);
    }
  };

  const deleteCategory = async (id: number) => {
    if (!confirm(t('categories.delete_confirm'))) return;
    try {
      const res = await fetch(`/api/admin/categories?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast(t('category_delete_success'), 'success');
        fetchData();
      } else {
        showToast(t('delete_failed'), 'error');
      }
    } catch (error) {
      showToast(t('delete_failed'), 'error');
    }
  };

  const saveSite = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const method = editingSite?.id ? 'PUT' : 'POST';
      const res = await fetch('/api/admin/sites', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingSite)
      });
      if (res.ok) {
        showToast(t('site_save_success'), 'success');
        setShowSiteModal(false);
        fetchData();
      } else {
        showToast(t('save_failed'), 'error');
      }
    } catch (error) {
      showToast(t('save_failed'), 'error');
    } finally {
      setSaving(false);
    }
  };

  const deleteSite = async (id: number) => {
    if (!confirm(t('sites.delete_confirm'))) return;
    try {
      const res = await fetch(`/api/admin/sites?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast(t('site_delete_success'), 'success');
        fetchData();
      } else {
        showToast(t('delete_failed'), 'error');
      }
    } catch (error) {
      showToast(t('delete_failed'), 'error');
    }
  };

  const handleSiteTagsChange = (val: string, field: 'tags' | 'tags_en') => {
    try {
      const arr = val.split(',').map(s => s.trim()).filter(Boolean);
      setEditingSite(prev => prev ? { ...prev, [field]: JSON.stringify(arr) } : null);
    } catch {
      setEditingSite(prev => prev ? { ...prev, [field]: val } : null);
    }
  };

  const getTagsString = (tagsJson?: string) => {
    if (!tagsJson) return '';
    try {
      const arr = JSON.parse(tagsJson);
      return Array.isArray(arr) ? arr.join(', ') : tagsJson;
    } catch {
      return tagsJson;
    }
  };

  if (loading && !categories.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  const filteredSites = siteFilterCategoryId === 'all' 
    ? sites 
    : sites.filter(s => s.category_id === siteFilterCategoryId);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium ${
          toast.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {toast.type === 'success' ? <Check size={18} /> : <X size={18} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-xs">
              <Shield size={20} />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-red-600">
                {t('dashboard_title')}
              </h1>
              <p className="hidden sm:block text-[11px] text-gray-500 dark:text-gray-400">
                {t('dashboard_subtitle')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <LocaleToggle />
            <ThemeToggle />
            <Link 
              href={`/${locale}`}
              target="_blank"
              className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">{t('preview_site')}</span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">{t('logout')}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-60 flex-shrink-0">
          <nav className="space-y-1.5 bg-white dark:bg-gray-900 p-2 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs">
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'settings' 
                  ? 'bg-linear-to-r from-orange-500 to-red-600 text-white shadow-sm shadow-orange-500/20' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Settings size={18} />
              <span>{t('tabs.settings')}</span>
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'categories' 
                  ? 'bg-linear-to-r from-orange-500 to-red-600 text-white shadow-sm shadow-orange-500/20' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <FolderOpen size={18} />
              <span>{t('tabs.categories')}</span>
            </button>
            <button
              onClick={() => setActiveTab('sites')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'sites' 
                  ? 'bg-linear-to-r from-orange-500 to-red-600 text-white shadow-sm shadow-orange-500/20' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Globe size={18} />
              <span>{t('tabs.sites')}</span>
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xs border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <Settings className="text-orange-500" size={20} />
                <span>{t('settings.card_title')}</span>
              </h2>
              <form onSubmit={saveSettings} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      {t('settings.site_title')}
                    </label>
                    <input
                      type="text"
                      value={settings.site_title}
                      onChange={e => setSettings({...settings, site_title: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      {t('settings.site_title_en')}
                    </label>
                    <input
                      type="text"
                      value={settings.site_title_en}
                      onChange={e => setSettings({...settings, site_title_en: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      {t('settings.site_subtitle')}
                    </label>
                    <input
                      type="text"
                      value={settings.site_subtitle}
                      onChange={e => setSettings({...settings, site_subtitle: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      {t('settings.site_subtitle_en')}
                    </label>
                    <input
                      type="text"
                      value={settings.site_subtitle_en}
                      onChange={e => setSettings({...settings, site_subtitle_en: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      {t('settings.footer_copyright')}
                    </label>
                    <input
                      type="text"
                      value={settings.footer_copyright}
                      onChange={e => setSettings({...settings, footer_copyright: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      {t('settings.footer_copyright_en')}
                    </label>
                    <input
                      type="text"
                      value={settings.footer_copyright_en}
                      onChange={e => setSettings({...settings, footer_copyright_en: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2.5 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-xl text-sm font-semibold hover:opacity-95 transition-opacity flex items-center gap-2 shadow-sm shadow-orange-500/20"
                  >
                    {saving && <Loader2 size={16} className="animate-spin" />}
                    <span>{saving ? t('settings.saving') : t('settings.save_btn')}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Categories Tab */}
          {activeTab === 'categories' && (
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xs border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  <FolderOpen className="text-orange-500" size={20} />
                  <span>{t('categories.list_title')}</span>
                </h2>
                <button
                  onClick={() => {
                    setEditingCategory({ title: '', title_en: '', emoji: '🎬', sort_order: categories.length });
                    setShowCategoryModal(true);
                  }}
                  className="px-4 py-2 bg-linear-to-r from-orange-500 to-red-600 text-white text-xs font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm shadow-orange-500/20"
                >
                  <Plus size={16} />
                  <span>{t('categories.add_btn')}</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800 text-xs font-semibold uppercase text-gray-400">
                      <th className="py-3 px-4">{t('categories.icon_col')}</th>
                      <th className="py-3 px-4">{t('categories.name_col')}</th>
                      <th className="py-3 px-4">{t('categories.sort_col')}</th>
                      <th className="py-3 px-4 text-right">{t('categories.actions_col')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60">
                    {categories.map(cat => (
                      <tr key={cat.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                        <td className="py-3.5 px-4 text-2xl">{cat.emoji}</td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-gray-900 dark:text-white">{cat.title}</div>
                          <div className="text-xs text-gray-400">{cat.title_en || cat.titleEn || '-'}</div>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs text-gray-500">{cat.sort_order}</td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setEditingCategory(cat);
                                setShowCategoryModal(true);
                              }}
                              className="p-2 text-gray-500 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                              title={t('categories.edit_btn')}
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => deleteCategory(cat.id)}
                              className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                              title={t('categories.delete_btn')}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {categories.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-12 text-center text-gray-400 text-sm">
                          {t('categories.empty')}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Sites Tab */}
          {activeTab === 'sites' && (
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xs border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  <Globe className="text-orange-500" size={20} />
                  <span>{t('sites.list_title')}</span>
                  <span className="text-xs font-normal text-gray-400">({filteredSites.length})</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <select
                    value={siteFilterCategoryId}
                    onChange={(e) => setSiteFilterCategoryId(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-medium text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-orange-500 shadow-xs cursor-pointer"
                  >
                    <option value="all">{t('sites.all_categories')}</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.emoji} {isEn ? (cat.title_en || cat.titleEn || cat.title) : cat.title}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => {
                      setEditingSite({
                        category_id: typeof siteFilterCategoryId === 'number' ? siteFilterCategoryId : (categories[0]?.id || 1),
                        name: '',
                        name_en: '',
                        description: '',
                        description_en: '',
                        url: '',
                        logo_url: '',
                        tags: '[]',
                        tags_en: '[]',
                        rating: 5,
                        is_hot: false,
                        is_recommended: false,
                        bg_gradient: BG_GRADIENT_PRESETS[0].value,
                        sort_order: 0
                      });
                      setShowSiteModal(true);
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-linear-to-r from-orange-500 to-red-600 text-white text-xs font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shadow-sm shadow-orange-500/20"
                  >
                    <Plus size={16} />
                    <span>{t('sites.add_btn')}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredSites.map(site => (
                  <div key={site.id} className="border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex gap-4 hover:shadow-md transition-shadow bg-gray-50/40 dark:bg-gray-800/30">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shrink-0 flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-xs">
                      <SiteLogo
                        url={site.url}
                        logoUrl={site.logo_url}
                        name={site.name}
                        size={48}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="truncate">
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white truncate">{site.name}</h3>
                          <div className="text-xs text-gray-400 truncate">{site.name_en || '-'}</div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => {
                              setEditingSite(site);
                              setShowSiteModal(true);
                            }}
                            className="p-1.5 text-gray-500 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            title={t('sites.edit_btn')}
                          >
                            <Edit2 size={15} />
                          </button>
                          <button
                            onClick={() => deleteSite(site.id)}
                            className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            title={t('sites.delete_btn')}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">{site.description}</p>
                      <a href={site.url} target="_blank" rel="noreferrer" className="text-[11px] text-blue-500 hover:underline truncate block mt-1 font-mono">{site.url}</a>
                      <div className="flex items-center gap-2 mt-2">
                        {site.is_hot && <span className="px-2 py-0.5 text-[10px] font-bold bg-red-100 dark:bg-red-950/50 text-red-600 rounded-full">HOT</span>}
                        {site.is_recommended && <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-full">⭐</span>}
                        <div className="flex items-center text-yellow-400 text-xs">
                          <Star size={12} className="fill-current" />
                          <span className="ml-1 text-gray-600 dark:text-gray-400 text-[11px]">{site.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredSites.length === 0 && (
                  <div className="col-span-full py-12 text-center text-gray-400 text-sm">
                    {t('sites.empty')}
                  </div>
                )}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Category Modal */}
      {showCategoryModal && editingCategory && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-900 z-10">
              <h3 className="text-base font-bold">
                {editingCategory.id ? t('categories.modal_edit') : t('categories.modal_add')}
              </h3>
              <button onClick={() => setShowCategoryModal(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={saveCategory} className="p-6 space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  {t('categories.title_zh')}
                </label>
                <input
                  required
                  type="text"
                  value={editingCategory.title || ''}
                  onChange={e => setEditingCategory({...editingCategory, title: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  {t('categories.title_en')}
                </label>
                <input
                  type="text"
                  value={editingCategory.title_en || editingCategory.titleEn || ''}
                  onChange={e => setEditingCategory({...editingCategory, title_en: e.target.value, titleEn: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  {t('categories.emoji_label')}
                </label>
                <input
                  required
                  type="text"
                  value={editingCategory.emoji || '🎬'}
                  onChange={e => setEditingCategory({...editingCategory, emoji: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500 text-xl"
                  placeholder="🎬"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  {t('categories.sort_hint')}
                </label>
                <input
                  required
                  type="number"
                  value={editingCategory.sort_order ?? 0}
                  onChange={e => setEditingCategory({...editingCategory, sort_order: Number(e.target.value)})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="pt-4 flex justify-end gap-2 border-t border-gray-100 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => setShowCategoryModal(false)}
                  className="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {t('categories.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 bg-linear-to-r from-orange-500 to-red-600 text-white text-xs font-semibold rounded-xl hover:opacity-90 flex items-center gap-1.5 shadow-sm shadow-orange-500/20"
                >
                  {saving && <Loader2 size={14} className="animate-spin" />}
                  <span>{saving ? t('categories.saving') : t('categories.save')}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Site Modal */}
      {showSiteModal && editingSite && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-900 z-10">
              <h3 className="text-base font-bold">
                {editingSite.id ? t('sites.modal_edit') : t('sites.modal_add')}
              </h3>
              <button onClick={() => setShowSiteModal(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={saveSite} className="p-6 space-y-4 text-sm">
              
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  {t('sites.select_category')}
                </label>
                <select
                  required
                  value={editingSite.category_id}
                  onChange={e => setEditingSite({...editingSite, category_id: Number(e.target.value)})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                >
                  <option value="">{t('sites.select_category_placeholder')}</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.emoji} {isEn ? (cat.title_en || cat.titleEn || cat.title) : cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    {t('sites.name_zh')}
                  </label>
                  <input
                    required
                    type="text"
                    value={editingSite.name || ''}
                    onChange={e => setEditingSite({...editingSite, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    {t('sites.name_en')}
                  </label>
                  <input
                    type="text"
                    value={editingSite.name_en || ''}
                    onChange={e => setEditingSite({...editingSite, name_en: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    {t('sites.desc_zh')}
                  </label>
                  <textarea
                    rows={2}
                    value={editingSite.description || ''}
                    onChange={e => setEditingSite({...editingSite, description: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    {t('sites.desc_en')}
                  </label>
                  <textarea
                    rows={2}
                    value={editingSite.description_en || ''}
                    onChange={e => setEditingSite({...editingSite, description_en: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  {t('sites.url_label')}
                </label>
                <input
                  required
                  type="url"
                  value={editingSite.url || ''}
                  onChange={e => setEditingSite({...editingSite, url: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  {t('sites.logo_url_label')}
                </label>
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={editingSite.logo_url || ''}
                    onChange={e => setEditingSite({...editingSite, logo_url: e.target.value})}
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500 font-mono text-xs"
                    placeholder="https://domain.com/favicon.ico"
                  />
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex-shrink-0 bg-white dark:bg-gray-800">
                    <SiteLogo url={editingSite.url} logoUrl={editingSite.logo_url} name={editingSite.name || 'Site'} size={40} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    {t('sites.tags_zh')}
                  </label>
                  <input
                    type="text"
                    value={getTagsString(editingSite.tags)}
                    onChange={e => handleSiteTagsChange(e.target.value, 'tags')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder={t('sites.tags_zh_placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    {t('sites.tags_en')}
                  </label>
                  <input
                    type="text"
                    value={getTagsString(editingSite.tags_en)}
                    onChange={e => handleSiteTagsChange(e.target.value, 'tags_en')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder={t('sites.tags_en_placeholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    {t('sites.rating_label')}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="5"
                      step="0.5"
                      value={editingSite.rating ?? 5}
                      onChange={e => setEditingSite({...editingSite, rating: Number(e.target.value)})}
                      className="w-20 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={16} className={i <= (editingSite.rating || 0) ? "fill-current" : "text-gray-300 dark:text-gray-700"} />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    {t('sites.sort_order')}
                  </label>
                  <input
                    required
                    type="number"
                    value={editingSite.sort_order ?? 0}
                    onChange={e => setEditingSite({...editingSite, sort_order: Number(e.target.value)})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="flex gap-6 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={editingSite.is_hot || false}
                    onChange={e => setEditingSite({...editingSite, is_hot: e.target.checked})}
                    className="rounded text-orange-500 focus:ring-orange-500 w-4 h-4"
                  />
                  <span className="text-xs font-bold text-red-500">{t('sites.is_hot')}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={editingSite.is_recommended || false}
                    onChange={e => setEditingSite({...editingSite, is_recommended: e.target.checked})}
                    className="rounded text-orange-500 focus:ring-orange-500 w-4 h-4"
                  />
                  <span className="text-xs font-bold text-emerald-500">{t('sites.is_recommended')}</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
                  {t('sites.bg_gradient')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                  {BG_GRADIENT_PRESETS.map((preset) => (
                    <button
                      key={preset.key}
                      type="button"
                      onClick={() => setEditingSite({...editingSite, bg_gradient: preset.value})}
                      className={`px-2 py-1.5 text-xs rounded-lg border transition-all ${
                        editingSite.bg_gradient === preset.value 
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-600 font-bold' 
                          : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {t(`presets.${preset.key}`)}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={editingSite.bg_gradient || ''}
                  onChange={e => setEditingSite({...editingSite, bg_gradient: e.target.value})}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500 font-mono"
                  placeholder={t('sites.custom_gradient_placeholder')}
                />
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-2 sticky bottom-0 bg-white dark:bg-gray-900 py-2">
                <button
                  type="button"
                  onClick={() => setShowSiteModal(false)}
                  className="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {t('sites.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 bg-linear-to-r from-orange-500 to-red-600 text-white text-xs font-semibold rounded-xl hover:opacity-90 flex items-center gap-1.5 shadow-sm shadow-orange-500/20"
                >
                  {saving && <Loader2 size={14} className="animate-spin" />}
                  <span>{saving ? t('sites.saving') : t('sites.save')}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
