import * as courseService from "../services/course.service";
import * as enrollmentService from "../services/enrollment.service";
import * as moduleService from "../services/module.service";
import * as progressService from "../services/progress.service";
import * as userService from "../services/user.service";

interface IGraphQLContext {
  userService: typeof userService;
  courseService: typeof courseService;
  moduleService: typeof moduleService;
  enrollmentService: typeof enrollmentService;
  progressService: typeof progressService;
}

export type GraphQLContext = IGraphQLContext;

export function createContext(): GraphQLContext {
  return {
    userService,
    courseService,
    moduleService,
    enrollmentService,
    progressService,
  };
}
