"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ThanksContent() {
  const searchParams = useSearchParams();
  const formType = searchParams.get("f");
  const [title, setTitle] = useState("신청이 완료되었습니다!");

  useEffect(() => {
    if (formType) {
      switch (formType) {
        case "online":
          setTitle("온라인 6주 교육 신청이 완료되었습니다!");
          // 온라인 과정의 경우 API 호출하여 잔여 인원 감소
          fetch("/api/quota", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "decrease" }),
          });
          break;
        case "offline":
          setTitle("오프라인 4주 교육 신청이 완료되었습니다!");
          break;
        case "ai":
          setTitle("AI 교육 의뢰가 접수되었습니다!");
          break;
        case "dev":
          setTitle("개발 의뢰가 접수되었습니다!");
          break;
      }
    }
  }, [formType]);

  return (
    <div className="max-w-lg w-full bg-slate-900 rounded-2xl shadow-xl p-8">
      <h1 className="text-2xl font-bold mb-8 text-center">{title}</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">다음 단계:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>커뮤니티에 가입하여 다른 참여자와 소통하세요.</li>
          <li>미리 준비 자료를 확인하고 필요한 소프트웨어를 설치하세요.</li>
          <li>교육 일정을 캘린더에 등록하세요.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">유용한 링크:</h2>
        <div className="flex flex-col space-y-3">
          <Link 
            href="https://discord.gg/"
            className="text-emerald-500 hover:underline"
            target="_blank"
          >
            Discord 커뮤니티 가입하기
          </Link>
          <Link 
            href="https://github.com/"
            className="text-emerald-500 hover:underline"
            target="_blank"
          >
            GitHub 리포지토리 방문하기
          </Link>
          <Link 
            href="https://youtube.com/"
            className="text-emerald-500 hover:underline"
            target="_blank"
          >
            유튜브 채널 구독하기
          </Link>
        </div>
      </div>
      
      <div className="text-center">
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-lg"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <Suspense fallback={<div className="text-white">로딩 중...</div>}>
          <ThanksContent />
        </Suspense>
      </main>
      
      <footer className="py-6 px-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} 교육 플랫폼. 모든 권리 보유.
      </footer>
    </div>
  );
} 