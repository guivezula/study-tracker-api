import { prisma } from "../lib/prisma";

export async function ensureCourseIsEditable(courseId: string) {
  const enrollments = await prisma.enrollment.count({
    where: { courseId, progress: { lt: 100 } },
  });

  if (enrollments > 0) {
    throw new Error(
      "This course already has enrollments and cannot be modified."
    );
  }
}

export async function ensureCourseAllowsNewModules(courseId: string) {
  const enrollments = await prisma.enrollment.count({
    where: { courseId, progress: { lt: 100 } },
  });

  if (enrollments > 0) {
    throw new Error("Cannot add modules to a course with enrollments.");
  }
}
