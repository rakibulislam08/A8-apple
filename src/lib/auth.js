

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client =new MongoClient(process.env.MONGODB_APPLES_URL);
const db = client.db('apples_store');

export const auth = betterAuth({
    database: mongodbAdapter(db, {

        client
    }),

    emailAndPassword: {
        enabled: true,
    }
});