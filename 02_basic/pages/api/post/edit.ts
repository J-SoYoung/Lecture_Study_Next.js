import { Request, Response } from "express";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: Request, res: Response) {
  const editData = { title: req.body.title, content: req.body.content };
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .updateOne(
      { _id: new ObjectId(req.body._id as string) },
      { $set: editData }
    );
  // return res.status(200).json("수정이 완료되었습니다.");
  return res.status(200).redirect(302, "/");
}
