'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Shield, Settings, FolderOpen, Globe, Search, Plus, Edit2, Trash2, LogOut, Check, X, Loader2, Star } from 'lucide-react';
import Link from 'next/link';

interface CategoryData {
  id: number;
  title: string;
  title_en?: string;
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
  { name: "玫瑰粉", value: "from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20" },
  { name: "橙红", value: "from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20" },
  { name: "紫粉", value: "from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20" },
  { name: "翠绿", value: "from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20" },
  { name: "天蓝", value: "from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20" },
  { name: "靛蓝", value: "from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20" },
  { name: "琥珀", value: "from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20" },
  { name: "天空", value: "from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20" },
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

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
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
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      // Mocked fetching logic. Adjust endpoints as necessary.
      const [catsRes, sitesRes, setsRes] = await Promise.all([
        fetch('/api/admin/categories'),
        fetch('/api/admin/sites'),
        fetch('/api/admin/settings')
      ]);
      
      if (catsRes.ok) setCategories(await catsRes.json());
      if (sitesRes.ok) setSites(await sitesRes.json());
      if (setsRes.ok) setSettings(await setsRes.json());
      
    } catch (error) {
      showToast('加载数据失败', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

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
      if (res.ok) showToast('设置已保存', 'success');
      else showToast('保存失败', 'error');
    } catch (error) {
      showToast('保存失败', 'error');
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
        showToast('分类已保存', 'success');
        setShowCategoryModal(false);
        fetchData();
      } else {
        showToast('保存失败', 'error');
      }
    } catch (error) {
      showToast('保存失败', 'error');
    } finally {
      setSaving(false);
    }
  };

  const deleteCategory = async (id: number) => {
    if (!confirm('确定要删除此分类吗？关联的网站也会受影响。')) return;
    try {
      const res = await fetch(`/api/admin/categories?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast('分类已删除', 'success');
        fetchData();
      } else {
        showToast('删除失败', 'error');
      }
    } catch (error) {
      showToast('删除失败', 'error');
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
        showToast('网站已保存', 'success');
        setShowSiteModal(false);
        fetchData();
      } else {
        showToast('保存失败', 'error');
      }
    } catch (error) {
      showToast('保存失败', 'error');
    } finally {
      setSaving(false);
    }
  };

  const deleteSite = async (id: number) => {
    if (!confirm('确定要删除此网站吗？')) return;
    try {
      const res = await fetch(`/api/admin/sites?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast('网站已删除', 'success');
        fetchData();
      } else {
        showToast('删除失败', 'error');
      }
    } catch (error) {
      showToast('删除失败', 'error');
    }
  };

  const handleSiteTagsChange = (val: string, field: 'tags' | 'tags_en') => {
    // Attempt to parse/format tags as JSON array string
    try {
      const arr = val.split(',').map(s => s.trim()).filter(Boolean);
      setEditingSite(prev => prev ? { ...prev, [field]: JSON.stringify(arr) } : null);
    } catch (e) {
      setEditingSite(prev => prev ? { ...prev, [field]: val } : null);
    }
  };

  const getTagsString = (tagsJson?: string) => {
    if (!tagsJson) return '';
    try {
      const arr = JSON.parse(tagsJson);
      return Array.isArray(arr) ? arr.join(', ') : tagsJson;
    } catch (e) {
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
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
          toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {toast.type === 'success' ? <Check size={20} /> : <X size={20} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white">
              <Shield size={20} />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
              i8K影视导航 · 后台管理
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href={`/${locale}`}
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 flex items-center gap-2 transition-colors"
            >
              <Globe size={18} />
              预览站点
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex items-center gap-2 transition-colors"
            >
              <LogOut size={18} />
              退出登录
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'settings' 
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Settings size={20} />
              全站设置
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'categories' 
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <FolderOpen size={20} />
              分类管理
            </button>
            <button
              onClick={() => setActiveTab('sites')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'sites' 
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Globe size={20} />
              网站管理
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Settings className="text-orange-500" />
                全站设置
              </h2>
              <form onSubmit={saveSettings} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">站点标题 (中)</label>
                    <input
                      type="text"
                      value={settings.site_title}
                      onChange={e => setSettings({...settings, site_title: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Site Title (En)</label>
                    <input
                      type="text"
                      value={settings.site_title_en}
                      onChange={e => setSettings({...settings, site_title_en: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">副标题 (中)</label>
                    <input
                      type="text"
                      value={settings.site_subtitle}
                      onChange={e => setSettings({...settings, site_subtitle: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subtitle (En)</label>
                    <input
                      type="text"
                      value={settings.site_subtitle_en}
                      onChange={e => setSettings({...settings, site_subtitle_en: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">页脚版权 (中)</label>
                    <input
                      type="text"
                      value={settings.footer_copyright}
                      onChange={e => setSettings({...settings, footer_copyright: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Footer Copyright (En)</label>
                    <input
                      type="text"
                      value={settings.footer_copyright_en}
                      onChange={e => setSettings({...settings, footer_copyright_en: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-colors flex items-center gap-2"
                  >
                    {saving && <Loader2 size={18} className="animate-spin" />}
                    保存设置
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Categories Tab */}
          {activeTab === 'categories' && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FolderOpen className="text-orange-500" />
                  分类管理
                </h2>
                <button
                  onClick={() => {
                    setEditingCategory({ title: '', title_en: '', emoji: '', sort_order: 0 });
                    setShowCategoryModal(true);
                  }}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  <Plus size={18} />
                  添加分类
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="py-3 px-4 font-medium">图标</th>
                      <th className="py-3 px-4 font-medium">名称 (中/英)</th>
                      <th className="py-3 px-4 font-medium">排序</th>
                      <th className="py-3 px-4 font-medium text-right">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map(cat => (
                      <tr key={cat.id} className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td className="py-3 px-4 text-2xl">{cat.emoji}</td>
                        <td className="py-3 px-4">
                          <div className="font-medium">{cat.title}</div>
                          <div className="text-sm text-gray-500">{cat.title_en}</div>
                        </td>
                        <td className="py-3 px-4">{cat.sort_order}</td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setEditingCategory(cat);
                                setShowCategoryModal(true);
                              }}
                              className="p-2 text-gray-500 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => deleteCategory(cat.id)}
                              className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {categories.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-gray-500">暂无分类</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Sites Tab */}
          {activeTab === 'sites' && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Globe className="text-orange-500" />
                  网站管理
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <select
                    value={siteFilterCategoryId}
                    onChange={(e) => setSiteFilterCategoryId(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="all">所有分类</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.emoji} {cat.title}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => {
                      setEditingSite({
                        category_id: categories[0]?.id || 0,
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
                    className="w-full sm:w-auto px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={18} />
                    添加网站
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredSites.map(site => (
                  <div key={site.id} className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                      {site.logo_url ? (
                        <img
                          src={site.logo_url}
                          alt={site.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      ) : (
                        <span className="text-xl font-bold text-gray-400">{site.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="truncate">
                          <h3 className="font-bold truncate">{site.name}</h3>
                          <div className="text-sm text-gray-500 truncate">{site.name_en}</div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => {
                              setEditingSite(site);
                              setShowSiteModal(true);
                            }}
                            className="p-1.5 text-gray-500 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => deleteSite(site.id)}
                            className="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">{site.description}</p>
                      <a href={site.url} target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline truncate block mt-1">{site.url}</a>
                      <div className="flex items-center gap-2 mt-2">
                        {site.is_hot && <span className="px-2 py-0.5 text-xs bg-red-100 text-red-600 rounded-full">HOT</span>}
                        {site.is_recommended && <span className="px-2 py-0.5 text-xs bg-orange-100 text-orange-600 rounded-full">推荐</span>}
                        <div className="flex items-center text-yellow-400">
                          <Star size={14} className="fill-current" />
                          <span className="text-xs ml-1 text-gray-600">{site.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredSites.length === 0 && (
                  <div className="col-span-full py-12 text-center text-gray-500">
                    此分类下暂无网站
                  </div>
                )}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Category Modal */}
      {showCategoryModal && editingCategory && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <h3 className="text-lg font-bold">{editingCategory.id ? '编辑分类' : '添加分类'}</h3>
              <button onClick={() => setShowCategoryModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={saveCategory} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">名称 (中)</label>
                <input required type="text" value={editingCategory.title} onChange={e => setEditingCategory({...editingCategory, title: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">名称 (英)</label>
                <input type="text" value={editingCategory.title_en || ''} onChange={e => setEditingCategory({...editingCategory, title_en: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Emoji 图标</label>
                <input required type="text" value={editingCategory.emoji} onChange={e => setEditingCategory({...editingCategory, emoji: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500 text-2xl" placeholder="🎬" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">排序 (数字越小越靠前)</label>
                <input required type="number" value={editingCategory.sort_order} onChange={e => setEditingCategory({...editingCategory, sort_order: Number(e.target.value)})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setShowCategoryModal(false)} className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">取消</button>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center gap-2">
                  {saving && <Loader2 size={16} className="animate-spin" />}保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Site Modal */}
      {showSiteModal && editingSite && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-900 z-10">
              <h3 className="text-lg font-bold">{editingSite.id ? '编辑网站' : '添加网站'}</h3>
              <button onClick={() => setShowSiteModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={saveSite} className="p-6 space-y-5">
              
              <div>
                <label className="block text-sm font-medium mb-1">所属分类</label>
                <select required value={editingSite.category_id} onChange={e => setEditingSite({...editingSite, category_id: Number(e.target.value)})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">请选择分类</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.emoji} {cat.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">名称 (中)</label>
                  <input required type="text" value={editingSite.name} onChange={e => setEditingSite({...editingSite, name: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">名称 (英)</label>
                  <input type="text" value={editingSite.name_en || ''} onChange={e => setEditingSite({...editingSite, name_en: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">描述 (中)</label>
                  <textarea rows={3} value={editingSite.description} onChange={e => setEditingSite({...editingSite, description: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500 resize-none"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">描述 (英)</label>
                  <textarea rows={3} value={editingSite.description_en || ''} onChange={e => setEditingSite({...editingSite, description_en: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500 resize-none"></textarea>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">链接 URL</label>
                <input required type="url" value={editingSite.url} onChange={e => setEditingSite({...editingSite, url: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Logo URL</label>
                <div className="flex gap-3">
                  <input required type="text" value={editingSite.logo_url} onChange={e => setEditingSite({...editingSite, logo_url: e.target.value})} className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
                  {editingSite.logo_url && (
                    <img src={editingSite.logo_url} alt="Logo preview" className="w-10 h-10 rounded bg-gray-100 object-cover" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">标签 (中) - 逗号分隔</label>
                  <input type="text" value={getTagsString(editingSite.tags)} onChange={e => handleSiteTagsChange(e.target.value, 'tags')} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" placeholder="电影, 电视剧" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">标签 (英) - 逗号分隔</label>
                  <input type="text" value={getTagsString(editingSite.tags_en)} onChange={e => handleSiteTagsChange(e.target.value, 'tags_en')} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" placeholder="Movie, TV Series" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">评分 (0-5)</label>
                  <div className="flex items-center gap-2">
                    <input type="number" min="0" max="5" step="0.1" value={editingSite.rating} onChange={e => setEditingSite({...editingSite, rating: Number(e.target.value)})} className="w-24 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={16} className={i <= (editingSite.rating || 0) ? "fill-current" : "text-gray-300"} />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">排序 (越小越前)</label>
                  <input required type="number" value={editingSite.sort_order} onChange={e => setEditingSite({...editingSite, sort_order: Number(e.target.value)})} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={editingSite.is_hot} onChange={e => setEditingSite({...editingSite, is_hot: e.target.checked})} className="rounded text-orange-500 focus:ring-orange-500 w-4 h-4" />
                  <span className="text-sm font-medium">HOT (热门)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={editingSite.is_recommended} onChange={e => setEditingSite({...editingSite, is_recommended: e.target.checked})} className="rounded text-orange-500 focus:ring-orange-500 w-4 h-4" />
                  <span className="text-sm font-medium">推荐</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">背景渐变色</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                  {BG_GRADIENT_PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setEditingSite({...editingSite, bg_gradient: preset.value})}
                      className={`px-2 py-1 text-xs rounded border transition-colors ${
                        editingSite.bg_gradient === preset.value 
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-600' 
                          : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
                <input type="text" value={editingSite.bg_gradient} onChange={e => setEditingSite({...editingSite, bg_gradient: e.target.value})} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-orange-500 font-mono" placeholder="自定义 tailwind class..." />
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-3 sticky bottom-0 bg-white dark:bg-gray-900 py-2">
                <button type="button" onClick={() => setShowSiteModal(false)} className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">取消</button>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center gap-2">
                  {saving && <Loader2 size={16} className="animate-spin" />}保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
