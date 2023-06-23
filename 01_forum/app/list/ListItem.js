"use client";
import LinkButton from "../components/LinkButton";
import { useRouter } from "next/navigation";

export default function ListItem({ result, session }) {
  // useEffect(()=>{
  // 서버에 get요청 날려서 DB게시물 가져옴
  // 검색노출이 잘 안됨, why? useEffect는 렌더링 후 실행되기 때문에.
  // 검색엔진 노출을 위한 컴포넌트로 구성하려면 props를 넘기는 것이 좋다
  // },[])
  const router = useRouter();
  console.log('로그인유저',session)

  const handleClickDelete = (id, author, event) => {
    fetch(`/api/post/delete?id=${id}&author=${author}`)
      .then((r) => r.json())
      .then((result) => {
        alert(result);
        router.refresh();
        // event.target.parentElement.style.opacity = 0;
        // setTimeout(() => {
        //   event.target.parentElement.style.display = "none";
        // }, 1000);
      });
  };

  return (
    <>
      {result.map((list, idx) => {
        return (
          <div className="list-item" key={idx}>
            <h4>{list.title}</h4>
            <LinkButton url={`detail/${list._id}`}>상세페이지 이동</LinkButton>
            { session == list.author && <LinkButton url={`edit/${list._id}?author=${session}`}>✒️게시글 수정</LinkButton> }
            { session == list.author &&  <span
                style={{ cursor: "pointer" }}
                onClick={(event) => {
                  handleClickDelete(list._id, list.author, event);
                }}
              >
              🗑️게시글 삭제
            </span>}
          </div>
        );
      })}
    </>
  );
}
