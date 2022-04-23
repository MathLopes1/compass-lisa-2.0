import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

import { IRental } from '../interfaces/Rental/IRental';

const RentalSchema: mongoose.Schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  atividades: {
    type: String,
    required: true,
  },
  endereco: [
    {
      cep: {
        type: String,
        required: true,
      },
      logradouro: {
        type: String,
      },
      complemento: {
        type: String,
      },
      number: {
        type: Number,
        required: true,
        minLength: 1,
      },
      isFilial: {
        type: Boolean,
        required: true,
        default: false,
      },
      bairro: {
        type: String,
      },
      localidade: {
        type: String,
      },
      uf: {
        type: String,
      },
      _id: false,
    },
  ],
}, {
  versionKey: false,
});

RentalSchema.plugin(mongoosePaginate);

const Rental = mongoose.model<IRental>('Locadoras', RentalSchema);
export default Rental;
