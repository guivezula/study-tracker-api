import type { Request, Response } from 'express';
import * as courseService from '../../services/course.service';

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getCourses = async (req: Request, res: Response) => {
  const courses = await courseService.getCourses(req.query);
  res.json(courses);
};

export const getCourseById = async (req: Request, res: Response) => {
  const course = await courseService.getCourseById(req.params.id!);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json(course);
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseService.updateCourse(req.params.id!, req.body);
    res.json(course);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseService.deleteCourse(req.params.id!);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.status(204).send('Course deleted successfully');
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
