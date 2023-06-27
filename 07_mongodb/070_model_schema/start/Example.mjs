import { connect, model, set } from "mongoose";
import catSchema from "./CatSchma.mjs";

set("strictQuery", true);

import env from "dotenv";
env.config();

connect(process.env.MONGO_URI);

const Cat = model("Cat", catSchema);

const kitty = new Cat();
kitty.name = "Zildjian";
kitty.size = 4;
kitty.day = "2020/01/01";
kitty.save().then((result) => console.log(result.day));
