import { Injectable } from '@decorators/di';

import Rental from '../schema/RentalSchema';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';

@Injectable()
class RentalRepository implements IRentalRepository {
  private readonly rentalSchema;

  constructor() {
    this.rentalSchema = Rental;
  }

  async create(payload: IRental): Promise<IRental> {
    const newRental: IRental = await this.rentalSchema.create(payload);
    return newRental;
  }
}

export default RentalRepository;
