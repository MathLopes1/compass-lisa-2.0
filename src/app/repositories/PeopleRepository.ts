import { Injectable } from '@decorators/di';

import People from '../schema/PeopleSchema';

import { IPeople } from '../interfaces/People/IPeople';
import { IPeopleRepository } from '../interfaces/People/IPeopleRepository';
import { options } from '../utils/Pagination/PeoplePagination';

@Injectable()
class PeopleRepository implements IPeopleRepository {
  private readonly peopleSchema;

  constructor() {
    this.peopleSchema = People;
  }

  async create(payload: IPeople): Promise<IPeople> {
    const newPeople: IPeople = await this.peopleSchema.create(payload);
    return newPeople;
  }

  async find(query): Promise<IPeople | IPeople[]> {
    const result: IPeople = await this.peopleSchema.paginate(query, options, {});
    return result;
  }

  async findId(id: String): Promise<IPeople> {
    const result: IPeople = await this.peopleSchema.findById(id);
    return result;
  }

  async updated(id: string, payload: IPeople): Promise<IPeople> {
    const result: IPeople = await this.peopleSchema.findByIdAndUpdate(id, payload);
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.peopleSchema.findByIdAndDelete(id);
  }
}

export default PeopleRepository;
