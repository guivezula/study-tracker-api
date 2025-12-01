import type {
  UserDTO,
  UserFilter,
  UserListResponse,
  UserResponse,
} from "../../models/user.model";
import type { GraphQLContext } from "../context";

export const userResolvers = {
  Query: {
    users: async (
      _: unknown,
      { filter }: { filter: Partial<UserFilter> },
      context: GraphQLContext
    ): Promise<UserListResponse> => {
      return context.userService.getUsers(filter || {});
    },

    user: (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<UserResponse | null> => {
      return context.userService.getUserById(id);
    },
  },

  Mutation: {
    createUser: (
      _: unknown,
      { input }: { input: UserDTO },
      context: GraphQLContext
    ): Promise<UserResponse> => {
      return context.userService.createUser(input);
    },

    updateUser: (
      _: unknown,
      { id, input }: { id: string; input: Partial<UserDTO> },
      context: GraphQLContext
    ): Promise<UserResponse> => {
      return context.userService.updateUser(id, input);
    },

    deleteUser: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<boolean> => {
      await context.userService.deleteUser(id);
      return true;
    },
  },
};
