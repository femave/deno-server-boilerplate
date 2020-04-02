import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/dotenv.ts";
import { routerIndex } from './routes/index.ts';


const app = new Application();
const router = new Router();


() => {
  routerIndex(router)
};

app.use(router.routes());
app.use(router.allowedMethods());




app.listen({ port: +config().PORT });
// app.listen({ port: 8080 });

console.log(`Listening on PORT:${config().PORT}`);