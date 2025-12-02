import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { courseResolver } from "./resolvers/course.resolver";
import { enrollmentResolver } from "./resolvers/enrollment.resolver";
import { moduleResolver } from "./resolvers/module.resolver";
import { progressResolver } from "./resolvers/progress.resolver";
import { userResolvers } from "./resolvers/user.resolver";

// Load SDL from .graphql file
const typeDefs = loadFilesSync("src/graphql/typeDefs/**/*.graphql");

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [
    userResolvers,
    courseResolver,
    moduleResolver,
    enrollmentResolver,
    progressResolver,
  ],
});
