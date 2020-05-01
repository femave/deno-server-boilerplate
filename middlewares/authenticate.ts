
import { validateJwt, Request } from "../deps.ts";
import { SECRET } from "../config.ts";

export default async function authenticate({ request }: {request: Request}, next: any) {
    const auth = request.headers.get("authorization")?.split(' ')[1] as string;
    await validateJwt(auth, SECRET);
    await next();
}