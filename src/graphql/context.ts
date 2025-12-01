import * as courseService from "../services/course.service";
import * as userService from "../services/user.service";

interface IGraphQLContext {
  userService: typeof userService;
  courseService: typeof courseService;
}

export type GraphQLContext = IGraphQLContext;

export function createContext(): GraphQLContext {
  return {
    userService,
    courseService,
  };
}
