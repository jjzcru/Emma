import { sequelize } from "./db.js";
import "./models.js";

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.query("PRAGMA foreign_keys = ON;");
    console.log("✅ Connection established.");

    // Sync models
    await sequelize.sync();
    console.log("✅ Database synced.");

    // Optional: Double check Foreign Keys are actually ON
    const result = await sequelize.query("PRAGMA foreign_keys;");
    const status = result[0]?.foreign_keys === 1 ? "ON" : "OFF";
    console.log("Foreign Key Status:", status);
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};
