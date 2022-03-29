import { Injectable } from '@decorators/di';
import { getRepository } from 'typeorm';

import Car from '../schema/CarSchema';

import { Icar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';

@Injectable()
class CarRepository implements ICarRepository {
  async create(car: Icar): Promise<Icar> {
    const repository = getRepository(Car);
    const newCar = repository.create(car);
    return newCar;
  }
}

export default CarRepository;
