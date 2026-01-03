
import type {
  EnrollmentDTO,
  EnrollmentFilter,
  EnrollmentListResponse,
  EnrollmentResponse,
} from "../../types/enrollment.type";
import type { GraphQLContext } from "../context";

export const enrollmentResolver = {
  Query: {
    enrollments: async (
      _: unknown,
      { filter }: { filter: Partial<EnrollmentFilter> },
      context: GraphQLContext
    ): Promise<EnrollmentListResponse> => {
      return context.enrollmentService.getEnrollments(filter || {});
    },
    enrollment: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<EnrollmentResponse | null> => {
      return context.enrollmentService.getEnrollmentById(id);
    },
  },
  Mutation: {
    createEnrollment: async (
      _: unknown,
      { input }: { input: EnrollmentDTO },
      context: GraphQLContext
    ): Promise<EnrollmentResponse> => {
      return context.enrollmentService.createEnrollment(input);
    },
    deleteEnrollment: async (
      _: unknown,
      { id }: { id: string },
      context: GraphQLContext
    ): Promise<boolean> => {
      await context.enrollmentService.deleteEnrollment(id);
      return true;
    },
  },
};
