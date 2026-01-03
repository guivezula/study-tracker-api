import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import type {
  ProgressDTO,
  ProgressFilter,
  ProgressListResponse,
  ProgressResponse,
} from "../types/progress.type";

export const startModuleProgress = async (
  data: ProgressDTO
): Promise<ProgressResponse> => {
  return prisma.enrollmentModuleProgress.create({
    data,
    include: {
      enrollment: true,
      module: true,
    },
  });
};

export const completeModuleProgress = async (
  id: string
): Promise<ProgressResponse> => {
  const progress = await prisma.enrollmentModuleProgress.update({
    where: { id },
    data: { completed: true },
    include: {
      enrollment: {
        include: { course: true, user: true },
      },
      module: true,
    },
  });

  const increment =
    (progress.module.hours / progress.enrollment.course.totalHours) * 100;

  await prisma.enrollment.update({
    where: { id: progress.enrollmentId },
    data: {
      progress: {
        increment,
      },
    },
  });

  progress.enrollment.progress += increment;

  return progress;
};

export const getModuleProgress = async (
  filter: ProgressFilter
): Promise<ProgressListResponse> => {
  const where: Prisma.EnrollmentModuleProgressWhereInput = {};

  if (filter?.enrollmentId) {
    where.enrollmentId = filter.enrollmentId;
  }

  if (filter?.moduleId) {
    where.moduleId = filter.moduleId;
  }

  const data = await prisma.enrollmentModuleProgress.findMany({
    where,
    include: {
      enrollment: {
        include: { course: true, user: true },
      },
      module: true,
    },
  });

  const total = await prisma.enrollmentModuleProgress.count({ where });

  return {
    data,
    total,
  };
};

export const getModuleProgressById = async (
  id: string
): Promise<ProgressResponse | null> => {
  return prisma.enrollmentModuleProgress.findUnique({
    where: { id },
    include: {
      enrollment: {
        include: { course: true, user: true },
      },
      module: true,
    },
  });
};

export const deleteModuleProgress = async (
  id: string
): Promise<ProgressResponse> => {
  return prisma.enrollmentModuleProgress.delete({
    where: { id },
    include: {
      enrollment: {
        include: { course: true, user: true },
      },
      module: true,
    },
  });
};
