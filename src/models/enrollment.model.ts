import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.model";
import type { ListResponse } from "./list.model";

export type EnrollmentResponse = Prisma.EnrollmentGetPayload<{
  include: {
    user: true;
    course: true;
  };
}>;

export type EnrollmentDTO = Pick<EnrollmentResponse, "courseId" | "userId">;

export type EnrollmentFilter = Filter<
  Pick<EnrollmentResponse, "courseId" | "userId">,
  {}
>;

export type EnrollmentListResponse = ListResponse<EnrollmentResponse>;