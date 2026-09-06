import type { Metadata } from 'next';
import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_SC({
  variable: '--font-noto-sans-sc',
  subsets: ['latin'],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || (process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://kids-english-roadmap.victang.chatgpt.site');
const shareImage = `${siteOrigin}${basePath}/og.png`;

export const metadata: Metadata = {
  title: '英语成长地图｜小学六年系统学习方案',
  description: '从一年级到六年级，围绕自然听说读写设计的家庭英语课程、教材资源、KET/PET路线和辅导班选择指南。',
  metadataBase: new URL(siteOrigin),
  openGraph: {
    title: '英语成长地图｜小学六年系统学习方案',
    description: '一年级到六年级：听说读写完整课程、教材资源、阶段测评和辅导班选择指南。',
    images: [{ url: shareImage, width: 1738, height: 909, alt: '英语成长地图：一年级到六年级听说读写完整方案' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '英语成长地图｜小学六年系统学习方案',
    description: '一年级到六年级：听说读写完整课程、教材资源、阶段测评和辅导班选择指南。',
    images: [shareImage],
  },
  icons: {
    icon: `${basePath}/favicon-new.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
