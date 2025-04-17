import React from "react";

interface QuotaBadgeProps {
  remaining: number | null;
  isSoldOut: boolean;
  loading: boolean;
}

export default function QuotaBadge({ remaining, isSoldOut, loading }: QuotaBadgeProps) {
  if (loading) {
    return (
      <div className="mb-4 text-sm text-white bg-gray-500 rounded-full px-2 py-1">
        로딩 중...
      </div>
    );
  }

  if (isSoldOut) {
    return (
      <div className="mb-4 text-sm text-white bg-emerald-500 rounded-full px-2 py-1">
        마감
      </div>
    );
  }

  return (
    <div className="mb-4 text-sm text-white bg-emerald-500 rounded-full px-2 py-1">
      선착순 {remaining}명
    </div>
  );
} 