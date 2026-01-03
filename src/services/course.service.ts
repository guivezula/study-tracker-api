import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import type {
  CourseDTO,
  CourseFilter,
  CourseListResponse,
  CourseResponse,
} from "../types/course.type";

export const createCourse = async (
  data: CourseDTO
): Promise<CourseResponse> => {
  return prisma.course.create({ data, include: { modules: true } });
};

export const getCourses = async (
  filter: CourseFilter
): Promise<CourseListResponse> => {
  const where: Prisma.CourseWhereInput = {};
  let limit: number;
  let skip: number;

  if (filter?.title) {
    where.title = { contains: filter.title };
  }

  if (filter.page && filter.limit) {
    const page = filter.page;
    limit = filter.limit;
    skip = (page - 1) * limit;
  }

  const data = await prisma.course.findMany({
    where,
    take: limit!,
    skip: skip!,
    include: { modules: true },
  });

  const total = await prisma.course.count({ where });

  return {
    data,
    total,
  };
};

export const getCourseById = async (
  id: string
): Promise<CourseResponse | null> => {
  return prisma.course.findUnique({
    where: { id },
    include: { modules: true },
  });
};

export const updateCourse = async (
  id: string,
  data: Partial<CourseDTO>
): Promise<CourseResponse> => {
  return prisma.course.update({
    where: { id },
    data,
    include: { modules: true },
  });
};

export const deleteCourse = async (id: string): Promise<CourseResponse> => {
  return prisma.course.delete({ where: { id }, include: { modules: true } });
};


