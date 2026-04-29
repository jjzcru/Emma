import { sequelize } from "./db.js";

export const initializeDatabase = async () => {
  try {
    // Connect and verify
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // sync() looks at all models registered via sequelize.define
    // { alter: true } will create the tables if they don't exist
    await sequelize.sync({ alter: true });

    console.log("All tables have been created in the SQLite file.");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};
