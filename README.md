# Deno server boilerplate

> Deno server boilerplate with easy connection to MongoDB and routes to more common uses

## Project description

The idea is to use Deno create a https server boilerplate with connection to MongoDB, login and register and some public and private routes.

## Related links

- [Deno](https://deno.land/)
- [oak](https://github.com/oakserver/oak/) - Web framework for Deno
- [dotenv](https://deno.land/x/dotenv/dotenv.ts) - For env variables
- [djwt](https://deno.land/x/djwt) - Token generation
- [mongo](https://deno.land/x/mongo@v0.5.2/) - Connection for MongoDB

## Configuration

Needed to configure a .env file with like this:

APP_HOST='127.0.0.1'
APP_PORT=4000
DB_PATH='mongodbpath'
SECRET='secretkeyforjwt'

## Automatic reload

deno install denon --allow-read --allow-run https://deno.land/x/denon/denon.ts
To install denon and 
denon --allow-net --allow-read server/server.ts
To start automatic reload

## License

[MIT](https://opensource.org/licenses/mit-license)
