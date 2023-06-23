import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
    } else {
      return res.status(500).json("로그인을 해주세요");
  }
  if (req.method == "POST") {
    if (req.body.title === "" || req.body.content === "") {
      // return res.status(500).json("빈칸을 채워주세요");
      return res.status(500).redirect(302, "/error");
    }
    try {
      const client = await connectDB;
      const db = client.db("forum");
      const collection = await db.collection("post").insertOne(req.body);
      // return res.status(200).json("글작성 성공");
      return res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
