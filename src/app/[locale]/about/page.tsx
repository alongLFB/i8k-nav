import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="p-8 text-center bg-gradient-to-br from-[var(--color-i8k-gradient-start)] to-[var(--color-i8k-gradient-end)] text-white">
          <h1 className="text-4xl font-black tracking-tight mb-2">i8K</h1>
          <p className="text-white/80 font-medium">影视导航</p>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
            i8K影视导航汇聚全网最优质的免费影视网站，包括电影、电视剧、动漫、纪录片、综艺等各类影视资源导航。我们致力于为您提供最便捷、最全面的观影体验。
          </p>
          <div className="flex justify-center pt-4">
            <Link 
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-[var(--color-i8k-orange)] to-[var(--color-i8k-red)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-[var(--color-i8k-orange)]/20"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
