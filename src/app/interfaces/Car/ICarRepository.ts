import { Icar } from './ICar';

export interface ICarRepository {
  create: (project: Icar) => Promise<Icar>
}
