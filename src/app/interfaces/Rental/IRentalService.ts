import { IRental } from './IRental';

export interface IRentalService {
    create: (payload: IRental) => Promise<IRental>
    find: (query) => Promise<IRental | IRental[]>
    findId: (id: string) => Promise<IRental>
    updated: (id: string, payload: IRental) => Promise<IRental>
    delete: (id: string) => Promise<void>
}
