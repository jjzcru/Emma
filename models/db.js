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
  dialectOptions: {
    // This ensures PRAGMA is run every time a connection is opened
    socketTimeout: 6000,
  },
  hooks: {
    beforeConnect: async (config) => {
      // Logic before connecting
    },
    afterConnect: (connection, config) => {
      connection.run("PRAGMA foreign_keys = ON;", (err) => {
        if (err) {
          console.error("Failed to enable foreign keys", err);
        } else {
          console.log("🛡️ Foreign keys enabled.");
        }
      });
    },
  },
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
