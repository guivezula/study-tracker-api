import { prisma } from "../lib/prisma";

export async function ensureModuleIsEditable(moduleId: string) {
  const existsProgress = await prisma.enrollmentModuleProgress.count({
    where: { moduleId, completed: false },
  });

  if (existsProgress > 0) {
    throw new Error("This module has progress records and cannot be edited.");
  }
}

export async function ensureModuleCanBeDeleted(moduleId: string) {
  const existsProgress = await prisma.enrollmentModuleProgress.count({
    where: { moduleId, completed: false },
  });

  if (existsProgress > 0) {
    throw new Error("Cannot delete a module that has progress recorded.");
  }
}
