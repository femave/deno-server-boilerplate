import { init, MongoClient } from "https://deno.land/x/mongo@v0.5.2/mod.ts";
import { DB_PATH } from './config.ts';

export default async function dbConnection() {
    const starting = init();
    console.log(await starting)

    const client = new MongoClient();
    client.connectWithUri(DB_PATH);
    console.log('=== CONNECTED TO DB ===')

}