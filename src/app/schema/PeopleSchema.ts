import mongoose from "mongoose";
import { IPeople } from '../interfaces/ISchemas/IPeople';

const PeopleSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: { 
        type: String,
        required: true
    },
    data_nascimento: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    habilitado: {
        type: String,
        required: true
    }
}, {
    id: false,
    versionKey: false
}
);

const People = mongoose.model<IPeople>('Pessoas', PeopleSchema);