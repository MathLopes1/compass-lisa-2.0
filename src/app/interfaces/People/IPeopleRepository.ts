import { IPeople } from './IPeople';

export interface IPeopleRepository {
    create: (payload: IPeople) => Promise<IPeople>
    find: (query) => Promise<IPeople | IPeople[]>
    findId: (id: String) => Promise<IPeople>
    updated: (id: string, payload: IPeople) => Promise<IPeople>
    delete: (id: string) => Promise<void>
}
