import { IRental } from './IRental';

export interface IRentalService {
    create: (payload: IRental) => Promise<IRental>
}
