import type { Prisma } from "@prisma/client";

interface IEnrollmentDTO {
    userId: string;
    courseId: string;
}

export type EnrollmentDTO = IEnrollmentDTO;

export type EnrollmentResponse = Prisma.EnrollmentGetPayload<{
    include: {
        user: true;
        course: true;
    };
}>;

export type EnrollmentFilter = IEnrollmentDTO & { completed: boolean };

interface IEnrollmentListResponse {
    data: EnrollmentResponse[];
    total: number;
}

export type EnrollmentListResponse = IEnrollmentListResponse;