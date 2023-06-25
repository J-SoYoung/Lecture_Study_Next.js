import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  const editData = { comment: req.body };
  if (req.method === "POST") {
    const client = await connectDB;
    const db = client.db("forum");
    const result = await db
      .collection("comments")
      .updateOne({ _id: new ObjectId(req.query.id) }, { $set: editData });
    const newList = await db
      .collection("comments")
      .find({ postId: req.query.postId })
      .toArray();
    return res.status(200).json(newList);
  }
}
