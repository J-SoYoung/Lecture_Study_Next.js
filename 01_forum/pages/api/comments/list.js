import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("comments").find({postId: req.query.postId}).toArray();
  
  return res.status(200).json(result)
}
