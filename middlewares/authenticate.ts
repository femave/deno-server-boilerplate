
import validateJwt from "https://deno.land/x/djwt/validate.ts";
import { Request } from 'https://deno.land/x/oak/mod.ts';
import { SECRET } from "../config.ts";

export default async function authenticate({ request }: {request: Request}, next: any) {
    const auth = request.headers.get("authorization")?.split(' ')[1] as string;
    await validateJwt(auth, SECRET);
    await next();
}