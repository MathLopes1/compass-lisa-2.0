import { Injectable } from '@decorators/di';

import Car from '../schema/CarSchema';

import { Icar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';

@Injectable()
class CarRepository implements ICarRepository {
  async create(car: Icar): Promise<Icar> {
    const newCar = await Car.create(car);
    return newCar;
  }

  async find(): Promise<Icar[]> {
    const result = await Car.find();
    return result;
  }

  async findId(id: string): Promise<Icar> {
    const result = await Car.findById(id);
    return result;
  }
}

export default CarRepository;
