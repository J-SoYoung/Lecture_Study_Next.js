"use client";
import React from "react";

import { useRouter, usePathname } from "next/navigation";

export default function LinkButton({ url, children }) {
  let router = useRouter();

  return (
    <button
      className="link-button"
      onClick={() => {
        router.push(`${url}`);
      }}
    >
      {children}
    </button>
  );
}
