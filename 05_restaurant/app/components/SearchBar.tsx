'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar(){
  const router = useRouter();
  const [location, setLocatioin] = useState("");

  return ( 
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setLocatioin(e.target.value);
        }}
      />
      <button
        className="rounded bg-[#F0EDCC] px-9 py-2 text-[#02343F]"
        onClick={() => {
          if (location === null) return;
          router.push(`/search?city=${location}`);
          setLocatioin("")
        }}
      >
        Let's go
      </button>
    </div>
  );
}