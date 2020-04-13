import { Router } from "https://deno.land/x/oak/mod.ts";
import getUser from "./user/handlers/get-user.ts";


export const apiRrouter = new Router();

apiRrouter
    // .get('/api/users', getUserList)
    .get('/api/user/:userId', getUser)
    // .post('/api/user/:userId', addUser)
    // .put('/api/user/:userId', modifyUser)
    // .delete('/api/user/:userId', deleteUser)



export const configRouter = new Router();

configRouter
    .get('/config/api-routes', async (ctx: any) => { 
        console.log(configRouter.routes())
        ctx.response.body = JSON.parse('{"something": "something"}');         
    })
