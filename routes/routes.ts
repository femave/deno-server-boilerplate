import { Router } from "https://deno.land/x/oak/mod.ts";

import helloWorld from "./helloWorld/helloWorld.ts";
import user from "./user/user.ts";


export const apiRrouter = new Router()
apiRrouter.get('/api/', helloWorld)
apiRrouter.get('/api/user', user)


export const configRouter = new Router()
configRouter.get('/config/', helloWorld)
configRouter.get('/config/user', user)
