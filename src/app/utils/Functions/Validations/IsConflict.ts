import People from '../../../schema/PeopleSchema';
import Rental from '../../../schema/RentalSchema';

import Conflict from '../../../errors/ErrorsHttp/Conflict';
import BadRequest from '../../../errors/ErrorsHttp/BadRequest';

import validateCnpj from './isCnpjValid';
import validateCpf from './IsCpfValid';
import isOver18 from './isMajority';
import { IAdress } from '../../../interfaces/Rental/IRental';

class IsConflict {
  static async conflictEmail(email: string): Promise<void> {
    const getEmail = await People.find({ email });
    if (getEmail.length > 0) {
      throw new Conflict('email already exists');
    }
  }

  static async conflictCpf(cpf: string): Promise<void> {
    const getCpf = await People.find({ cpf });
    if (getCpf.length > 0) {
      throw new Conflict('cpf already exists');
    }
  }

  static async validCpf(cpf: string): Promise<void> {
    if (validateCpf(cpf) === false) {
      throw new BadRequest(`cpf '${cpf}' is invalid`);
    }
  }

  static async validCnpj(cnpj: string): Promise<void> {
    if (validateCnpj(cnpj) === false) {
      throw new BadRequest(`cnpj '${cnpj}' is invalid`);
    }
  }

  static async isMajority(birthday: string): Promise<void> {
    const GET_DATE = birthday;
    const DATE = GET_DATE.substring(5, 10);
    if (isOver18(new Date(DATE)) === false) {
      throw new BadRequest('must be over 18 years old');
    }
  }

  static async ConflictCnpj(cnpj: string): Promise<void> {
    const getCnpj = await Rental.find({ cnpj });
    if (getCnpj.length > 0) throw new Conflict('cnpj already exists');
  }

  static async ConflictFilial(filial: Array<IAdress>): Promise<void> {
    let count: number = 0;
    filial.forEach((body) => {
      if (!body.isFilial) {
        count += 1;
      }
      if (count > 1) throw new Conflict('isFilial');
    });
  }
}

export default IsConflict;
