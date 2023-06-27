import { Schema } from "mongoose";

/**
String: 文字列
Number: 数値
Date: 日付
Buffer: バイナリデータ
Boolean: 真偽
Mixed: なんでもOK
ObjectId: Mongo固有のID
Array: 配列
Decimal128: 浮動小数点
Map: マップ
Schema: 他のスキーマ
 */
const bookSchma = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true, enum: [1, 2, 3, 4, 5], default: 3 },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export default bookSchma;
