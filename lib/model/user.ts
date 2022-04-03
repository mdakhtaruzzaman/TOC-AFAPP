import { Schema,Types } from "mongoose";
export const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Types.ObjectId,
    ref: "Status",
  },
});
