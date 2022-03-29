import { Injectable } from '@decorators/di';

import Car from '../schema/CarSchema';

import { Icar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';

@Injectable()
class CarRepository implements ICarRepository {
  async create(car: Icar): Promise<Icar> {
    const newCar = Car.create(car);
    return newCar;
  }
}

export default CarRepository;
