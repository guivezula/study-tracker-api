import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.model";
import type { ListResponse } from "./list.model";

export type ModuleResponse = Prisma.ModuleGetPayload<{}>;

export type ModuleDTO = Pick<
  ModuleResponse,
  "courseId" | "title" | "description" | "hours"
>;

export type ModuleFilter = Filter<Pick<ModuleDTO, "courseId">, {}>;

export type ModuleListResponse = ListResponse<ModuleResponse>;