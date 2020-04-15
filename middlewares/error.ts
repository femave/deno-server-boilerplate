export default async ({ response }: any, next: any) => {
  try {
    await next();
  } catch (err) {
    response.status = 500;
    response.body = { error: err.message };
  }
};