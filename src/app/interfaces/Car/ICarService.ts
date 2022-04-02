import { Icar } from './ICar';

export interface ICarService {
  create: (project: Icar) => Promise<Icar>
  find: () => Promise<Icar[]>
}
