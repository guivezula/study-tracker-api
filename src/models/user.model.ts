import type { Prisma } from "@prisma/client";

interface IUserDTO {
  name: string;
  email: string;
}
export type UserDTO = IUserDTO;

export type UserResponse = Prisma.UserGetPayload<{}>;

interface IUserFilter {
  name: string;
  email: string;
  page: number;
  limit: number;
}

export type UserFilter = IUserFilter;

interface IUserListResponse {
  data: UserResponse[];
  total: number;
}

export type UserListResponse = IUserListResponse;
