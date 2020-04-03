
export const hello = (ctx: any) => {
    ctx.response.body = "Hello world 2!";
}

export const helloWorld = (router: any) => {
    router
        .get("/", hello)
};
