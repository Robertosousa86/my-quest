import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

const prisma = new PrismaClient();

export class UserController {
  async create(req: Request, res: Response) {
    const data: CreateUserDto = req.body;

    const user = await prisma.user.create({ data });

    return res.status(200).json(user);
  }

  async findAll(req: Request, res: Response) {
    const users = await prisma.user.findMany();

    return res.json(users);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await prisma.user.findUnique({ where: { id: Number(id) } });

    return res.status(200).json(user);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const updateUserDto: UpdateUserDto = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: updateUserDto,
    });

    return res.status(200).json(updatedUser);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;

    const user = await prisma.user.delete({ where: { id: Number(id) } });

    return res.status(200).json(user);
  }
}
