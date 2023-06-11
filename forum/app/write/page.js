import React from "react";
import LinkButton from "../components/LinkButton";

export default function Write() {
  return (
    <div className="write-box">
      <div className="form-box">
        <h1>글작성</h1>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글 제목을 입력하세요" />
          <input name="content" placeholder="내용을 입력하세요 " />
          <button type="submit">글 작성</button>
        </form>
      </div>
      <LinkButton url={"/"}>메인으로 이동</LinkButton>
    </div>
  );
}
