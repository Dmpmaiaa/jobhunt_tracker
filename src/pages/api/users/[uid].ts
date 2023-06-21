import { getUserById } from "@/server/services/users";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const {uid}:any  = req.query;
      const result = await getUserById(uid);

      return res.status(200).json({ user: result });
    }
  } catch (error) {
    console.log(error);
  }
}
