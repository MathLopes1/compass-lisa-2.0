import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

import bcrypt from 'bcrypt';

import { IPeople } from '../interfaces/People/IPeople';
import { habilitado } from '../utils/Enum/enum';

const PeopleSchema: mongoose.Schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  data_nascimento: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  senha: {
    type: String,
    required: true,
    minLength: 6,
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

PeopleSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

PeopleSchema.plugin(mongoosePaginate);

const People = mongoose.model<IPeople>('Pessoas', PeopleSchema);
export default People;
