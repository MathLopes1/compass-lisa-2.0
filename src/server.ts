import 'reflect-metadata';
import 'dotenv/config';
import App from './App';
import { logger } from './app/utils/log/logger';

const Port:string = process.env.PORT;

App.listen(Port, () => logger
  .info(`online application at -> http://localhost:/${Port}`));
