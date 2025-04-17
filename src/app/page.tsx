import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FormCard from "./components/FormCard";
import Footer from "./components/Footer";

export default function Home() {
  // 환경 변수가 설정되지 않은 경우 참고링크의 URL을 사용
  const forms = {
    online: process.env.NEXT_PUBLIC_FORM_ONLINE || "https://docs.google.com/forms/d/e/1FAIpQLSePfKS7ffpSEFpLyuurq0M6HHETWkqu4vVKc6Ly14uHBQnSrw/viewform?usp=dialog",
    offline: process.env.NEXT_PUBLIC_FORM_OFFLINE || "https://docs.google.com/forms/d/e/1FAIpQLSddiqM4hgFQvNuCM0F8KFk0DxBaM3pkRsoYzBOBqiCdCtmQ0g/viewform?usp=dialog",
    ai: process.env.NEXT_PUBLIC_FORM_AI || "https://docs.google.com/forms/d/e/1FAIpQLSdgWBXHRq7ZJ-MB2nB1qXM7N5NDOdK0J8-CV3GThgL-O5HnmA/viewform?usp=dialog",
    dev: process.env.NEXT_PUBLIC_FORM_DEV || "https://docs.google.com/forms/d/e/1FAIpQLScDRzJ3KYg5ox1-chPKMj_8pnmPFl-EjlvyfTa9pd20Zx94Bg/viewform?usp=dialog",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <Hero />
      
      <div id="programs" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">교육 및 의뢰 신청</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FormCard
            title="온라인 6주 교육"
            description="온라인으로 진행되는 6주 과정입니다. AI 기초부터 실전 프로젝트까지 체계적으로 학습합니다."
            price="₩500,000"
            formUrl={forms.online}
            isOnline={true}
          />
          
          <FormCard
            title="오프라인 4주 교육"
            description="오프라인으로 진행되는 4주 집중 과정입니다. 실시간 피드백과 함께 AI 개발을 배웁니다."
            price="₩400,000"
            formUrl={forms.offline}
          />
          
          <FormCard
            title="AI 교육 의뢰"
            description="기업이나 단체를 위한 맞춤형 AI 교육 커리큘럼을 제공합니다."
            price="맞춤형 견적"
            formUrl={forms.ai}
          />
          
          <FormCard
            title="개발 의뢰"
            description="AI 관련 개발 프로젝트를 의뢰하세요. 요구사항에 맞는 솔루션을 제공합니다."
            price="프로젝트별 견적"
            formUrl={forms.dev}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
