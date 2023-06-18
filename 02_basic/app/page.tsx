import { connectDB } from "@/util/database";
import LinkMoveButton from "./components/LinkMoveButton";

export default async function Home() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <>
      <div className="list-bg">
        {result.map((list, idx) => {
          return (
            <div className="list-item" key={idx}>
              <h4>{list.title}</h4>
              <p>{list.contnet}</p>
              <LinkMoveButton
                url={`detail/${list._id}`}
                text={"상세페이지로 이동"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
