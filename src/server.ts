import 'reflect-metadata';
import 'dotenv/config';
import App from './App';
import { logger } from './app/utils/log/logger';

App.listen(process.env.PORT, () => logger.info(`online application at -> http://localhost:/${process.env.PORT}`));
