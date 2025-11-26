import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import type { IUser, IUserFilter } from "../model/user.model";

export const createUser = async (data: IUser): Promise<IUser> => {
  return prisma.user.create({ data });
};

export const getUsers = async (filters: Partial<IUserFilter>): Promise<IUser[]> => {
  const where: Prisma.UserWhereInput = {};

  if (filters?.email) {
    where.email = { contains: filters.email };
  }

  if (filters?.name) {
    where.name = { contains: filters.name };
  }
  return prisma.user.findMany({ where });
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
