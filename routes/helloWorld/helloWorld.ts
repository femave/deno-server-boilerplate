import { Response } from "https://deno.land/x/oak/mod.ts";

const helloWorld = async ({ response }: { response: Response }) => {
    try {
        response.body = 'hello world!';
    } catch (err) {
        console.error(err.message);
    }
}
export default helloWorld