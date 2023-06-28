"use client";
import { useState } from "react";
import LinkButton from "../components/LinkButton";

export default function Write() {
  const [imgSrc, setImgSrc] = useState("");

  return (
    <div className="write-box">
      <div className="form-box">
        <h1>글작성</h1>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글 제목을 입력하세요" />
          <input name="content" placeholder="내용을 입력하세요 " />
          <input
            type="file"
            accept="image"
            onChange={async (e) => {
              const file = e.target.files[0];
              const filename = encodeURIComponent(file.name);

              let res = await fetch(`api/post/image?file=${filename}`);
              res = await res.json();
              console.log("res-", res);
              console.log(res.fields);
              //S3 업로드
              const formData = new FormData();
              Object.entries({ ...res.fields, file }).forEach(
                ([key, value]) => {
                  formData.append(key, value);
                }
              );
              let imageUpload = await fetch(res.url, {
                method: "POST",
                body: formData,
              });
              console.log(imageUpload);

              if (imageUpload.ok) {
                setImgSrc(`${imageUpload.url}/${filename}`);
                console.log(imgSrc);
              } else {
                console.log("실패");
              }
            }}
          />
          <img src={imgSrc} />
          <button type="submit">글 작성</button>
        </form>
      </div>
      <LinkButton url={"/"}>메인으로 이동</LinkButton>
    </div>
  );
}
