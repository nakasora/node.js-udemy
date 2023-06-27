import env from "dotenv";
env.config();

import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function getCollection() {
  try {
    await client.connect();
    const db = client.db("bookshelf");
    return db.collection("books");
  } catch {
    await client.close();
  }
}
// クエリ
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://www.mongodb.com/docs/manual/reference/operator/query/regex/

getAllBooks();
async function getAllBooks() {
  const col = await getCollection();
  // let cursor = col.find({ title: "バックエンド開発" });
  // const result = await cursor.toArray();
  // let cursor = col.find({ $or: [{rating: 3}, {title: "バックエンド開発"}]});
  // let cursor = col.find({
  //   title: { $in: ["ごんぎつね4", "バックエンド開発"] },
  // });
  let cursor = col.find({
    rating: { $gte: 2, $lte: 4 },
  }).sort({rating: -1});
  const result = await cursor.toArray();
  console.log(result);
  // const result = await col.findOne({ title: "バックエンド開発" });
  // console.log(result);

  await client.close();
}
