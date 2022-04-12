import mongoose from 'mongoose';
import { Icar } from '../interfaces/Car/ICar';

const CarSchema: mongoose.Schema = new mongoose.Schema({
  modelo: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  ano: {
    type: String,
    required: true,
  },
  acessorios: [{
    descricao: {
      type: String,
      required: true,
    },
  }],
  quantidadePassageiros: {
    type: String,
    required: true,
  },
}, {
  versionKey: false,
});

const Car = mongoose.model<Icar>('Veiculos', CarSchema);
export default Car;
