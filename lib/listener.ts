import * as publisher from "./publisher"

export const statusChangeListner = async (user:any)=>{
    const res = await publisher.publishChangedStatus(user);
    return res;
}