import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import path from "path";

// Load SDL from .graphql file
const typeDefs = readFileSync(
  path.join(process.cwd(), "src/graphql/schema.graphql"),
  { encoding: "utf8" }
);

// Resolvers will be added later
const resolvers = {
  Query: {},
  Mutation: {},
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
