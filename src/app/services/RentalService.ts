import { Injectable, Inject } from '@decorators/di';

import RentalRepository from '../repositories/RentalRepository';

import { IAdress, IRental } from '../interfaces/Rental/IRental';
import { IRentalService } from '../interfaces/Rental/IRentalService';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';
import ViaCep from '../utils/Functions/viaCep';

@Injectable()
class RentalService implements IRentalService {
  private readonly rentalRepository: IRentalRepository;

  constructor(@Inject(RentalRepository) rentalRepository: IRentalRepository) {
    this.rentalRepository = rentalRepository;
  }

  async create(payload: IRental): Promise<IRental> {
    for (let i = 0; i < payload.endereco.length; i++) {
      const ceps: Array<IAdress> = payload.endereco;
      const result: IAdress = ceps[i];
      const data: IAdress = await ViaCep.findViaCep(result.cep);
      const {
        cep, logradouro, complemento, bairro, localidade, uf,
      } = data;
      result.cep = cep;
      result.logradouro = logradouro;
      result.complemento = complemento;
      result.bairro = bairro;
      result.localidade = localidade;
      result.uf = uf;
    }
    const newRental: IRental = await this.rentalRepository.create(payload);
    return newRental;
  }
}

export default RentalService;
