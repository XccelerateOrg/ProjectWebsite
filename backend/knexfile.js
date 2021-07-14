// Update with your config settings.

module.exports = {
  development: {
    client: "postgres",
    connection: {
      database: "projects",
      user: "postgres",
      password: "postgres",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "projects",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
