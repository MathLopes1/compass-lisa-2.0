import { Icar } from './ICar';

export interface ICarRepository {
  create: (project: Icar) => Promise<Icar>
  find: () => Promise<Icar[]>
  findId: (id: string) => Promise<Icar>
  updated: (id: string, payload: Icar) => Promise<Icar>
}
