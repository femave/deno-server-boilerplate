import { Response, Request } from 'https://deno.land/x/oak/mod.ts';
import makeJwt, {
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts"
import { Users } from '../../user/models/User.ts';
import { SECRET } from '../../../config.ts';

export async function login({ request, response }: { request: Request, response: Response }) { 

    try {
        const body = (await request.body()).value;
        const user = await Users.findOne({...body});
        const header: Jose = {
          alg: "HS256",
          typ: "JWT",
        }
        const payload: Payload = {
          user: await user,
          exp: setExpiration(new Date().getTime() + 60 * 1000 * 24 * 31),
        }

        const jwt = makeJwt({ header, payload }, SECRET)

        if (!!user) {
            response.body = { body: jwt };
        } else {
            response.body = 'Unable to login';
        }
        
    } catch (err) {
        console.error(err.message);
    }
}
