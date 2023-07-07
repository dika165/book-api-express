module.exports = {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'mauFJcuf5dhRMQrjj',
      database: 'book-api'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:"migrations",
    }
  };