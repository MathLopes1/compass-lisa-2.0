import { Inject, Injectable } from '@decorators/di';

import CarRepository from '../repositories/CarRepository';

import { Icar } from '../interfaces/Car/ICar';
import { ICarService } from '../interfaces/Car/ICarService';
import { ICarRepository } from '../interfaces/Car/ICarRepository';

@Injectable()
class CarService implements ICarService {
  private readonly carRepository: ICarRepository;

  constructor(@Inject(CarRepository) carRepository: ICarRepository) {
    this.carRepository = carRepository;
  }

  async create(project: Icar): Promise<Icar> {
    const newCar = await this.carRepository.create(project);

    return newCar;
  }
}

export default CarService;
