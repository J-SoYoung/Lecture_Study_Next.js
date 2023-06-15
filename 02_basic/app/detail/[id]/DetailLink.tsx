"use client";

import { useRouter, usePathname } from "next/navigation";

interface DetailLinkProps {
  children: React.ReactNode;
}

export default function DetailLink({ children }: DetailLinkProps) {
  let router = useRouter();

  return (
    <button className='router-btn'
      onClick={() => {
        router.push("/");
      }}
    >
      {children}
    </button>
  );
}
