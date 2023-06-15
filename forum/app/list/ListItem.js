"use client";

import { useEffect } from "react";
import LinkButton from "../components/LinkButton";
import { useRouter } from "next/navigation";

export default function ListItem({ result }) {
  // useEffect(()=>{
  // 서버에 get요청 날려서 DB게시물 가져옴
  // 검색노출이 잘 안됨, why? useEffect는 렌더링 후 실행되기 때문에.
  // 검색엔진 노출을 위한 컴포넌트로 구성하려면 props를 넘기는 것이 좋다
  // },[])
  const router = useRouter();
  const handleClickDelete = (id, event) => {
    // console.log(id);
    // fetch("/api/post/delete", {
    //   method: "POST",
    //   body: id.toString(),
    // })
    //   .then((r) => r.json())
    //   .then((result) => {
    //     //성공시 실행할코드
    //     event.target.parentElement.style.opacity = 0;
    //     setTimeout(()=>{
    //       // event.target.parentElement.style.display='none'
    //       router.refresh();
    //     },1000)
    //   });
  };

  return (
    <>
      {result.map((list, idx) => {
        return (
          <div className="list-item" key={idx}>
            <h4>{list.title}</h4>
            <LinkButton url={`detail/${list._id}`}>상세페이지 이동</LinkButton>
            <LinkButton url={`edit/${list._id}`}>✒️게시글 수정</LinkButton>

            {/* ajax를 통해 서버 요청 */}
            <span
              style={{ cursor: "pointer" }}
              onClick={(event) => {
                handleClickDelete(list._id, event);
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
