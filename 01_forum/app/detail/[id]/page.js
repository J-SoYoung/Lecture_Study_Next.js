import LinkButton from "@/app/components/LinkButton";
import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Comment from "./Comment";

export default async function Detail(props) {
  const loginUser = await getServerSession(authOptions);
  const db = (await connectDB).db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  const author = result.author;

  return (
    <div className="detail-box">
      <h1>상세페이지</h1>
      <div className="detail-content">
        <p>제목 : {result.title}</p>
        <p>내용 : {result.content}</p>
      </div>
      <Comment postId={result._id.toString()} user={loginUser} />
      <div className="detail-btn-box">
        <LinkButton url={"/"}>메인으로 이동</LinkButton>
        <LinkButton url={"/list"}>뒤로가기</LinkButton>
      </div>
    </div>
  );
}
