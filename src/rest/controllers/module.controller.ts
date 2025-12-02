import type { Request, Response } from 'express';
import * as moduleService from '../../services/module.service';

export const createModule = async (req: Request, res: Response) => {
  try {
    const module = await moduleService.createModule(req.body);
    res.status(201).json(module);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getModules = async (req: Request, res: Response) => {
  const modules = await moduleService.getModules(req.query);
  res.json(modules);
};

export const getModuleById = async (req: Request, res: Response) => {
  const module = await moduleService.getModuleById(req.params.id!);
  if (!module) return res.status(404).json({ error: 'Module not found' });
  res.json(module);
};

export const updateModule = async (req: Request, res: Response) => {
  try {
    const module = await moduleService.updateModule(req.params.id!, req.body);
    res.json(module);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteModule = async (req: Request, res: Response) => {
  try {
    const module = await moduleService.deleteModule(req.params.id!);
    if (!module) return res.status(404).json({ error: 'Module not found' });
    res.status(204).send('Module deleted successfully');
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
