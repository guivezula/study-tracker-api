import * as courseService from "../services/course.service";
import * as userService from "../services/user.service";

export interface GraphQLContext {
  userService: typeof userService;
  courseService: typeof courseService;
}

export function createContext(): GraphQLContext {
  return {
    userService,
    courseService,
  };
}
