'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header (){
  const router = useRouter();
  const [location, setLocatioin] = useState("");

  return (
    <div className="h-64 bg-gradient-to-r from-[#02343F] to-[#F0EDCC] p-2">
    <div className="text-center mt-10">
      <h1 className="text-white text-5xl font-bold mb-2">
        Find your table for any occasion
      </h1>
      {/* SEARCH BAR */}
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
            if (location === "banana") return;
            router.push("/search");
          }}
        >
          Let's go
        </button>
      </div>
    </div>
  </div>
  )
}