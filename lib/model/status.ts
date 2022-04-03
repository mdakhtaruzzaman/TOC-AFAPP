import { Schema} from "mongoose";

export const StatusSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  });