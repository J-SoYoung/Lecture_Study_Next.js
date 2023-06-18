import { Request, Response } from "express";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: Request, res: Response) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .deleteOne({ _id: new ObjectId(req.query.id as string) });
  return res.status(200).json("삭제가 완료되었습니다.");
}
