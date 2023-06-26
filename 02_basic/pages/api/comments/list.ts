import { connectDB } from "@/util/database";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("comments").find({postId: req.query.postId}).toArray();

  return res.status(200).json(result)
}
