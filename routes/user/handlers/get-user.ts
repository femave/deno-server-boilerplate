import { Response, Request } from 'https://deno.land/x/oak/mod.ts';
import { Users, IUser } from "../models/User.ts";

export async function getUser ({ request, response }: { request: Request, response: Response }) {
    try {
        const username = request.path.split('/')[3];
        const user = Users.findOne({username})
        response.body = await user || 'User not found';
    } catch (err) {
        console.error('error');
    }
}