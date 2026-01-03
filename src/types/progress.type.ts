import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.type";
import type { ListResponse } from "./list.type";

export type ProgressResponse = Prisma.EnrollmentModuleProgressGetPayload<{
  include: {
    enrollment: true;
    module: true;
  };
}>;

export type ProgressDTO = Pick<ProgressResponse, "enrollmentId" | "moduleId">;

export type ProgressFilter = Filter<ProgressDTO, {}>;

export type ProgressListResponse = ListResponse<ProgressResponse>;