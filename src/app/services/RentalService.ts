import { Injectable, Inject } from '@decorators/di';

import RentalRepository from '../repositories/RentalRepository';

import { IAdress, IRental } from '../interfaces/Rental/IRental';
import { IRentalService } from '../interfaces/Rental/IRentalService';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';
import ViaCep from '../utils/Api/viaCep';
import NotFound from '../errors/ErrorsHttp/NotFound';
import IsConflict from '../utils/Functions/Validations/IsConflict';
import FormatForCnpj from '../utils/Functions/FormatCnpj';

@Injectable()
class RentalService implements IRentalService {
  private readonly rentalRepository: IRentalRepository;

  constructor(@Inject(RentalRepository) rentalRepository: IRentalRepository) {
    this.rentalRepository = rentalRepository;
  }

  async create(payload: IRental): Promise<IRental> {
    await IsConflict.validCnpj(payload.cnpj);
    await IsConflict.ConflictCnpj(payload.cnpj);
    await IsConflict.ConflictFilial(payload.endereco);

    await ViaCep.gettingZipCode(payload.endereco);
    const data: IRental = await this.rentalRepository.create(payload);

    const newRental: IRental = FormatForCnpj(data);
    return newRental;
  }

  async find(query): Promise<IRental| IRental[]> {
    const result: IRental | IRental[] = await this.rentalRepository.find(query);
    return result;
  }

  async findId(id: string): Promise<IRental> {
    const result: IRental = await this.rentalRepository.findId(id);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async updated(id: string, payload: IRental): Promise<IRental> {
    const result: IRental = await this.rentalRepository.updated(id, payload);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async delete(id: string): Promise<void> {
    const result: void = await this.rentalRepository.delete(id);
    if (result == null) throw new NotFound(id);
    return result;
  }
}

export default RentalService;
