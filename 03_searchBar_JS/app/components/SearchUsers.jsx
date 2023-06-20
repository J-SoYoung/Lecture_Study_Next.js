"use client";
import Link from "next/link";
import React from "react";

export default function SearchUsers() {
  const username = localStorage.getItem("username");
  const userImage = localStorage.getItem("userImage");
  const userURL = localStorage.getItem("userURL");

  return (
    <div className="search-result-box">
      <div>
        <p>{username}</p>
        <Link href={userURL} target="_blank">
          {userURL}
        </Link>
      </div>
      <img src={userImage} />
    </div>
  );
}
