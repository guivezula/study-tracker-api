import { Router } from 'express';
import * as CourseController from '../controllers/course.controller';

const router = Router();

router.post('/', CourseController.createCourse);
router.get('/', CourseController.getCourses);
router.get('/:id', CourseController.getCourseById);
router.put('/:id', CourseController.updateCourse);
router.delete('/:id', CourseController.deleteCourse);

export default router;