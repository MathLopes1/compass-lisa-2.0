import { Injectable, Inject } from '@decorators/di';

import PeopleRepository from '../repositories/PeopleRepository';

import { IPeople } from '../interfaces/People/IPeople';
import { IPeopleServices } from '../interfaces/People/IPeopleService';
import { IPeopleRepository } from '../interfaces/People/IPeopleRepository';

@Injectable()
class PeopleService implements IPeopleServices {
  private readonly peopleRepository: IPeopleRepository;

  constructor(@Inject(PeopleRepository) peopleRepository: IPeopleRepository) {
    this.peopleRepository = peopleRepository;
  }

  async create(payload: IPeople): Promise<IPeople> {
    const newPeople = this.peopleRepository.create(payload);
    return newPeople;
  }

  async find(): Promise<IPeople[]> {
    const result = this.peopleRepository.find();
    return result;
  }

  async findId(id: String): Promise<IPeople> {
    const result = this.peopleRepository.findId(id);
    return result;
  }

  async updated(id: string, payload: IPeople): Promise<IPeople> {
    const result = await this.peopleRepository.updated(id, payload);
    return result;
  }
}

export default PeopleService;
