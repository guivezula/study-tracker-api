import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.model";
import type { ListResponse } from "./list.model";

export type ProgressResponse = Prisma.EnrollmentModuleProgressGetPayload<{
  include: {
    enrollment: true;
    module: true;
  };
}>;

export type ProgressDTO = Pick<ProgressResponse, "enrollmentId" | "moduleId">;

export type ProgressFilter = Filter<ProgressDTO, {}>;

export type ProgressListResponse = ListResponse<ProgressResponse>;