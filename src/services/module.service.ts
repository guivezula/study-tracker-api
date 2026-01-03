import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import type {
  ModuleDTO,
  ModuleFilter,
  ModuleListResponse,
  ModuleResponse,
} from "../types/module.type";

export const createModule = async (data: ModuleDTO): Promise<ModuleResponse> => {
    const module = await prisma.module.create({
        data,
    });

    await prisma.course.update({
        where: { id: data.courseId },
        data: {
            totalHours: { increment: module.hours },
        },
    });


    return module;
};

export const getModules = async (
  filter: ModuleFilter
): Promise<ModuleListResponse> => {
  const where: Prisma.ModuleWhereInput = {};

  if (filter?.courseId) {
    where.courseId = filter.courseId;
  }

  const data = await prisma.module.findMany({
    where,
  });

  const total = await prisma.module.count({ where });

  return {
    data,
    total,
  };
};

export const getModuleById = async (id: string): Promise<ModuleResponse | null> => {
    return prisma.module.findUnique({
        where: { id },
    });
};

export const updateModule = async (id: string, data: Partial<ModuleDTO>): Promise<ModuleResponse> => {
    const existingModule = await prisma.module.findUnique({ where: { id } });
    if (!existingModule) {
        throw new Error("Module not found");
    }

    const updatedModule = await prisma.module.update({
        where: { id },
        data,
    });

    if (data.hours && data.hours !== existingModule.hours) {
        const hoursDifference = data.hours - existingModule.hours;
        await prisma.course.update({
            where: { id: existingModule.courseId },
            data: {
                totalHours: { increment: hoursDifference },
            },
        });
    }

    return updatedModule;
};

export const deleteModule = async (id: string): Promise<ModuleResponse> => {
    const existingModule = await prisma.module.findUnique({ where: { id } });
    if (!existingModule) {
        throw new Error("Module not found");
    }

    const deletedModule = await prisma.module.delete({ where: { id } });

    await prisma.course.update({
        where: { id: existingModule.courseId },
        data: {
            totalHours: { decrement: existingModule.hours },
        },
    });

    return deletedModule;
};