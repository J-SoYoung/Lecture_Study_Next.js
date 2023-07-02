import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(403).json({ error: "로그인이 필요합니다." });
  }
  const commentData = {
    comment: req.body,
    postId: req.query.postId,
    user: session.user.email,
  };
  if (req.method == "POST") {
    try {
      const client = await connectDB;
      const db = client.db("forum");
      const collection = await db.collection("comments").insertOne(commentData);
      // return res.status(200).json("댓글 작성 성공");
      return res.status(200).json(commentData);
    } catch (error) {
      return res.status(500).json({ error: "댓글 DB저장실패" });
    }
  }
}
