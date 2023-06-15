import React from "react";
import LinkButton from "../components/LinkButton";

export default function ErrorPage() {
  return (
    <div>
      <h1>만료된 페이지입니다. 데이터 빈칸을 입력해주세요</h1>
      <LinkButton url={"/"}>메인페이지로 이동 </LinkButton>
      <LinkButton url={"write"}>작성페이지로 이동</LinkButton>
    </div>
  );
}
