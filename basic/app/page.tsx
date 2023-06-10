import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Home() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <>
      <h1>Homework</h1>
      <div>
        <form className="input-box" action="/api/post/new" method="POST">
        {/* <form className="input-box" action="/api/test" method="POST"> */}
          <input name="title" placeholder="글 제목을 입력하세요" />
          <input name="content" placeholder="내용을 입력하세요" />
          <button type="submit">입력</button>
        </form>
        <div>
          <div className="list-bg">
            {result.map((list, idx) => {
              return (
                <div className="list-item" key={idx}>
                  <h4>{list.title}</h4>
                  <p>{list.contnet}</p>
                  <Link href={`detail/${list._id}`}>상세페이지 이동</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
