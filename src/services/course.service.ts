import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import type { ICourse, ICourseFilter, ICourseResponse } from "../models/course.model";

export const createCourse = async (data: ICourse): Promise<ICourse> => {
  return prisma.course.create({ data });
}

export const getCourses = async (filter: Partial<ICourseFilter>): Promise<ICourseResponse> => {
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

    const data = await prisma.course.findMany({ where, take: limit!, skip: skip! });

    const total = await prisma.course.count({ where });

    return {
        data,
        total,
    };
}


export const getCourseById = async (id: string): Promise<ICourse | null> => {
  return prisma.course.findUnique({ where: { id } });
}

export const updateCourse = async (id: string, data: Partial<ICourse>): Promise<ICourse> => {
    return prisma.course.update({
        where: { id },
        data,
    });
}

export const deleteCourse = async (id: string): Promise<ICourse> => {
    return prisma.course.delete({ where: { id } });
}


