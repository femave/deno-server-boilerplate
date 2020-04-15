import { Request, Response } from 'https://deno.land/x/oak/mod.ts';
import { Users, IUser } from "../models/User.ts";

export async function getUsersList({response}: {response: Response}) {
    try {

        const usersList = Users.find({_isUserDeleted: false});

        response.body = await usersList;

    }
    catch {

    }
}