import { NextResponse } from "next/server";

// 이 값은 실제로는 환경 변수나 DB에서 관리해야 함
// 초기 6명으로 설정
let onlineQuota = 6;

export async function GET() {
  // TODO: 실제 구현에서는 Google Sheets API 또는 DB 연동
  // 현재는 하드코딩된 값 반환
  
  return NextResponse.json({ 
    online: onlineQuota,
    timestamp: new Date().toISOString()
  });
}

// 개발용 API - 실제 프로덕션에서는 보안 처리 필요
export async function POST(request: Request) {
  try {
    const { action } = await request.json();
    
    if (action === "decrease" && onlineQuota > 0) {
      onlineQuota -= 1;
    } else if (action === "reset") {
      onlineQuota = 6;
    }
    
    return NextResponse.json({ 
      success: true,
      online: onlineQuota 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
} 