import { findJobByUser } from "@/server/database/dblLogic/jobs";


export async function getJobByUserId(uid:string) {
    const result = findJobByUser(uid)
    return result
}

