"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function DetailLink() {
  let router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/list");
      }}
    >
      페이지 이동
    </button>
  );
}
