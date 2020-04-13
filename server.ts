import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_PORT } from "./config.ts";
import notFound from "./handlers/not-found.ts";
import errorMiddleware from "./middlewares/error.ts";
import {apiRrouter, configRouter} from './routes/routes.ts';

const app = new Application();

app.use(errorMiddleware);

app.use(apiRrouter.routes());
app.use(apiRrouter.allowedMethods());


app.use(configRouter.routes());
app.use(configRouter.allowedMethods());

app.use(notFound);

console.log(`Listening on ${APP_PORT}...`);

app.listen({ port: +APP_PORT });