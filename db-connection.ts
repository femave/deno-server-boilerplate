import { init, MongoClient } from "https://deno.land/x/mongo@v0.5.2/mod.ts";
import { DB_PATH } from './config.ts';

export default class MongoConnection {
    public client = new MongoClient();

    constructor() {}
    
    async dbConnection() {
        await init();
        this.client.connectWithUri(DB_PATH);
        console.log('=== CONNECTED TO DB ===')
    }
    
    get getClient() {
        return this.client;
    }    

}