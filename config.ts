import "https://deno.land/x/dotenv/load.ts";
const env = Deno.env();

export const APP_HOST = env.APP_HOST;
export const APP_PORT = env.APP_PORT;
export const DB_PATH  = env.DB_PATH;