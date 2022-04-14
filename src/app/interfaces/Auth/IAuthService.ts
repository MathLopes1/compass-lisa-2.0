import { IPeople } from '../People/IPeople';
import { IAuth } from './IAuth';

export interface IAuthService {
    authenticate: (payload: IPeople) => Promise<IAuth>
}
