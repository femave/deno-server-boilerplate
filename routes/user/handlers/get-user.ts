import { Response } from "https://deno.land/x/oak/mod.ts";

export default async function getUser ({ response }: { response: Response }) {
    try {
        response.body = 'hello user';
    } catch (err) {
        console.error(err.message);
    }
}