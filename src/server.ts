import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import app from "./app";
import { swaggerSpec } from "./rest/docs/swagger.config";

dotenv.config();

const PORT = process.env.PORT;

// --------- SWAGGER ----------------

if (process.env.NODE_ENV !== "test") {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🟦 REST:     http://localhost:${PORT}/api`);
  console.log(`🟪 GraphQL:  http://localhost:${PORT}/query`);
});
