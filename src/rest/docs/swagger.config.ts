// src/docs/swagger.config.ts
import path from "path";
import swaggerJsdoc from "swagger-jsdoc";
import { fileURLToPath } from "url";

// recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Study Tracker API - REST Docs",
      version: "1.0.0",
    },
  },
  apis: [
    path.join(__dirname, "../routes/*.ts"),
    path.join(__dirname, "./**/*.yaml"),
  ],
};

export const swaggerSpec = swaggerJsdoc(options);
