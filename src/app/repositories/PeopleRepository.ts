import { Injectable } from '@decorators/di';

import People from '../schema/PeopleSchema';

import { IPeople } from '../interfaces/People/IPeople';
import { IPeopleRepository } from '../interfaces/People/IPeopleRepository';

@Injectable()
class PeopleRepository implements IPeopleRepository {
  private readonly peopleRepository;

  constructor() {
    this.peopleRepository = People;
  }

  async create(payload: IPeople): Promise<IPeople> {
    const newPeople: IPeople = await this.peopleRepository.create(payload);
    return newPeople;
  }

  async find(): Promise<IPeople | IPeople[]> {
    const result: IPeople | IPeople[] = await this.peopleRepository.find();
    return result;
  }

  async findId(id: String): Promise<IPeople> {
    const result: IPeople = await this.peopleRepository.findById(id);
    return result;
  }

  async updated(id: string, payload: IPeople): Promise<IPeople> {
    const result: IPeople = await this.peopleRepository.findByIdAndUpdate(id, payload);
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.peopleRepository.findByIdAndDelete(id);
  }
}

export default PeopleRepository;
