import mongoose, { connect, model, set } from "mongoose";
import catSchema from "./schma/CatSchma.mjs";
import bookSchema from "./schma/BookSchma.mjs";
import env from "dotenv";
env.config();

set("strictQuery", true);

connect(process.env.MONGO_URI);

// const Cat = model("Cat", catSchema);
const Book = model("Book", bookSchema);

// const kitty = new Cat();
// kitty.name = "Zildjian";
// kitty.size = 1;
// kitty.arry = [0, 1];
// kitty.dt = "2017/12/21";
const book = new Book({
  title: "テストブック",
  description: "これは説明欄です",
  rating: 4,
  comment: "素晴らしい",
});

const init = async () => {
  const registerdBook = await book.save();
  console.log(registerdBook);
  mongoose.connection.close();
};
init();
