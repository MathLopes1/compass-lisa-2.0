import Mongoose from 'mongoose';
import { logger } from '../../../app/utils/log/logger';

class Database {
  constructor() {
    this.connect();
  }

  private async connect(): Promise< typeof Mongoose | void > {
    try {
      logger.info('connected to database');
      const db: string = process.env.DATABASE_URL;
      const connected: typeof Mongoose = await Mongoose.connect(db);
      return connected;
    } catch (error) {
      return console.log(error);
    }
  }
}

export default new Database();
