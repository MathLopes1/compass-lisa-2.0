import { IPeople } from './IPeople';

export interface IPeopleRepository {
    create: (payload: IPeople)=> Promise<IPeople>
    find: () => Promise<IPeople[]>
}
