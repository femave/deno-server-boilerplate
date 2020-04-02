import { helloWorld } from './helloWorld/helloWolrd.ts';
import { user } from './user/user.ts';

export const routerIndex = (router: any) => (
    helloWorld(router),
    user(router)
)


// const express = require('express');

// const app = express();

// app.use(require('./usuario'));
// app.use(require('./login'));



// module.exports = app;