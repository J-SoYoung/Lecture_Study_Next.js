"use client";
import { useState, FormEvent, MouseEvent } from "react";
import { useRouter } from "next/navigation";

export default function Write() {
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [imgFilename, setImgFilename] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleClickPost = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!file || !title || !content) {
      alert("제목/내용/img의 내용을 채워주세요");
      return;
    }
    let imgRes = await fetch(`api/post/image?file=${imgFilename}`);
    imgRes = await imgRes.json();
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
      createDate: new Date().getTime(),
    };
    let res = fetch(`/api/post/new`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        router.push("/");
        router.refresh();
      });
  };

  return (
    <div>
      <form className="input-box">
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
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            setFile(file);
            setImgFilename(encodeURIComponent(file.name));

            if (file) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                if (reader) {
                  setImgSrc(reader.result as string);
                }
              };
            }
          }}
        />
        {imgSrc == null ? (
          ""
        ) : (
          <img className="img-box" src={imgSrc} alt="preview" />
        )}
        <button type="button" onClick={handleClickPost}>
          글 작성
        </button>
      </form>
    </div>
  );
}
