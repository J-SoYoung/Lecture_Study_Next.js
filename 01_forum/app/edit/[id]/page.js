import LinkButton from "@/app/components/LinkButton";
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="write-box">
      <div className="form-box">
        <h1>글 수정</h1>
        <form action="/api/post/edit" method="POST">
          <div className="edit-input">
            <p>Title </p>
            <input name="title" defaultValue={result.title} />
          </div>
          <div className="edit-input">
            <p>Content </p>
            <input name="content" defaultValue={result.content} />
          </div>
          <div className="edit-input" style={{ display: "none" }}>
            <input name="_id" defaultValue={result._id.toString()} />
            <input name="author" defaultValue={result.author} />
          </div>
          <div className="button-box">
            <button type="submit">수정완료</button>
            <LinkButton url={"/"}>수정 취소</LinkButton>
          </div>
        </form>
      </div>
    </div>
  );
}
