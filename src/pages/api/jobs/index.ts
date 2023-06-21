import { getJobByUserId } from "@/server/services/jobs";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res:NextApiResponse){
    
    if(req.method === "GET") {
        const result = getJobByUserId(uid)
        return res.status(200).json(result)
    }
}