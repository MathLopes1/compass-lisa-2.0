import { Injectable } from '@decorators/di';

import People from '../schema/PeopleSchema';

import { IPeople } from '../interfaces/People/IPeople';
import { IAuthRepository } from '../interfaces/Auth/IAuthRepository';

@Injectable()
class AuthRepository implements IAuthRepository {
  private readonly peopleSchema;

  constructor() {
    this.peopleSchema = People;
  }

  async authenticate(email: String) {
    const result: IPeople = await this.peopleSchema.findOne({ email });
    return result;
  }
}
export default AuthRepository;
