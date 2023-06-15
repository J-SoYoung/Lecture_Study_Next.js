import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req);
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      // return res.status(500).json("빈칸을 채워주세요");
      return res.status(500).redirect(302, "/error");
    }
    const editData = { title: req.body.title, content: req.body.content };
    const client = await connectDB;
    const db = client.db("forum");
    const result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: editData });
    // await db.collection("post").updateOne({ 수정할 데이터 정보 }, {$set: 수정내용 }})

    // return res.status(200).json("수정완료");
    return res.status(200).redirect(302, "/");
  }
}
