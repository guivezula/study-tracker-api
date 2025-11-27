import type { Request, Response } from "express";
import * as UserService from "../../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserService.getUsers(req.query);
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await UserService.getUserById(req.params.id!);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.updateUser(req.params.id!, req.body);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.deleteUser(req.params.id!);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
