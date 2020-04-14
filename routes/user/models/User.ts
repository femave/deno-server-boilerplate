import MongoConnection from "../../../db-connection.ts";

const mongoDb = new MongoConnection();

const db = mongoDb.getClient.database("test");
export const Users = db.collection("users");

export interface IUser {
    username: string;
    password: string
}