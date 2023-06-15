import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // 메서드를 DELETE로 하면 req.body가 출력이 안되고, POST로 해야 값이 넘어오는 이유는?
  if (req.method === "POST") {
    const client = await connectDB;
    const db = client.db("forum");

    try {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      console.log(result);
      return res.status(200).json("삭제가 완료되었습니다.");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
