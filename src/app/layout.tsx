import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i8K影视导航 - 最全免费在线影视网站导航 | i8k.tv",
  description: "i8K影视导航汇聚全网最优质的免费影视网站，包括电影、电视剧、动漫、纪录片、综艺等各类影视资源导航。",
  keywords: "i8K影视,影视导航,免费电影,在线观看,影视网站",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
