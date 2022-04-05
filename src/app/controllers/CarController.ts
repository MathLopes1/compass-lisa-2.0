import { Request, Response } from 'express';
import {
  Controller, Post, Get, Put, Delete,
} from '@decorators/express';
import { Inject } from '@decorators/di';

import CarService from '../services/CarServices';
import { ICarService } from '../interfaces/Car/ICarService';
import { Icar } from '../interfaces/Car/ICar';

import CarValidationBody from '../validations/CarValidations/CarBody';
import CarValidationFind from '../validations/CarValidations/CarFind';

@Controller('/car')
class CarController {
  private readonly carService: ICarService;

  constructor(@Inject(CarService) carService: ICarService) {
    this.carService = carService;
  }

  @Post('/', [CarValidationBody])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const car: Icar = req.body;
      const result = await this.carService.create(car);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @Get('/', [CarValidationFind])
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.carService.find();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @Get('/:id', [CarValidationFind])
  async findId(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result = await this.carService.findId(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @Put('/:id', [CarValidationBody])
  async updated(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const payload = req.body;

      const result = await this.carService.updated(id, payload);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @Delete('/:id')
  async delete(req: Request, res: Response): Promise<object> {
    try {
      const { id } = req.params;
      await this.carService.delete(id);

      return res.status(204).end();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default CarController;
