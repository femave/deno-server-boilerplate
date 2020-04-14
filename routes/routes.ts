import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUser, addUser } from "./user/index.ts";
import { login } from './login/index.ts';


export const apiRrouter = new Router();

// USER ROUTES
apiRrouter
    // .get('/api/users', getUserList)
    .get('/api/user/:userId', getUser)
    .post('/api/user', addUser)
    // .put('/api/user/:userId', modifyUser)
    // .delete('/api/user/:userId', deleteUser)

// LOGIN ROUTES
apiRrouter
    .post('/api/login', login)



export const configRouter = new Router();

configRouter
    .get('/config/api-routes', async (ctx: any) => { 
        console.log(configRouter.routes())
        ctx.response.body = JSON.parse('{"something": "something"}');         
    })
