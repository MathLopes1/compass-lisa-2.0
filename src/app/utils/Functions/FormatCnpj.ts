import { IRental } from '../../interfaces/Rental/IRental';

function FormatForCnpj(payload: IRental): IRental {
  const cnpj: String = payload.cnpj
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '\$1.\$2.\$3\/\$4\-\$5');
  const rental: IRental = Object.assign(payload, { cnpj });
  return rental;
}

export default FormatForCnpj;
