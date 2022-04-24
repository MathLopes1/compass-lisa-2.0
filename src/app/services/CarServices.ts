import { Inject, Injectable } from '@decorators/di';

import CarRepository from '../repositories/CarRepository';

import { Icar } from '../interfaces/Car/ICar';
import { ICarService } from '../interfaces/Car/ICarService';
import { ICarRepository } from '../interfaces/Car/ICarRepository';

import NotFound from '../errors/ErrorsHttp/NotFound';

@Injectable()
class CarService implements ICarService {
  private readonly carRepository: ICarRepository;

  constructor(@Inject(CarRepository) carRepository: ICarRepository) {
    this.carRepository = carRepository;
  }

  async create(project: Icar): Promise<Icar> {
    const newCar: Icar = await this.carRepository.create(project);
    return newCar;
  }

  async find(query): Promise<Icar | Icar[]> {
    const result: Icar | Icar[] = await this.carRepository.find(query);
    return result;
  }

  async findId(id: string): Promise<Icar> {
    const result: Icar = await this.carRepository.findId(id);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async updated(id: string, payload: Icar): Promise<Icar> {
    const result: Icar = await this.carRepository.updated(id, payload);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async delete(id: string): Promise<void> {
    const result: void = await this.carRepository.delete(id);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async updatedAccessory(id: string, accessoryId: string, payload: Icar): Promise<Icar> {
    const result: Icar = await this.carRepository.updatedAccessory(id, accessoryId, payload);
    if (result == null) throw new NotFound(id);
    return result;
  }
}

export default CarService;
