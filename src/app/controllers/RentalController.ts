import { Request, Response } from 'express';
import {
  Controller, Post, Get, Put, Delete,
} from '@decorators/express';

import { Inject } from '@decorators/di';

import RentalService from '../services/RentalService';
import { IRental } from '../interfaces/Rental/IRental';
import { IRentalService } from '../interfaces/Rental/IRentalService';

import RentalValidationBody from '../validations/RentalValidations/RentalBody';

@Controller('/rental')
class RentalController {
  private readonly rentalService: IRentalService;

  constructor(@Inject(RentalService) rentalService: IRentalService) {
    this.rentalService = rentalService;
  }

  @Post('/', [RentalValidationBody])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const rental: IRental = req.body;
      const result = await this.rentalService.create(rental);
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

  @Get('/')
  async find(req: Request, res: Response): Promise<Response> {
    const search = req.query;
    try {
      const result: IRental | IRental[] = await this.rentalService.find(search);
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

  @Get('/:id')
  async findId(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result: IRental = await this.rentalService.findId(id);
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

  @Put('/:id')
  async updated(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const payload: IRental = req.body;

      const result = await this.rentalService.updated(id, payload);
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

  @Delete('/:id')
  async delete(req: Request, res: Response): Promise<object> {
    try {
      const { id } = req.params;
      await this.rentalService.delete(id);
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
}

export default RentalController;
