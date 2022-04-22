import People from '../../../schema/PeopleSchema';

import Conflict from '../../../errors/ErrorsHttp/Conflict';
import BadRequest from '../../../errors/ErrorsHttp/BadRequest';

import cpfValid from './IsCpfValid';
import isOver18 from './isMajority';

class IsConflit {
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
    if (cpfValid(cpf) === false) {
      throw new BadRequest(`cpf '${cpf}' is invalid`);
    }
  }

  static async isMajority(birthday: string): Promise<void> {
    const GET_DATE = birthday;
    const DATE = GET_DATE.substring(5, 10);
    if (isOver18(new Date(DATE)) === false) {
      throw new BadRequest('must be over 18 years old');
    }
  }
}

export default IsConflit;
