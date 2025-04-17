// 온라인 교육 잔여 인원 조회/관리 유틸리티

// 후에 Google Sheets API와 연동 시 사용될 인터페이스
export interface QuotaData {
  online: number;
  lastUpdated: string;
}

// 온라인 교육 잔여 인원 조회 함수
export async function getQuota(): Promise<QuotaData> {
  // TODO: 실제 구현에서는 Google Sheets API 또는 DB 연동
  try {
    const response = await fetch('/api/quota');
    if (!response.ok) {
      throw new Error('Quota fetch failed');
    }
    const data = await response.json();
    return {
      online: data.online,
      lastUpdated: data.timestamp || new Date().toISOString(),
    };
  } catch (error) {
    console.error('Failed to fetch quota:', error);
    // 기본값 반환
    return {
      online: 6, // 기본값
      lastUpdated: new Date().toISOString(),
    };
  }
}

// 인원 감소 함수 - 예약 시스템 확장 시 사용
export async function decreaseQuota(): Promise<boolean> {
  try {
    const response = await fetch('/api/quota', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'decrease' }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to decrease quota');
    }
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Failed to decrease quota:', error);
    return false;
  }
}

// 관리자용 인원 리셋 함수 - 관리자 패널 구현 시 사용
export async function resetQuota(): Promise<boolean> {
  try {
    const response = await fetch('/api/quota', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'reset' }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to reset quota');
    }
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Failed to reset quota:', error);
    return false;
  }
} 