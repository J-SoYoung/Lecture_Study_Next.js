import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  let data = req.body;
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  } else {
    return res.status(500).json("로그인을 해주세요");
  }
  if (req.method == "POST") {
    try {
      const client = await connectDB;
      const db = client.db("forum");
      const collection = await db.collection("post").insertOne(req.body);
      return res.status(200).json(data);
      // return res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
