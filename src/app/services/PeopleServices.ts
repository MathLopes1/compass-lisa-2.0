import { Injectable, Inject } from '@decorators/di';

import PeopleRepository from '../repositories/PeopleRepository';

import { IPeople } from '../interfaces/People/IPeople';
import { IPeopleServices } from '../interfaces/People/IPeopleService';
import { IPeopleRepository } from '../interfaces/People/IPeopleRepository';

import formatCPF from '../utils/Functions/FormatCpf';

import NotFound from '../errors/ErrorsHttp/NotFound';
import IsConflict from '../utils/Functions/Validations/IsConflict';

@Injectable()
class PeopleService implements IPeopleServices {
  private readonly peopleRepository: IPeopleRepository;

  constructor(@Inject(PeopleRepository) peopleRepository: IPeopleRepository) {
    this.peopleRepository = peopleRepository;
  }

  async create(payload: IPeople): Promise<IPeople> {
    await IsConflict.isMajority(payload.data_nascimento);
    await IsConflict.conflictCpf(payload.cpf);
    await IsConflict.validCpf(payload.cpf);
    await IsConflict.conflictEmail(payload.email);

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
    if (result == null) throw new NotFound(id);
    return result;
  }

  async updated(id: string, payload: IPeople): Promise<IPeople> {
    const result: IPeople = await this.peopleRepository.updated(id, payload);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async delete(id: string): Promise<void> {
    const result: void = await this.peopleRepository.delete(id);
    if (result == null) throw new NotFound(id);
    return result;
  }
}

export default PeopleService;
