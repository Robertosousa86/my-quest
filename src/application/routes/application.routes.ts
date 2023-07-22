import { Router } from 'express';
import { ApplicationController } from '../controllers/application.controller';

const router = Router();

const applicationController = new ApplicationController();

router.post('/applications', applicationController.create);
router.get('/applications', applicationController.findAll);
router.get('/applications/:id', applicationController.findById);
router.patch('/applications/:id', applicationController.update);
router.delete('/applications/:id', applicationController.remove);

export default router;
