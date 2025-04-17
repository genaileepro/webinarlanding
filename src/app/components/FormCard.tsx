"use client";

import React from "react";

interface FormCardProps {
  title: string;
  description: string;
  price: string;
  formUrl: string;
  isOnline?: boolean;
}

export default function FormCard({ title, description, price, formUrl, isOnline = false }: FormCardProps) {
  return (
    <div className="rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition p-6 flex flex-col bg-background">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <p className="font-bold mb-4">{price}</p>
      
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto px-4 py-2 text-center bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
      >
        신청하기
      </a>
    </div>
  );
} 