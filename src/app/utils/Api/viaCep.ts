import axios, { AxiosResponse } from 'axios';
import { IAdress } from '../../interfaces/Rental/IRental';

class ViaCep {
  static async consuming(cep: string) {
    const uriApi: string = `https://viacep.com.br/ws/${cep}/json`;

    const searchViaCep = await axios.get(uriApi);
    const result: AxiosResponse = searchViaCep;
    return result.data;
  }

  static async gettingZipCode(payload): Promise<void> {
    for (let i = 0; i < payload.length; i++) {
      const ceps: Array<IAdress> = payload;
      const result: IAdress = ceps[i];
      const data: IAdress = await this.consuming(result.cep);
      const {
        cep, logradouro, complemento, bairro, localidade, uf,
      } = data;
      result.cep = cep;
      result.logradouro = logradouro;
      result.complemento = complemento;
      result.bairro = bairro;
      result.localidade = localidade;
      result.uf = uf;
    }
  }
}
export default ViaCep;
