import { Schema, model, connect, Types } from "mongoose";
import { StatusSchema } from "./model/status";
import { userSchema } from "./model/user";
let db = null;
export const init = async () => {
  if (!db) {
    db = await connect(process.env["CosmosDbConnectionString"]);
  }
};
