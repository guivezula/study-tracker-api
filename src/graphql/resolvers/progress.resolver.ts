

import type {
  ProgressDTO,
  ProgressFilter,
  ProgressListResponse,
  ProgressResponse,
} from "../../types/progress.type";
import type { GraphQLContext } from "../context";

export const progressResolver = {
  Query: {
    progresses: async (
      _: unknown,
      { filter }: { filter: Partial<ProgressFilter> },
      context: GraphQLContext
    ): Promise<ProgressListResponse> => {
      return context.progressService.getModuleProgress(filter || {});
    },
    progress: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<ProgressResponse | null> => {
      return context.progressService.getModuleProgressById(id);
    },
  },
  Mutation: {
    startModuleProgress: async (
      _: unknown,
      { input }: { input: ProgressDTO },
      context: GraphQLContext
    ): Promise<ProgressResponse> => {
      return context.progressService.startModuleProgress(input);
    },
    completeModuleProgress: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<ProgressResponse> => {
      return await context.progressService.completeModuleProgress(id);
    },
    deleteModuleProgress: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<boolean> => {
      await context.progressService.deleteModuleProgress(id);
      return true;
    },
  },
};
