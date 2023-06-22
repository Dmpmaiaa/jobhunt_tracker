import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "users";

export async function findUserById(uid:string | undefined) {
  
  const collection = await getMongoCollection(COLLECTION_NAME);
  const result = await collection.findOne({ _id: new ObjectId(uid) });
  return result;
}
