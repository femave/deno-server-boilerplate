import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/dotenv.ts";
import { publicRouterIndex } from './routes/index.ts';


const app = new Application();
const router = new Router();


publicRouterIndex(router)

app.use(router.routes());
app.use(router.allowedMethods());



app.listen({ port: +config().PORT });
console.log(`Listening on PORT:${config().PORT}`);