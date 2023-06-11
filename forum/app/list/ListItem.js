"use client";

import { useEffect } from "react";
import LinkButton from "../components/LinkButton";

export default function ListItem({ result }) {
  // useEffect(()=>{
  // 서버에 get요청 날려서 DB게시물 가져옴
  // 검색노출이 잘 안됨, why? useEffect는 렌더링 후 실행되기 때문에.
  // 검색엔진 노출을 위한 컴포넌트로 구성하려면 props를 넘기는 것이 좋다
  // },[])

  const handleClickDelete = (id) => {
    console.log(id);
    fetch("api/post/remove", {
      method: "DELETE",
      body: id,
    });
  };

  return (
    <>
      {result.map((list, idx) => {
        return (
          <div className="list-item" key={idx}>
            {/* <h4>{result[idx].title}</h4> */}
            <h4>{list.title}</h4>
            <LinkButton url={`detail/${list._id}`}>상세페이지 이동</LinkButton>
            <LinkButton url={`edit/${list._id}`}>✒️게시글 수정</LinkButton>

            {/* ajax를 통해 서버 요청 */}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClickDelete(list._id);
              }}
            >
              🗑️게시글 삭제
            </span>
          </div>
        );
      })}
    </>
  );
}
