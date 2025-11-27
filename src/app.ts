import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import swaggerUi from "swagger-ui-express";
import { createContext } from "./graphql/context";
import { schema } from "./graphql/schema";
import { swaggerSpec } from "./rest/docs/swagger.config";
import userRoutes from "./rest/routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());

// --------- REST endpoints ---------
app.use("/api/users", userRoutes);

// --------- SWAGGER ----------------

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// --------- GraphQL Endpoint ---------

app.use(
  "/query",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== "production",
    context: createContext(),
  })
);

export default app;
