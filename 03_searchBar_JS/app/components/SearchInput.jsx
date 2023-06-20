"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleClickSearch = () => {
    fetch(`/api/users/username?username=${username}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("username", result.name);
        localStorage.setItem("userImage", result.avatar_url);
        localStorage.setItem("userURL", result.html_url);
        router.push(`/name/${username}`);
      });
  };

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={handleClickSearch}>검색하기 </button>
    </>
  );
}

//Youngju-Jang
//wjddms0501
//rgngr
//soomin-world
//MJ-Dev92
//headwing
//junyoungNA
//Superduper-India
