import { Router } from 'express';
import * as EnrollmentController from '../controllers/enrollment.controller';

const router = Router();

router.post('/', EnrollmentController.createEnrollment);
router.get('/', EnrollmentController.getEnrollments);
router.get('/:id', EnrollmentController.getEnrollmentById);
router.delete('/:id', EnrollmentController.deleteEnrollment);

export default router;