import { connectDB } from "@/util/database";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  const commentData = {
    comment: req.body,
    postId: req.query.postId,
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
