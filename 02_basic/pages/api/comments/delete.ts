import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  console.log("댓글id", req.query.id);
  console.log("postid", req.body);

  const commentId: string = req.query.id as string;
  const postId: string = req.body as string;

  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("comments")
    .deleteOne({ _id: new ObjectId(commentId) });
  const newList = await db
    .collection("comments")
    .find({ postId: req.body })
    .toArray();
  return res.status(200).json(newList);
  // return res.status(200).json("서버응답");
}
