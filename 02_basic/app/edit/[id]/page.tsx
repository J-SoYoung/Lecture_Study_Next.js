import LinkMoveButton from "@/app/components/LinkMoveButton";
import { connectDB } from "@/util/database";
import { PropsIdType } from "@/util/typeSettings";
import { ObjectId } from "mongodb";

export default async function Edit(props: PropsIdType) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  const id = result && result._id.toString();

  return (
    <div className="write-box">
      <div className="input-box">
        <h1>글 수정</h1>
        <form action="/api/post/edit" method="POST">
          <div className="edit-input">
            <p>Title </p>
            <input name="title" defaultValue={result && result.title} />
          </div>
          <div className="edit-input">
            <p>Content </p>
            <input name="content" defaultValue={result && result.content} />
          </div>
          <div className="edit-input" style={{ display: "none" }}>
            Data정보
            {id && <input name="_id" defaultValue={id} />}
          </div>
          <div className="button-box">
            <button className="submit-btn" type="submit">
              수정완료
            </button>
            <LinkMoveButton url={"/"} text={"수정 취소"}></LinkMoveButton>
          </div>
        </form>
      </div>
    </div>
  );
}
