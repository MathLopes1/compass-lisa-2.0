import Server, { Express } from 'express';
import cors from 'cors';
import IndexRoutes from '../../src/routes/index';
import Database from './database/index';
import ErrorHandle from '../../src/app/middlewares/ErrorHandle';

class App {
  readonly server: Express;

  constructor() {
    this.server = Server();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  static async Starting() {
    const app: App = new App();
    await Database.connect();

    return app.server;
  }

  private middlewares(): void {
    this.server.use(cors());
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
