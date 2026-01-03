import type { Prisma } from "@prisma/client";
import type { Filter } from "./filter.type";
import type { ListResponse } from "./list.type";

export type UserResponse = Prisma.UserGetPayload<{}>;

export type UserDTO = Pick<UserResponse, "name" | "email">;

export type UserFilter = Filter<UserDTO>;

export type UserListResponse = ListResponse<UserResponse>;
