import {
  createLogger, format, Logger, transports,
} from 'winston';

export const logger: Logger = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf((info) => `[${info.timestamp}] ${info.level} ${info.message}`),
  ),
  transports: [
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}path.join/../log/lisa-api.log`,
    }),
    new transports.Console({
      level: 'debug',
    }),
  ],
});
