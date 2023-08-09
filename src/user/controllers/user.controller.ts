import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const roundOfHashing = 10;

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const createuserDto: CreateUserDto = req.body;

      const hashedPassword = await bcrypt.hash(
        createuserDto.password,
        roundOfHashing
      );

      createuserDto.password = hashedPassword;

      await prisma.user.create({ data: createuserDto });

      res.status(200).json({ message: 'User created.' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return res.json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getApplicationsByUserId(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const applications = await prisma.application.findMany({
        where: {
          userId: Number(id),
        },
      });

      return res.status(200).json(applications);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateUserDto: UpdateUserDto = req.body;

      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: updateUserDto,
      });

      return res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await prisma.user.delete({ where: { id: Number(id) } });

      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
