import { Schema, Mixed } from "mongoose";
import env from "dotenv";
env.config();

const catSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  day: {
    type: Date,
    set: function (newVal) {
      return new Date(newVal);
    },
    get: function (val) {
      return val instanceof Date ? val : new Date(val);
    },
  },
  flg: { type: Boolean, default: false },
  arry: [],
});

export default catSchema;