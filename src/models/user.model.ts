import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.model";
import type { ListResponse } from "./list.model";

export type UserResponse = Prisma.UserGetPayload<{}>;

export type UserDTO = Pick<UserResponse, "name" | "email">;

export type UserFilter = Filter<UserDTO>;

export type UserListResponse = ListResponse<UserResponse>;
