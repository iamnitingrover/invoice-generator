import { Client, Account } from "appwrite";

const client = new Client();
const appwrite_project_id=process.env.APPWRITE_PROJECT_ID;
const appwrite_endpoint=process.env.APPWRITE_API_ENDPOINT;

client
    .setEndpoint(appwrite_endpoint);
    .setProject(appwrite_project_id);

export const account = new Account(client);
export {ID} from "appwrite";