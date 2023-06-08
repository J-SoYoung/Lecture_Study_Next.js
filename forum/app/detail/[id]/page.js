import DetailLink from "@/app/list/DetailLink";
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  console.log(props.params.id);
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <>
      <div>
        <h4>상세페이지</h4>
        <p>{result.title}</p>
        <p>{result.content}</p>
      </div>
      <DetailLink>
        <p>이전페이지</p>
      </DetailLink>
    </>
  );
}
