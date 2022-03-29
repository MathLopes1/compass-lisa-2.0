import Server, { Express } from 'express';
import IndexRoutes from '../src/routes/index';
import './infra/database/mongo/index.ts';

class App {
  readonly server: Express;

  constructor() {
    this.server = Server();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.server.use(Server.json());
    this.server.use(Server.urlencoded({ extended: true }));
  }

  routes(): void {
    this.server.use('/api', IndexRoutes.routes);
  }
}

export default new App().server;
