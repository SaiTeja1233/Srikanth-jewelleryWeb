import { Client, Account, ID, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67c22add0009c8ceb7b4");

const database = new Databases(client);
const account = new Account(client);

export { client, database, account, ID };
