import { helloWorld } from './helloWorld/helloWolrd.ts';
import { user } from './user/user.ts';

export const publicRouterIndex = (router: any) => (
    helloWorld(router),
    user(router)
);