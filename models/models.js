import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      field: "password_hash",
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("patient", "doctor"), // Sequelize handles the CHECK constraint logic
      defaultValue: "doctor",
      field: "type",
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
    },
    age: {
      type: DataTypes.INTEGER,
      field: "age",
      allowNull: false,
    },
  },
  { timestamps: false },
);

export const Medicines = sequelize.define(
  "medicines",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name",
    },
    dose: {
      type: DataTypes.STRING,
      field: "dose",
      allowNull: false,
    },
  },
  { timestamps: false },
);

export const Records = sequelize.define(
  "records",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
    },
    medicineId: {
      type: DataTypes.INTEGER,
      field: "medicine_id",
    },
    dateTime: {
      type: DataTypes.DATE,
      field: "date_time",
      defaultValue: DataTypes.NOW,
    },
    state: {
      type: DataTypes.ENUM("pending", "taken"),
      field: "state",
      defaultValue: "pending",
    },
  },
  { timestamps: false },
);

// --- Associations ---
Users.hasMany(Records, { foreignKey: "userId" });
Records.belongsTo(Users, { foreignKey: "userId" }); // Changed Patients to Users

Medicines.hasMany(Records, { foreignKey: "medicineId" });
Records.belongsTo(Medicines, { foreignKey: "medicineId" });
