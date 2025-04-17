import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEN AI KOREA | 대한민국 대표 생성형 AI 커뮤니티",
  description: "온라인, 오프라인 AI 교육과 맞춤형 AI 교육 및 개발 의뢰를 제공하는 대한민국 대표 생성형 AI 커뮤니티",
  keywords: ["AI 교육", "인공지능", "생성형 AI", "AI 개발", "AI 커뮤니티"],
  authors: [{ name: "GEN AI KOREA" }],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ai-c.kr",
    title: "GEN AI KOREA | 대한민국 대표 생성형 AI 커뮤니티",
    description: "온라인, 오프라인 AI 교육과 맞춤형 AI 교육 및 개발 의뢰를 제공하는 대한민국 대표 생성형 AI 커뮤니티",
    siteName: "GEN AI KOREA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI 전문가와 함께하는 교육 프로그램",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEN AI KOREA | 대한민국 대표 생성형 AI 커뮤니티",
    description: "온라인, 오프라인 AI 교육과 맞춤형 AI 교육 및 개발 의뢰를 제공하는 대한민국 대표 생성형 AI 커뮤니티",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Vercel 배포 URL용 추가 메타 태그 */}
        <meta property="og:url" content="https://webinarlanding.vercel.app" />
        <meta property="og:image" content="https://webinarlanding.vercel.app/og-image.png" />
        <meta property="og:title" content="GEN AI KOREA | 대한민국 대표 생성형 AI 커뮤니티" />
        <meta property="og:description" content="온라인, 오프라인 AI 교육과 맞춤형 AI 교육 및 개발 의뢰를 제공하는 대한민국 대표 생성형 AI 커뮤니티" />
        <meta name="twitter:image" content="https://webinarlanding.vercel.app/og-image.png" />
        
        {/* www 서브도메인용 추가 메타 태그 */}
        <meta property="og:see_also" content="https://www.ai-c.kr" />
        <link rel="canonical" href="https://ai-c.kr" />
        <meta property="og:url" content="https://www.ai-c.kr" />
        <meta property="og:image" content="https://www.ai-c.kr/og-image.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
