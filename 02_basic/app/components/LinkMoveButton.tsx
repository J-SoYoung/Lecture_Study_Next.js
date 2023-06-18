"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface LinkMoveBtnProps {
  url: string;
  text: string;
};

export default function LinkMoveButton({ url, text }:LinkMoveBtnProps) {
  let router = useRouter();
  const handleClick = () => {
    // 클릭 이벤트 처리 로직
    alert("클릭");
  };

  return (
    <button
      className="link-button"
      onClick={() => {
        router.push(`${url}`);
      }}
    >
      {text}
    </button>
  );
}
