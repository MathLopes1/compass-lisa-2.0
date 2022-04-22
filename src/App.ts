import Server, { Express } from 'express';
import IndexRoutes from '../src/routes/index';
import Database from './infra/database/mongo/index';
import ErrorHandle from './app/middlewares/ErrorHandle';

class App {
  readonly server: Express;

  constructor() {
    this.server = Server();
    this.middlewares();
    this.errorHandler();
    this.routes();
  }

  static async Starting() {
    const app: App = new App();
    await Database.connect();

    return app.server;
  }

  private middlewares(): void {
    this.server.use(Server.json());
    this.server.use(Server.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.server.use('/api', IndexRoutes.routes());
  }

  private errorHandler(): void {
    this.server.use(ErrorHandle);
  }
}

export default App;
