"use client";
import LinkButton from "../components/LinkButton";
import { useRouter } from "next/navigation";

export default function ListItem({ result, session }) {
  const router = useRouter();

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
