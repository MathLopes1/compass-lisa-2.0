import { Injectable } from '@decorators/di';

import Car from '../schema/CarSchema';

import { Icar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';

@Injectable()
class CarRepository implements ICarRepository {
  async create(car: Icar): Promise<Icar> {
    const newCar: Icar = await Car.create(car);
    return newCar;
  }

  async find(): Promise<Icar | Icar[]> {
    const result: Icar | Icar[] = await Car.find();
    return result;
  }

  async findId(id: string): Promise<Icar> {
    const result: Icar = await Car.findById(id);
    return result;
  }

  async updated(id: string, payload: Icar): Promise<Icar> {
    const result: Icar = await Car.findByIdAndUpdate(id, payload);
    return result;
  }

  async delete(id: string): Promise<void> {
    await Car.findByIdAndDelete(id);
  }
}

export default CarRepository;
