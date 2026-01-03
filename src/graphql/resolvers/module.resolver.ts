import type {
  ModuleDTO,
  ModuleFilter,
  ModuleListResponse,
  ModuleResponse,
} from "../../types/module.type";
import type { GraphQLContext } from "../context";

export const moduleResolver = {
  Query: {
    modules: async (
      _: unknown,
      { filter }: { filter: Partial<ModuleFilter> },
      context: GraphQLContext
    ): Promise<ModuleListResponse> => {
      return context.moduleService.getModules(filter || {});
    },
    module: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<ModuleResponse | null> => {
      return context.moduleService.getModuleById(id);
    },
  },
  Mutation: {
    createModule: async (
      _: unknown,
      { input }: { input: ModuleDTO },
      context: GraphQLContext
    ): Promise<ModuleResponse> => {
      return context.moduleService.createModule(input);
    },
    updateModule: async (
      _: unknown,
      { id, input }: { id: string; input: Partial<ModuleDTO> },
      context: GraphQLContext
    ): Promise<ModuleResponse> => {
      return context.moduleService.updateModule(id, input);
    },
    deleteModule: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<boolean> => {
      await context.moduleService.deleteModule(id);
      return true;
    },
  },
};
