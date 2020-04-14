import { Response, Request } from 'https://deno.land/x/oak/mod.ts';
import { Users } from '../../user/models/User.ts';

export async function login({ request, response }: { request: Request, response: Response }) {
    try {
        const body = await (await request.body()).value;
        const user = Users.findOne({...body});

        if (!!user) {
            
        }

        response.body = await user || 'Unable to login';
    } catch (err) {
        console.error(err.message);
    }
}
