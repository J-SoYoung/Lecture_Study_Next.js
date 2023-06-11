import { connectDB } from "@/util/database";
import Link from "next/link";
import LinkButton from "./components/LinkButton";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <div>
      <div className="title-box">
        <h1>Home입니다</h1>
        <LinkButton url={"/write"}>📒 글작성 페이지로 이동</LinkButton>
      </div>
      <div className="list-bg">
        {result.map((list, idx) => {
          return (
            <div className="list-item" key={idx}>
              {/* <h4>{result[idx].title}</h4> */}
              <h4>{list.title}</h4>
              <p>{list.contnet}</p>

              <LinkButton url={`detail/${list._id}`}>
                상세페이지 이동
              </LinkButton>
              <LinkButton url={`edit/${list._id}`}>
              ✒️글 수정
              </LinkButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}
