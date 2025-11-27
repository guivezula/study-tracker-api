import * as userService from "../services/user.service";

export interface GraphQLContext {
  userService: typeof userService;
}

export function createContext(): GraphQLContext {
  return {
    userService,
  };
}
