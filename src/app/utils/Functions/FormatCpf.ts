import { IPeople } from '../../interfaces/People/IPeople';

function FormatForCpf(payload: IPeople): IPeople {
  const cpf: String = payload.cpf
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  const people: IPeople = Object.assign(payload, { cpf });
  return people;
}

export default FormatForCpf;
