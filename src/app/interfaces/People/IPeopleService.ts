import { IPeople } from './IPeople';

export interface IPeopleServices {
    create: (payload: IPeople)=> Promise<IPeople>
}
