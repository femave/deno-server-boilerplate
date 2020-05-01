import { Request, Response } from '../../../deps.ts';
import { Users, IUser } from "../models/User.ts";

export async function deleteUser ({ request, response }: { request: Request, response: Response }): Promise<void> {
    try {
        const username = request.path.split('/')[3];

        // console.log(request.searchParams.getAll('id')) TODO: Not working yet, maybe open bugfix?

        const user = Users.updateOne({username}, {_isUserDeleted: true}) as Promise<any>;
        response.body = await user || 'User not found';
    } catch (err) {
        console.error('error');
    }
}