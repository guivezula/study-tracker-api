import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.type";
import type { ListResponse } from "./list.type";

export type ModuleResponse = Prisma.ModuleGetPayload<{}>;

export type ModuleDTO = Pick<
  ModuleResponse,
  "courseId" | "title" | "description" | "hours"
>;

export type ModuleFilter = Filter<Pick<ModuleDTO, "courseId">, {}>;

export type ModuleListResponse = ListResponse<ModuleResponse>;