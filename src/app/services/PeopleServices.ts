import { Injectable, Inject } from '@decorators/di';

import PeopleRepository from '../repositories/PeopleRepository';

import { IPeople } from '../interfaces/People/IPeople';
import { IPeopleServices } from '../interfaces/People/IPeopleService';
import { IPeopleRepository } from '../interfaces/People/IPeopleRepository';

import formatCPF from '../utils/Functions/FormatCpf';

@Injectable()
class PeopleService implements IPeopleServices {
  private readonly peopleRepository: IPeopleRepository;

  constructor(@Inject(PeopleRepository) peopleRepository: IPeopleRepository) {
    this.peopleRepository = peopleRepository;
  }

  async create(payload: IPeople): Promise<IPeople> {
    const Data: IPeople = await this.peopleRepository.create(payload);
    const newPeople: IPeople = formatCPF(Data);
    return newPeople;
  }

  async find(query): Promise<IPeople| IPeople[]> {
    const result: IPeople | IPeople[] = await this.peopleRepository.find(query);
    return result;
  }

  async findId(id: String): Promise<IPeople> {
    const result: IPeople = await this.peopleRepository.findId(id);
    return result;
  }

  async updated(id: string, payload: IPeople): Promise<IPeople> {
    const result: IPeople = await this.peopleRepository.updated(id, payload);
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.peopleRepository.delete(id);
  }
}

export default PeopleService;
