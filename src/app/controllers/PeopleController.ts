import { Request, Response } from 'express';
import { Controller, Get, Post } from '@decorators/express';

import { Inject } from '@decorators/di';

import PeopleService from '../services/PeopleServices';
import { IPeopleServices } from '../interfaces/People/IPeopleService';
import { IPeople } from '../interfaces/People/IPeople';

@Controller('/people')
class PeopleController {
  private readonly peopleService: IPeopleServices;

  constructor(@Inject(PeopleService) peopleService: IPeopleServices) {
    this.peopleService = peopleService;
  }

  @Post('/')
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
      const result = await this.peopleService.find();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(200).json({
        name: error.name,
        description: error.message,
      });
    }
  }
}

export default PeopleController;
