import { Injectable } from '@decorators/di';

import People from '../schema/PeopleSchema';

import { IPeople } from '../interfaces/People/IPeople';
import { IPeopleRepository } from '../interfaces/People/IPeopleRepository';

@Injectable()
class PeopleRepository implements IPeopleRepository {
  async create(payload: IPeople) {
    const newPeople = await People.create(payload);
    return newPeople;
  }
}

export default PeopleRepository;
