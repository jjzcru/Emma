import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { Sequelize } from "sequelize";
// import { MySqlDialect } from '@sequelize/mysql';
//

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const sqliteFilePath =
  process.env.SQLITE_FILE_PATH || join(__dirname, "..", "medicine.sqlite");

export const sequelize = new Sequelize({
  dialect: "sqlite",
  // Path to the database file; it will be created if it doesn't exist
  storage: sqliteFilePath,
  logging: false, // Optional: disable logging SQL queries to the console
});

/*
const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: 'mydb',
  user: 'myuser',
  password: 'mypass',
  host: 'localhost',
  port: 3306,
});

*/
