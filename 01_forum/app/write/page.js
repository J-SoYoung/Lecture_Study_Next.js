"use client";
import { useState } from "react";
import LinkButton from "../components/LinkButton";
import { useRouter } from "next/navigation";

export default function Write() {
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [imgFilename, setImgFilename] = useState("");
  const [file, setFile] = useState("");

  const handleClickPost = async (e) => {
    e.preventDefault();
    if (!file || !title || !content) {
      alert("제목/내용/img의 내용을 채워주세요");
      return;
    }
    let imgRes = await fetch(`api/post/image?file=${imgFilename}`);
    imgRes = await imgRes.json();

    // S3 업로드    
    // entries를 통해 주어진 객체를 [key, value]를 배열로 반환
    const formData = new FormData();
    Object.entries({ ...imgRes.fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    let imageUpload = await fetch(imgRes.url, {
      method: "POST",
      body: formData,
    });
    const newData = {
      title: title,
      content: content,
      imgSrc: `${imageUpload.url}/${imgFilename}`,
      createDate: new Date().getTime()
    };
    let res = fetch(`/api/post/new`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        router.push("/list");
        router.refresh();
      });
  };

  return (
    <div className="write-box">
      <div className="form-box">
        <h1>글작성</h1>
        <form>
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="글 제목을 입력하세요"
          />
          <input
            name="content"
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요 "
          />
          <input
            type="file"
            accept="image"
            onChange={async (e) => {
              const file = e.target.files[0];
              setFile(e.target.files[0]);
              setImgFilename(encodeURIComponent(file.name));

              if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setImgSrc(reader.result);
                };
              }
            }}
          />
          <img className="img-box" src={imgSrc} />
          <button type="button" onClick={handleClickPost}>
            글 작성
          </button>
        </form>
      </div>
      <LinkButton url={"/"}>메인으로 이동</LinkButton>
    </div>
  );
}
