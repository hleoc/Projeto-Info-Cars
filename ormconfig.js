require("dotenv/config");

const postgre = {
  name: process.env.POSTGRES_DB_NAME,
  type: "postgres",
  host: process.env.NODE_ENV === "dev" ? "localhost" : "db",
  port: process.env.NODE_ENV === "dev" ? "5433" : "5432",
  username: process.env.POSTGRES_DB_USERNAME,
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DB_DATABASE,
  entities: ["./src/modules/**/infra/typeorm/models/*{.ts,.js}"],
  migrations: ["./src/shared/infra/typeorm/migrations/*{.ts,.js}"],
  cli: {
    migrationsDir: "./src/shared/infra/typeorm/migrations",
  },
};

module.exports = [postgre];
