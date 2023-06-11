import DetailLink from "../DetailLink";
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="detail-box">
      <h2>상세페이지</h2>
      <div>
        <p>{result.title}</p>
        <p>{result.content}</p>
      </div>
      <DetailLink> 메인으로 이동 </DetailLink>
    </div>
  );
}
