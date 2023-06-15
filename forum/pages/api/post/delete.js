import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // queryString은 일반적으로 get요청임, query는 req.query로 데이터를 받는다
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .deleteOne({ _id: new ObjectId(req.query.id) });
  return res.status(200).json("삭제가 완료되었습니다.");

  // fetch에 method와 body를 작성해 데이터를 넘길때는 req.body로 받는다
  // if (req.method === "POST") {
  //   console.log("if안", req.body);
  //   const client = await connectDB;
  //   const db = client.db("forum");
  //   try {
  //     let result = await db
  //       .collection("post")
  //       .deleteOne({ _id: new ObjectId(req.body) });
  //     console.log(result);
  //     return res.status(200).json("삭제가 완료되었습니다.");
  //   } catch (error) {
  //     return res.status(500).json(error);
  //   }
  // }
}
