import { Response } from "https://deno.land/x/oak/mod.ts";

const user = async ({ response }: { response: Response }) => {
    try {
        response.body = 'hello user';
    } catch (err) {
        console.error(err.message);
    }
}
export default user