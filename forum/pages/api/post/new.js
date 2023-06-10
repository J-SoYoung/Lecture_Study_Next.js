import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  // console.log(req.body);
  if (req.method == "POST") {
    if (req.body.title === "" || req.body.content === "") {
      return res.status(500).json("빈칸을 채워주세요");
    }
    try {
      const client = await connectDB;
      const db = client.db("forum");
      const collection = await db.collection("post").insertOne(req.body);
      return res.status(200).json("글작성 성공");
      // return res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
