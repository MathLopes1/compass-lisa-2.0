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

  async create(payload: IPeople) {
    const newPeople = this.peopleRepository.create(payload);
    return newPeople;
  }
}

export default PeopleService;
