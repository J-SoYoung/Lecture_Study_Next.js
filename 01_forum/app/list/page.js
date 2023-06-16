import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const dynamic = "force-dynamic";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();
  // id가 Object형식으로 되어있어서 props으로 잘 넘어가지 못함=>
  const modifiedResult = result.map((i) => {
    return { ...i, _id: i._id.toString() };
  });

  return (
    <div>
        <div className="title-box">
          <h1>게시판 페이지입니다</h1>
        </div>
        <div className="list-bg">
          <ListItem result={modifiedResult} />
        </div>
    </div>
  );
}
