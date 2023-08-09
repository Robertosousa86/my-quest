import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

const userController = new UserController();

router.post('/users', userController.create);
router.get('/users', userController.findAll);
router.get('/users/:id', userController.findById);
router.get('/users/:id/applications', userController.getApplicationsByUserId);
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

export default router;
