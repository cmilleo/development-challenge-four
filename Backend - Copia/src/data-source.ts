import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  synchronize: false,
  ssl:
    process.env.NODE_ENV === "production"
      ? {
          rejectUnauthorized: false,
        }
      : false,
  entities: process.env.NODE_ENV === "production" ? ["dir/entities/*.js"] : ["src/entities/*.ts"],
  migrations: process.env.NODE_ENV === "production" ? ["dir/migrations/*.js"] : ["src/migrations/*.ts"],
  subscribers:[]
});

export default AppDataSource;
