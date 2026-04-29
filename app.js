import { config } from "dotenv";
config();

import { app } from "./server.js";
import { initializeDatabase } from "./models/init.js";

const PORT = process.env.PORT || 3000;

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Servidor de Control de Medicamentos corriendo en el puerto ${PORT}`,
      );
    });
  })
  .catch(console.error);
