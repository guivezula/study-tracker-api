import type { Prisma } from "@prisma/client";

interface IModuleDTO {
    courseId: string;
    title: string;
    description?: string;
    hours: number;
}

export type ModuleDTO = IModuleDTO;

export type ModuleResponse = Prisma.ModuleGetPayload<{}>;

interface IModuleFilter {
    courseId: string;
}

export type ModuleFilter = IModuleFilter;

interface IModuleListResponse {
    data: ModuleResponse[];
    total: number;
}

export type ModuleListResponse = IModuleListResponse;