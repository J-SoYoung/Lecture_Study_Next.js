import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log("댓글id", req.query);
  console.log("postid", req.body);
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("comments")
    .deleteOne({ _id: new ObjectId(req.query.id) });
  const newList = await db
    .collection("comments")
    .find({ postId: req.body })
    .toArray();
  return res.status(200).json(newList);
}
