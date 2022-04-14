import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

import { IPeople } from '../interfaces/People/IPeople';
import { habilitado } from '../utils/Enum/enum';

const PeopleSchema: mongoose.Schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  data_nascimento: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  habilitado: {
    type: String,
    enum: habilitado,
    required: true,
  },
}, {
  id: false,
  versionKey: false,
});

PeopleSchema.plugin(mongoosePaginate);

const People = mongoose.model<IPeople>('Pessoas', PeopleSchema);
export default People;
