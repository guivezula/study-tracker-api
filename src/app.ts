import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { createContext } from "./graphql/context";
import { schema } from "./graphql/schema";
import userRoutes from "./rest/routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());

// --------- REST endpoints ---------
app.use("/api/users", userRoutes);

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
