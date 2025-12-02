import type { Request, Response } from 'express';
import * as progressService from '../../services/progress.service';

export const startModuleProgress = async (req: Request, res: Response) => {
  try {
    const progress = await progressService.startModuleProgress(req.body);
    res.status(201).json(progress);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getModuleProgress = async (req: Request, res: Response) => {
  const progress = await progressService.getModuleProgress(req.query);
  res.json(progress);
};

export const getModuleProgressById = async (req: Request, res: Response) => {
  const progress = await progressService.getModuleProgressById(req.params.id!);
  if (!progress) return res.status(404).json({ error: 'Module Progress not found' });
  res.json(progress);
};

export const completeModuleProgress = async (req: Request, res: Response) => {
  try {
    const progress = await progressService.completeModuleProgress(req.params.id!);
    res.json(progress);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteModuleProgress = async (req: Request, res: Response) => {
  try {
    const progress = await progressService.deleteModuleProgress(req.params.id!);
    if (!progress) return res.status(404).json({ error: 'Module Progress not found' });
    res.status(204).send('Module Progress deleted successfully');
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
