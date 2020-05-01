import { Router } from "../deps.ts";
import { getUser, addUser, getUsersList, deleteUser } from "./user/index.ts";
import { login } from './login/index.ts';
import authenticate from "../middlewares/authenticate.ts";


export const apiRrouter = new Router();

// USER ROUTES
apiRrouter
    .get('/api/users', getUsersList)
    .get('/api/user/:userId', getUser)
    // .put('/api/user/:userId', modifyUser)
    .delete('/api/user/:userId', deleteUser)
    .post('/api/register', addUser)
    .post('/api/login', login)
    


export const configRouter = new Router();

configRouter
    .get('/config/api-routes', authenticate, async (ctx: any) => {
        ctx.response.body = JSON.parse('{"something": "something"}');         
    })
