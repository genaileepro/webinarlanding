import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* 배경 효과 */}
      <div className="absolute inset-0 z-0 opacity-20 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          AI 전문가와 함께하는 <br/><span className="text-emerald-500">교육 프로그램</span>
        </h1>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          온라인, 오프라인 교육부터 맞춤형 AI 교육 및 개발 의뢰까지
          다양한 방식으로 AI 기술을 습득하고 활용할 수 있습니다.
        </p>
        
      </div>
    </section>
  );
} 