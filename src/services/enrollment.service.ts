import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import type { EnrollmentDTO, EnrollmentFilter, EnrollmentListResponse, EnrollmentResponse } from "../models/enrollment.model";

export const createEnrollment = async (
  data: EnrollmentDTO
): Promise<EnrollmentResponse> => {
  return prisma.enrollment.create({
    data,
    include: {
      user: true,
      course: true,
    },
  });
};

export const getEnrollments = async (filter: Partial<EnrollmentFilter>): Promise<EnrollmentListResponse> => {
    const where: Prisma.EnrollmentWhereInput = {};

    if (filter?.userId) {
        where.userId = filter.userId;
    }

    if (filter?.courseId) {
        where.courseId = filter.courseId;
    }

    const data = await prisma.enrollment.findMany({
        where,
        include: {
            user: true,
            course: true,
        },
    });

    const total = await prisma.enrollment.count({ where });

    return {
        data,
        total,
    };
};

export const getEnrollmentById = async (
  id: string
): Promise<EnrollmentResponse | null> => {
  return prisma.enrollment.findUnique({
    where: { id },
    include: {
      user: true,
      course: true,
    },
  });
};

export const deleteEnrollment = async (id: string): Promise<EnrollmentResponse> => {
    return prisma.enrollment.delete({
        where: { id },
        include: {
            user: true,
            course: true,
        },
    });
};