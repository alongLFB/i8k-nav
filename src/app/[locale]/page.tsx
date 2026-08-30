import { Metadata } from 'next';
import HomeClient from '@/components/home/HomeClient';
import { getNavData } from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  return {
    title: isEn 
      ? 'i8K Video Navigation - Free Online Movie & TV Stream Directory | i8k.tv'
      : 'i8K影视导航 - 最全免费在线影视网站导航 | i8k.tv',
    description: isEn
      ? 'i8K Video Navigation aggregates high-quality free movie, TV show, anime, documentary, and subtitle websites.'
      : 'i8K影视导航(i8k.tv)汇聚全网最优质的免费影视网站，包括电影、电视剧、动漫、纪录片、综艺等各类影视资源导航。免费在线观看，每日更新。',
    keywords: isEn
      ? 'i8K video, streaming directory, free movies, watch online, anime sites'
      : 'i8K影视,影视导航,免费电影,在线观看,影视网站,i8k.tv,电影网站,电视剧网站,动漫网站',
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { categories, sites, settings } = await getNavData();

  return (
    <HomeClient 
      categories={categories} 
      sites={sites} 
      settings={settings}
      locale={locale} 
    />
  );
}
