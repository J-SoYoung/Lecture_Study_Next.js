"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ login }) {
  return (
    <div className = 'login-btn'>
      {login ? (
        // <p>로그아웃</p>
        <button 
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </button>
      ) : (
        <button
          onClick={() => {
            signIn();
          }}
        >
          로그인
        </button>
        // <p>로그인</p>
      )}
    </div>
  );
}
