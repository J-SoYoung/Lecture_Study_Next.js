import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import DetailLink from "./DetailLink";

export default async function Detail(props: any) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <div className="detila-box">
        <h1>상세페이지</h1>
        <h4>{result && result.title}</h4>
        <p>{result && result.content}</p>
        <DetailLink>
          <p>메인 페이지로 이동</p>
        </DetailLink>
      </div>
    </div>
  );
}
