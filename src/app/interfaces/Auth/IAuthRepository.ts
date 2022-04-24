import { IPeople } from '../People/IPeople';

export interface IAuthRepository {
    authenticate: (email: string) => Promise<IPeople>
}
