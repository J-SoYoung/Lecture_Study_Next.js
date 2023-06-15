// Next.js에서 mongoDB연결
import { MongoClient } from "mongodb";

declare global {
  var _mongo: any
}

const url =
  "mongodb+srv://admin:admin@cluster0.hhskj3l.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
