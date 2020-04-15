import { Response, Request } from 'https://deno.land/x/oak/mod.ts';
import { Users, IUser } from "../models/User.ts";

export async function addUser({request, response}: {request: Request, response: Response}) {
    try {
        const body: IUser = (await request.body()).value;
        const userExist: Promise<IUser> = await Users.findOne({username: body.username});

        if(!!userExist) {
            response.body = "SOME ELSE RESPONSE TO USER EXISTS";
        } else {
            const user = await Users.insertOne({
                username: body.username,
                password: body.password,
                _isUserDeleted: false
            });
            response.body = user;
        }

    } catch (err) {
        console.error(err.message);
    }
}