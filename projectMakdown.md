기능명세서 v2 ― “통합 신청·의뢰 랜딩 페이지”

항목 세부 내용
목적 ① 온라인 6주 교육(선착순 6명) ② 오프라인 4주 교육 ③ AI 교육 의뢰 ④ 개발 의뢰  — 총 4 개 Google Form을 카드‑클릭 → 새 탭으로 연결해 한곳에서 안내·전환
주요 KPI ‑ 방문 대비 폼 클릭률 40 %↑
‑ 온라인 6주 과정 잔여 0/6 표시 & 마감 안내
‑ Lighthouse Performance ≥ 90

1. 기술 스택

영역 선택 이유
Framework Next.js 14 (App Router) — SEO·정적 최적화, Vercel 배포 용이
Lang TypeScript 5 — 타입 안전성
UI Kit shadcn/ui + TailwindCSS 3 — React Server Component 친화적, 디자인 자유도 높음
Animation framer‑motion — 카드 hover scale·페이드 효과
Analytics Vercel Web Analytics (기본) + GA4 Event(cta_click) 2. IA & 라우트 구조

URL 설명
/ 메인 랜딩 (Hero + 카드 그리드)
/thanks Google Form “제출 후 이동 URL” 용 공통 감사 페이지
→ 체크리스트·커뮤니티 링크 표시
/(marketing) (옵션) App Router 그룹 – 추후 블로그·FAQ 추가 시 사용 3. UI 구성요소

컴포넌트 역할 shadcn 요소
<Navbar> 로고, 다크모드 토글 NavigationMenu
<Hero> 메인 헤드라인 + CTA 버튼 Custom Section
<FormCard> 제목·설명·가격·버튼 + (온라인 과정 한정) 잔여 인원 Badge Card, Badge, Button
<QuotaBadge> “선착순 6명” or “마감” Badge

<Footer>	SNS/커뮤니티 링크	기본 Flex
4. 디자인 가이드 (핵심만)
배경 : 다크(slate‑950) 그라디언트

Accent : emerald‑500 (버튼, 배지)

카드 : rounded‑2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition

폰트 : text-xl 제목, text-muted-foreground 설명

레이아웃 : grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6

5. 데이터 & 상태

항목 방법 비고
Google Form URL .env.local 환경변수 4개 NEXT*PUBLIC_FORM*\*
잔여 인원 (온라인 6주)  최초 6 → 스프레드시트 API로 fetch
또는 운영자가 JSON 수동 업데이트 0 ≤ n ≤ 6
UI State useState(isMounted) / SWR (잔여 인원) 클라이언트 전용 6. 동작 시나리오
방문자가 카드 클릭 → 새 탭으로 Google Form 열림 (target="\_blank").

온라인 6주 과정 폼이 6명 응답 초과 시 Google Forms 자체 “마감” 페이지 노출 → 랜딩 쪽 QuotaBadge = 마감 표시(SWR).

각 Form “제출 후 이동” URL → /thanks?f=online 등으로 설정.

/thanks 페이지에서 다음 행동(커뮤니티 가입, 블로그) 권유 이벤트 발생.

7. 성능 & 접근성

항목 기준
Performance Lighthouse ≥ 90 (모바일·데스크톱)
접근성 키보드 네비 / aria‑labels / 대비 AA
이미지 next/image + priority Hero only
코드 분할 동적 import – framer‑motion, Hero 배경 컴포넌트 lazy 8. 완료 기준 (DoD)
카드 4개가 올바른 Google Form URL을 새 탭으로 연다.

온라인 6주 과정 — 잔여 인원 배지 표시 & Google Forms 응답 6개 초과 시 “마감” 상태 반영.

모든 Form은 제출 후 /thanks 페이지로 리다이렉트된다.

Lighthouse Performance 점수 ≥ 90 (3G Throttling, 모바일 기준).

9. 폴더 트리 요약
   bash
   복사
   편집
   app/
   ├─ layout.tsx # 다크모드·글로벌 스타일
   ├─ page.tsx # 랜딩
   ├─ thanks/page.tsx
   ├─ components/
   │ ├─ Navbar.tsx
   │ ├─ Hero.tsx
   │ ├─ FormCard.tsx
   │ ├─ QuotaBadge.tsx
   │ └─ Footer.tsx
   ├─ lib/
   │ └─ quota.ts # Google Sheets fetch (선택)
   └─ styles/globals.css
10. 향후 확장 로드맵

단계 내용
v1.1 모달 → iframe 방식 전환, /thanks 내부 submit hook 제거
v1.2 자체 폼(tRPC + Prisma), 실시간 잔여 인원 Pusher 알림
v1.3 다국어(i18n) 지원, 블로그·FAQ (@/contentlayer) 추가
이 명세서를 승인하면 바로 npx create-next-app -e with-tailwind 후 shadcn 초기화로 개발을 시작할 수 있습니다. 필요 변경 사항이나 추가 요구사항이 있으면 알려주세요!

11. 참고 링크
    ① 온라인 6주 교육(선착순 6명)
    https://docs.google.com/forms/d/e/1FAIpQLSePfKS7ffpSEFpLyuurq0M6HHETWkqu4vVKc6Ly14uHBQnSrw/viewform?usp=dialog
    ② 오프라인 4주 교육
    https://docs.google.com/forms/d/e/1FAIpQLSddiqM4hgFQvNuCM0F8KFk0DxBaM3pkRsoYzBOBqiCdCtmQ0g/viewform?usp=dialog
    ③ AI 교육 의뢰
    https://docs.google.com/forms/d/e/1FAIpQLSdgWBXHRq7ZJ-MB2nB1qXM7N5NDOdK0J8-CV3GThgL-O5HnmA/viewform?usp=dialog
    ④ 개발 의뢰
    https://docs.google.com/forms/d/e/1FAIpQLScDRzJ3KYg5ox1-chPKMj_8pnmPFl-EjlvyfTa9pd20Zx94Bg/viewform?usp=dialog
