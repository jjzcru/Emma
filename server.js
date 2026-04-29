import { fileURLToPath } from "url";
import { join, dirname } from "path";
import express from "express";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// // Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("index", { message: "Hello, World!" });
});
// app.use(express.static(__dirname));

// Rutas
// app.use("/api/usuarios", usuariosRoutes);
