import { IRental } from './IRental';

export interface IRentalRepository {
    create: (payload: IRental) => Promise<IRental>
}
