import { Injectable, Inject } from '@decorators/di';

import bcrypt from 'bcrypt';
import Token from '../auth/GenerateToken';
import AuthRepository from '../repositories/AuthRepository';

import { IAuth } from '../interfaces/Auth/IAuth';
import { IPeople } from '../interfaces/People/IPeople';
import { IAuthRepository } from '../interfaces/Auth/IAuthRepository';
import { IAuthService } from '../interfaces/Auth/IAuthService';

@Injectable()
class AuthService implements IAuthService {
  private readonly authRepository: IAuthRepository;

  constructor(@Inject(AuthRepository) authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  async authenticate(payload: IPeople): Promise<IAuth> {
    const { email } = payload;
    const people: IPeople = await this.authRepository.authenticate(payload.email);
    if (!people) throw new Error('email does not exist');
    let date: IAuth;
    if (!(await bcrypt.compare(email, people.email))) {
      const { email, habilitado } = people;
      const token: String = Token({ _id: people._id });
      const result: IAuth = { email, habilitado, token };
      date = result;
    }
    return date;
  }
}
export default AuthService;
