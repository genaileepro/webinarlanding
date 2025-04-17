"use client";

import Link from "next/link";
import Image from "next/image";
// TODO: shadcn/ui NavigationMenu로 확장 예정

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="GEN AI KOREA" 
            width={180} 
            height={50} 
            className="h-auto w-auto"
          />
        </Link>
        
        <div>
          {/* TODO: 다크모드 토글 구현 */}
        </div>
      </div>
    </header>
  );
} 