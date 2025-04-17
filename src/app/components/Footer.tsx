import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-slate-950 text-white/80">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} 생성 AI 코리아 교육 랜딩 페이지. 모든 권리 보유.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="https://cafe.naver.com/GenAI" className="hover:text-emerald-500 transition-colors">
              생성 AI 코리아 네이버 카페
            </Link>
            <Link href="https://open.kakao.com/o/gZihRWZf" className="hover:text-emerald-500 transition-colors">
              생성 AI 코리아 오픈카톡
            </Link>
            <Link href="https://www.youtube.com/@%EC%83%9D%EC%84%B1AI%EC%BD%94%EB%A6%AC%EC%95%84" className="hover:text-emerald-500 transition-colors">
              생성 AI 코리아 YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 