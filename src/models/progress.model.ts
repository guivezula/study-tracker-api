import type { Prisma } from "@prisma/client";

interface IProgressDTO {
    enrollmentId: string;
    moduleId: string;
}

export type ProgressDTO = IProgressDTO;

export type ProgressResponse = Prisma.EnrollmentModuleProgressGetPayload<{
    include: {
        enrollment: true,
        module: true,
    }
}>

export type ProgressFilter = IProgressDTO;

interface IProgressListResponse {
    data: ProgressResponse[];
    total: number;
}

export type ProgressListResponse = IProgressListResponse;