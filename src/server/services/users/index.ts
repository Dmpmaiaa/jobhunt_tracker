import { findUserById } from "@/server/database/dblLogic/users";

export async function getUserById(uid:string | undefined){
    const result = await findUserById(uid)
    return result
}