require("dotenv").load();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/monster-truck-demo-2'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
