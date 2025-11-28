import type { IUser, IUserFilter } from "../../models/user.model";
import type { GraphQLContext } from "../context";

export const userResolvers = {
  Query: {
    users: async (
      _: unknown,
      { filter }: { filter: Partial<IUserFilter> },
      context: GraphQLContext
    ) => {
      return context.userService.getUsers(filter || {});
    },

    user: (_: unknown, { id }: { id: string }, context: GraphQLContext) => {
      return context.userService.getUserById(id);
    },
  },

  Mutation: {
    createUser: (
      _: unknown,
      { input }: { input: IUser },
      context: GraphQLContext
    ) => {
      return context.userService.createUser(input);
    },

    updateUser: (
      _: unknown,
      { id, input }: { id: string; input: Partial<IUser> },
      context: GraphQLContext
    ) => {
      return context.userService.updateUser(id, input);
    },

    deleteUser: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ) => {
      await context.userService.deleteUser(id);
      return true;
    },
  },
};
