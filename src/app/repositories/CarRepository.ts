import { Injectable } from '@decorators/di';

import Car from '../schema/CarSchema';

import { Icar } from '../interfaces/Car/ICar';
import { ICarRepository } from '../interfaces/Car/ICarRepository';
import { options } from '../utils/Pagination/CarPagination';

@Injectable()
class CarRepository implements ICarRepository {
  private readonly carRepository;

  constructor() {
    this.carRepository = Car;
  }

  async create(car: Icar): Promise<Icar> {
    const newCar: Icar = await this.carRepository.create(car);
    return newCar;
  }

  async find(query): Promise<Icar | Icar[]> {
    const result: Icar = await this.carRepository.paginate(query, options, {});
    return result;
  }

  async findId(id: string): Promise<Icar> {
    const result: Icar = await this.carRepository.findById(id);
    return result;
  }

  async updated(id: string, payload: Icar): Promise<Icar> {
    const result: Icar = await this.carRepository.findByIdAndUpdate(id, payload);
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.carRepository.findByIdAndDelete(id);
  }

  async updatedAccessory(id: string, accessoryId: string, payload): Promise<Icar> {
    const updatedAcessory: Icar = await this.carRepository.findByIdAndUpdate(
      id,
      { $set: { 'acessorios.$[outer].descricao': payload.descricao } },
      { arrayFilters: [{ 'outer._id': accessoryId }] },
    );
    return updatedAcessory;
  }
}

export default CarRepository;
