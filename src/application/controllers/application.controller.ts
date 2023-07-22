import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { ApplicationDTO } from '../dto/create-application.dto';
import { UpdateApplicationDto } from '../dto/update-application.dto';

const prisma = new PrismaClient();

export class ApplicationController {
  async create(req: Request, res: Response) {
    const data: ApplicationDTO = req.body;

    const application = await prisma.application.create({ data });

    return res.json(application);
  }

  async findAll(req: Request, res: Response) {
    const applications = await prisma.application.findMany();

    return res.json(applications);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const application = await prisma.application.findUnique({
      where: { id: Number(id) },
    });
    return res.json(application);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const updateApplicationDto: UpdateApplicationDto = req.body;

    const updatedApplication = await prisma.application.update({
      where: { id: Number(id) },
      data: updateApplicationDto,
    });

    return res.status(200).json(updatedApplication);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;

    const application = await prisma.application.delete({
      where: { id: Number(id) },
    });

    return res.json(application);
  }
}
