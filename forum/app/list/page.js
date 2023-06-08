import { connectDB } from "@/util/database.js";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((list, idx) => {
        return (
          <div className="list-item" key={idx}>
            {/* <h4>{result[idx].title}</h4> */}
            <h4>{list.title}</h4>
            <p>{list.contnet}</p>

            <Link href={`detail/${list._id}`}>
              <p>1월 1일</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
