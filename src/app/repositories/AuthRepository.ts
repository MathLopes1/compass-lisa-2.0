import { Injectable } from '@decorators/di';

import People from '../schema/PeopleSchema';

import { IPeople } from '../interfaces/People/IPeople';
import { IAuthRepository } from '../interfaces/Auth/IAuthRepository';

@Injectable()
class AuthRepository implements IAuthRepository {
  async authenticate(email) {
    const result: IPeople = await People.findOne({ email });
    return result;
  }
}
export default AuthRepository;
