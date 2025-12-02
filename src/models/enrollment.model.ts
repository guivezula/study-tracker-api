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

interface IEnrollmentFilter {
    userId: string;
    courseId: string;
}

export type EnrollmentFilter = IEnrollmentFilter;

interface IEnrollmentListResponse {
    data: EnrollmentResponse[];
    total: number;
}

export type EnrollmentListResponse = IEnrollmentListResponse;