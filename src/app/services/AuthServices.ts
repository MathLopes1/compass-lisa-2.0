import { Injectable, Inject } from '@decorators/di';

import bcrypt from 'bcrypt';
import Token from '../auth/GenerateToken';
import AuthRepository from '../repositories/AuthRepository';

import { IAuth } from '../interfaces/Auth/IAuth';
import { IPeople } from '../interfaces/People/IPeople';
import { IAuthRepository } from '../interfaces/Auth/IAuthRepository';
import { IAuthService } from '../interfaces/Auth/IAuthService';
import Unauthorized from '../errors/ErrorsHttp/Unauthorized';

@Injectable()
class AuthService implements IAuthService {
  private readonly authRepository: IAuthRepository;

  constructor(@Inject(AuthRepository) authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  async authenticate(payload: IPeople): Promise<IAuth> {
    const { senha } = payload;
    const people: IPeople = await this.authRepository.authenticate(payload.email);
    if (!people) {
      throw new Unauthorized(`invalid email -> ${payload.email}`);
    }
    if (!(await bcrypt.compare(senha, people.senha))) {
      throw new Unauthorized('Invalid password, enter a valid one');
    }
    const token: String = Token({ _id: people._id });
    const { email, habilitado } = people;
    const result: IAuth = { email, habilitado, token };
    return result;
  }
}
export default AuthService;
