import type {
  CourseDTO,
  CourseFilter,
  CourseListResponse,
  CourseResponse,
} from "../../models/course.model";
import type { GraphQLContext } from "../context";

export const courseResolver = {
  Query: {
    courses: async (
      _: unknown,
      { filter }: { filter: Partial<CourseFilter> },
      context: GraphQLContext
    ): Promise<CourseListResponse> => {
      return context.courseService.getCourses(filter || {});
    },
    course: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<CourseResponse | null> => {
      return context.courseService.getCourseById(id);
    },
  },
  Mutation: {
    createCourse: async (
      _: unknown,
      { input }: { input: CourseDTO },
      context: GraphQLContext
    ): Promise<CourseResponse> => {
      return context.courseService.createCourse(input);
    },
    updateCourse: async (
      _: unknown,
      { id, input }: { id: string; input: Partial<CourseDTO> },
      context: GraphQLContext
    ): Promise<CourseResponse> => {
      return context.courseService.updateCourse(id, input);
    },
    deleteCourse: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<boolean> => {
      await context.courseService.deleteCourse(id);
      return true;
    },
  },
};
