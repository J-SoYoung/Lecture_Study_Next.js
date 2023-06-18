"use client";
import { useState, FormEvent } from "react";

export default function Write() {
  // const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<string>("");
  // const onChangeSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!title || !content) {
  //     alert("모든 필드를 입력해주세요.");
  //     return;
  //   }
  //   const inputData = { title, content };
  //   fetch("api/post/new", {
  //     method: "POST",
  //     body: JSON.stringify(inputData),
  //   })
  //     .then((r) => r.json())
  //     .then((result) => alert(result))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      {/* <form className="input-box" onSubmit={onChangeSubmit}>
        <input
          name="title"
          placeholder="글 제목을 입력하세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          name="content"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">입력</button>
      </form> */}
      <form className="input-box" action="/api/post/new" method="POST">
        <input name="title" placeholder="글 제목을 입력하세요" />
        <input name="content" placeholder="내용을 입력하세요" />
        <button type="submit">입력</button>
      </form>
    </div>
  );
}
