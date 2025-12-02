import { Router } from 'express';
import * as ProgressController from '../controllers/progress.controller';

const router = Router();

router.post('/', ProgressController.startModuleProgress);
router.get('/', ProgressController.getModuleProgress);
router.get('/:id', ProgressController.getModuleProgressById);
router.put('/:id', ProgressController.completeModuleProgress); 
router.delete('/:id', ProgressController.deleteModuleProgress);

export default router;