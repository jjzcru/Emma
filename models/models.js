import { DataTypes } from "sequelize";
import { sequelize } from "./db";

export const Patients = sequelize.define("patients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    field: "name",
  },
  age: {
    type: DataTypes.INTEGER,
    field: "age",
  },
});

export const Medicines = sequelize.define("medicines", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    field: "name",
  },
  dose: {
    type: DataTypes.STRING,
    field: "dose",
  },
});

export const Records = sequelize.define("records", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  patientId: {
    type: DataTypes.INTEGER,
    field: "patient_id",
    references: {
      model: "patient", // Matches the table name
      key: "id",
    },
  },
  medicineId: {
    type: DataTypes.INTEGER,
    field: "medicine_id",
    references: {
      model: "medicine", // Matches the table name
      key: "id",
    },
  },
  timesStamp: {
    type: DataTypes.DATE,
    field: "timestamp",
    defaultValue: DataTypes.NOW,
  },
  state: {
    type: DataTypes.STRING,
    field: "state",
    defaultValue: "pending",
  },
});

Patient.hasMany(Record, { foreignKey: "patientId" });
Record.belongsTo(Patient, { foreignKey: "patientId" });

Medicine.hasMany(Record, { foreignKey: "medicineId" });
Record.belongsTo(Medicine, { foreignKey: "medicineId" });
