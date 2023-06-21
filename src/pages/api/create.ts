import type { NextApiRequest, NextApiResponse } from 'next';

const { MongoClient } = require("mongodb");
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017";
const DB_NAME = "jobhunts";
const COLLECTION_NAME = "yourCollection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === 'POST') {
    try {
      const client = await MongoClient.connect(URL);
      const collection = client.db(DB_NAME).collection(COLLECTION_NAME);
      const result = await collection.insertOne(req.body);
      res.status(201).json({ success: true, data: result.ops[0] });
      await client.close();
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(400).json({ success: false });
  }
}
