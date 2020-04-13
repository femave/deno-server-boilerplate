export default ({ response }: any): void => {
  response.status = 404;
  response.body = { msg: "Not Found" };
};