import { Injectable } from '@decorators/di';

import Rental from '../schema/RentalSchema';

import { IRental } from '../interfaces/Rental/IRental';
import { IRentalRepository } from '../interfaces/Rental/IRentalRepository';
import { options } from '../utils/Pagination/RentalPagination';

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

  async find(query): Promise<IRental | IRental[]> {
    const result: IRental = await this.rentalSchema.paginate(query, options, {});
    return result;
  }

  async findId(id: String): Promise<IRental> {
    const result: IRental = await this.rentalSchema.findById(id);
    return result;
  }

  async updated(id: string, payload: IRental): Promise<IRental> {
    const result: IRental = await this.rentalSchema.findByIdAndUpdate(id, payload);
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.rentalSchema.findByIdAndDelete(id);
  }
}

export default RentalRepository;
