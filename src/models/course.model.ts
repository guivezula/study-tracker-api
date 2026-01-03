import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.model";
import type { ListResponse } from "./list.model";

export type CourseResponse = Prisma.CourseGetPayload<{
  include: {
    modules: true;
  };
}>;

export type CourseDTO = Pick<CourseResponse, "title" | "description">;

export type CourseFilter = Filter<Pick<CourseDTO, "title">>;

export type CourseListResponse = ListResponse<CourseResponse>;
