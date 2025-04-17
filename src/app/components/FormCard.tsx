"use client";

import React from "react";
import useSWR from "swr";
import QuotaBadge from "./QuotaBadge";

interface FormCardProps {
  title: string;
  description: string;
  price: string;
  formUrl: string;
  isOnline?: boolean;
}

// SWR fetcher 함수
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FormCard({ title, description, price, formUrl, isOnline = false }: FormCardProps) {
  // isOnline이 true인 경우에만 SWR로 데이터 가져오기
  const { data, error, isLoading } = useSWR(
    isOnline ? "/api/quota" : null,
    fetcher,
    {
      refreshInterval: 30000, // 30초마다 갱신
      revalidateOnFocus: true
    }
  );

  // 잔여 인원 및 마감 상태 계산
  const quota = data?.online ?? null;
  const isSoldOut = isOnline && quota !== null && quota <= 0;

  return (
    <div className="rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition p-6 flex flex-col bg-background">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <p className="font-bold mb-4">{price}</p>
      
      {isOnline && (
        <QuotaBadge
          remaining={quota}
          isSoldOut={isSoldOut}
          loading={isLoading || error}
        />
      )}
      
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto px-4 py-2 text-center bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors ${
          isSoldOut ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        신청하기
      </a>
    </div>
  );
} 