import { Injectable, Inject } from '@decorators/di';

import axios from 'axios';
import RentalRepository from '../repositories/RentalRepository';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalService } from '../interfaces/Rental/IRentalService';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';

@Injectable()
class RentalService implements IRentalService {
  private readonly rentalRepository: IRentalRepository;

  constructor(@Inject(RentalRepository) rentalRepository: IRentalRepository) {
    this.rentalRepository = rentalRepository;
  }

  async create(payload: IRental): Promise<IRental> {
    const newCar: IRental = await this.rentalRepository.create(payload);
    return newCar;
  }
}

export default RentalService;
