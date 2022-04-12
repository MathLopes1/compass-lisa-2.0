import { IPeople } from './IPeople';

export interface IPeopleServices {
    create: (payload: IPeople) => Promise<IPeople>
    find: () => Promise<IPeople | IPeople[]>
    findId: (id: String) => Promise<IPeople>
    updated: (id: string, payload: IPeople) => Promise<IPeople>
    delete: (id: string) => Promise<void>
}
