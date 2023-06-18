import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { PropsIdType } from "@/util/typeSettings";
import LinkMoveButton from "@/app/components/LinkMoveButton";
import DeleteButton from "@/app/components/DeleteButton";

export default async function Detail(props: PropsIdType) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <div className="detila-box">
        <h1>상세 페이지</h1>
        <h4>{result && result.title}</h4>
        <p>{result && result.content}</p>
        <div className="detail-btn-box">
          <LinkMoveButton url={`/edit/${result && result._id}`} text={"수정"} />
          <DeleteButton id={result && result._id} />
        </div>
      </div>
    </div>
  );
}
