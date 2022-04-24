import { Request, Response } from 'express';
import {
  Controller, Post, Get, Put, Delete, Patch,
} from '@decorators/express';
import { Inject } from '@decorators/di';

import CarService from '../services/CarServices';
import { ICarService } from '../interfaces/Car/ICarService';
import { Icar } from '../interfaces/Car/ICar';

import CarValidationBody from '../validations/CarValidations/CarBody';
import CarValidationFind from '../validations/CarValidations/CarFind';
import IdValidation from '../validations/IdValidation';
import ValidationPatchCar from '../validations/CarValidations/CarPatch';
import TokenBearer from '../middlewares/BearerToken';

@Controller('/car', [TokenBearer])
class CarController {
  private readonly carService: ICarService;

  constructor(@Inject(CarService) carService: ICarService) {
    this.carService = carService;
  }

  @Post('/', [CarValidationBody])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const car: Icar = req.body;
      const result: Icar = await this.carService.create(car);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Get('/', [CarValidationFind])
  async find(req: Request, res: Response): Promise<Response> {
    const search = req.query;
    try {
      const result: Icar | Icar[] = await this.carService.find(search);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Get('/:id', [IdValidation, CarValidationFind])
  async findId(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result: Icar = await this.carService.findId(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Put('/:id', [IdValidation, CarValidationBody])
  async updated(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const payload: Icar = req.body;

      const result = await this.carService.updated(id, payload);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Delete('/:id', [IdValidation])
  async delete(req: Request, res: Response): Promise<object> {
    try {
      const { id } = req.params;
      await this.carService.delete(id);

      return res.status(204).end();
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Patch('/:id/acessorios/:accessoryId', [ValidationPatchCar])
  async updateAccessory(req: Request, res: Response): Promise<Response> {
    try {
      const { id, accessoryId } = req.params;
      const payload = req.body;
      const result = await this.carService.updatedAccessory(id, accessoryId, payload);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

export default CarController;
