import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as db from "../lib/db-connector";
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let response = null;

    // create 1 db connection for all functions
    await db.init();
    response = {
        documentResponse: await db.findItems(),
      };
    context.res = {
        body: response
    };

};

export default httpTrigger;