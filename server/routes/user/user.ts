
export const getUser = (ctx: any) => {
  ctx.response.body = "user here!!!";
}

export const user = (router: any) => {
  router
      .get("/user", getUser)
};
