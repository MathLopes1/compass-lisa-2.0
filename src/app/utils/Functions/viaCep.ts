import axios, { AxiosResponse } from 'axios';
import { IAdress } from '../../interfaces/Rental/IRental';

class ViaCep {
  static async findViaCep(cep: string): Promise<IAdress> {
    const searchViaCep = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const result: AxiosResponse = searchViaCep;
    return result.data;
  }
}
export default ViaCep;
