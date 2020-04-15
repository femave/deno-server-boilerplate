import { Response, Request, Context } from 'https://deno.land/x/oak/mod.ts';
import { Users, IUser } from "../models/User.ts";

export async function getUser ({ request, response }: { request: Request, response: Response }): Promise<void> {
    try {
        const username = request.path.split('/')[3];

        // console.log(request.searchParams.getAll('id')) TODO: Not working yet, maybe open bugfix?

        const user = Users.findOne({username, _isUserDeleted: false}) as Promise<IUser>;
        response.body = await user || 'User not found';
    } catch (err) {
        console.error('error');
    }
}