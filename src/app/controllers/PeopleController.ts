import { Request, Response } from 'express';
import {
  Controller, Get, Post, Put, Delete,
} from '@decorators/express';

import { Inject } from '@decorators/di';

import PeopleService from '../services/PeopleServices';
import { IPeopleServices } from '../interfaces/People/IPeopleService';
import { IPeople } from '../interfaces/People/IPeople';

import PeopleValidationBody from '../validations/PeopleValidations/PeopleBody';

@Controller('/people')
class PeopleController {
  private readonly peopleService: IPeopleServices;

  constructor(@Inject(PeopleService) peopleService: IPeopleServices) {
    this.peopleService = peopleService;
  }

  @Post('/', [PeopleValidationBody])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const people: IPeople = req.body;
      const result = await this.peopleService.create(people);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        description: error.message,
      });
    }
  }

  @Get('/')
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const result: IPeople | IPeople[] = await this.peopleService.find();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(200).json({
        name: error.name,
        description: error.message,
      });
    }
  }

  @Get('/:id')
  async findId(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result: IPeople = await this.peopleService.findId(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(200).json({
        name: error.name,
        description: error.message,
      });
    }
  }

  @Put('/:id', [PeopleValidationBody])
  async updated(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const payload: IPeople = req.body;

      const result = await this.peopleService.updated(id, payload);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        description: error.message,
      });
    }
  }

  @Delete('/:id')
  async delete(req: Request, res: Response): Promise<object> {
    try {
      const { id } = req.params;
      await this.peopleService.delete(id);
      return res.status(204).end();
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        description: error.message,
      });
    }
  }
}

export default PeopleController;
