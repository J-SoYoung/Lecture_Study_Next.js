import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  if (req.method == "GET") {
    return res.status(200).json(result);
  }


}
