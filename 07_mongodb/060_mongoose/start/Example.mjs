import mongoose from "mongoose";

mongoose.set("strictQuery", true);

import env from "dotenv";
env.config();

mongoose.connect(process.env.MONGO_URI);

const Cat = mongoose.model("Book", { name: String });

const kitty = new Cat();
kitty.name = "Zildjian";
kitty.save().then(() => console.log("meow"));
