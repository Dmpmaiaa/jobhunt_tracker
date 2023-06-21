import { ObjectId } from "mongodb"
import { getMongoCollection } from "../db"

const COLLECTION_NAME = "jobs"
export async function findJobByUser(uid:string) {
    const collection = await getMongoCollection(COLLECTION_NAME)
    const data = collection.find({uid: new ObjectId(uid)})
    const result = data.toArray()
    return result
}