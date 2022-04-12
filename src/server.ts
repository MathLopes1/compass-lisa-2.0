import 'reflect-metadata';
import 'dotenv/config';
import App from './App';
import { logger } from './app/utils/log/logger';

const Server = async (): Promise<void> => {
  const app = await App.Starting();
  const Port:string = process.env.PORT;

  app.listen(Port, () => logger
    .info(`online application at -> http://localhost:/${Port}`));
};

Server();
