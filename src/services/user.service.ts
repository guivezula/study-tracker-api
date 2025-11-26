import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import type { IUser, IUserFilter, IUserResponse } from "../model/user.model";

export const createUser = async (data: IUser): Promise<IUser> => {
  return prisma.user.create({ data });
};

export const getUsers = async (
  filters: Partial<IUserFilter>
): Promise<IUserResponse> => {
  const where: Prisma.UserWhereInput = {};
  let limit: number;
  let skip: number;

  if (filters?.email) {
    where.email = { contains: filters.email };
  }

  if (filters?.name) {
    where.name = { contains: filters.name };
  }

  if (filters.page && filters.limit) {
    const page = filters.page;
    limit = filters.limit;
    skip = (page - 1) * limit;
  }

  const data = await prisma.user.findMany({ where, take: limit!, skip: skip! });

  const total = await prisma.user.count({ where });

  return {
    data,
    total,
  };
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  return prisma.user.findUnique({ where: { id } });
};

export const updateUser = async (
  id: string,
  data: Partial<IUser>
): Promise<IUser> => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUser = async (id: string): Promise<IUser> => {
  return prisma.user.delete({ where: { id } });
};
