import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.type";
import type { ListResponse } from "./list.type";

export type CourseResponse = Prisma.CourseGetPayload<{
  include: {
    modules: true;
  };
}>;

export type CourseDTO = Pick<CourseResponse, "title" | "description">;

export type CourseFilter = Filter<Pick<CourseDTO, "title">>;

export type CourseListResponse = ListResponse<CourseResponse>;
