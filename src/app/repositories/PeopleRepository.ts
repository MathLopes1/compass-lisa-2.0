import { Injectable } from '@decorators/di';

import People from '../schema/PeopleSchema';

import { IPeople } from '../interfaces/People/IPeople';
import { IPeopleRepository } from '../interfaces/People/IPeopleRepository';

@Injectable()
class PeopleRepository implements IPeopleRepository {
  async create(payload: IPeople): Promise<IPeople> {
    const newPeople: IPeople = await People.create(payload);
    return newPeople;
  }

  async find(): Promise<IPeople | IPeople[]> {
    const result: IPeople | IPeople[] = await People.find();
    return result;
  }

  async findId(id: String): Promise<IPeople> {
    const result: IPeople = await People.findById(id);
    return result;
  }

  async updated(id: string, payload: IPeople): Promise<IPeople> {
    const result: IPeople = await People.findByIdAndUpdate(id, payload);
    return result;
  }

  async delete(id: string): Promise<void> {
    await People.findByIdAndDelete(id);
  }
}

export default PeopleRepository;
