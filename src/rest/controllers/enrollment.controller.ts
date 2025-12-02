import type { Request, Response } from 'express';
import * as enrollmentService from '../../services/enrollment.service';

export const createEnrollment = async (req: Request, res: Response) => {
  try {
    const enrollment = await enrollmentService.createEnrollment(req.body);
    res.status(201).json(enrollment);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getEnrollments = async (req: Request, res: Response) => {
  const enrollments = await enrollmentService.getEnrollments(req.query);
  res.json(enrollments);
};

export const getEnrollmentById = async (req: Request, res: Response) => {
  const enrollment = await enrollmentService.getEnrollmentById(req.params.id!);
  if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
  res.json(enrollment);
};

export const deleteEnrollment = async (req: Request, res: Response) => {
  try {
    const enrollment = await enrollmentService.deleteEnrollment(req.params.id!);
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    res.status(204).send('Enrollment deleted successfully');
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
