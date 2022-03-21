import mongoose from 'mongoose';
import { Icar } from '../interfaces/ISchemas/ICar';

const CarSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true,
    },
    ano: {
        type: String,
        required: true
    },
    acessorios: [{
        descricao: {
            type: String,
            required: true,
        }
    }]
}, {
   id: false,
   versionKey: false 
});

const Car = mongoose.model<Icar>('Veiculos', CarSchema);
export default Car;