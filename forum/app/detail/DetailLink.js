"use client";

import { useRouter, usePathname } from "next/navigation";

export default function DetailLink( {children}) {
  console.log(children);
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
