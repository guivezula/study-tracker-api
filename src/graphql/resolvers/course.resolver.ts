import type { ICourse, ICourseFilter } from "../../models/course.model";
import type { GraphQLContext } from "../context";

export const courseResolver = {
  Query: {
    courses: async (_: unknown, { filter }: { filter: Partial<ICourseFilter> }, context: GraphQLContext) => {
      return context.courseService.getCourses(filter || {});
    },
    course: async (_: unknown, { id }: { id: string }, context: GraphQLContext) => {
      return context.courseService.getCourseById(id);
    },
  },
  Mutation: {
    createCourse: async (_: unknown, { input }: { input: ICourse }, context: GraphQLContext) => {
        return context.courseService.createCourse(input);
    },
    updateCourse: async (_: unknown, { id, input }: { id: string; input: Partial<ICourse> }, context: GraphQLContext) => {
        return context.courseService.updateCourse(id, input);
    },
    deleteCourse: async (_: unknown, { id }: { id: string }, context: GraphQLContext) => {
        await context.courseService.deleteCourse(id);
        return true;
    },
  },
};