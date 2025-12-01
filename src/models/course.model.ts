import type { Prisma } from "@prisma/client";

interface ICourseDTO {
  title: string;
  description?: string;
}

export type CourseDTO = ICourseDTO;

export type CourseResponse = Prisma.CourseGetPayload<{
  include: {
    modules: true;
  };
}>;

interface ICourseFilter {
  title: string;
  page: number;
  limit: number;
}

export type CourseFilter = ICourseFilter;

interface ICourseListResponse {
  data: CourseResponse[];
  total: number;
}

export type CourseListResponse = ICourseListResponse;
