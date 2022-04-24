import { Icar } from './ICar';

export interface ICarService {
  create: (project: Icar) => Promise<Icar>
  find: (query) => Promise<Icar | Icar[]>
  findId: (id: string) => Promise<Icar>
  updated: (id: string, payload: Icar) => Promise<Icar>
  delete: (id: string) => Promise<void>
  updatedAccessory: (id: string, accessoryId: string, payload: Icar)=> Promise<Icar>
}
