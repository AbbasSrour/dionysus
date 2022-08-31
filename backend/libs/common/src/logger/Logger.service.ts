import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomLoggerService {
  // export class CustomLoggerService implements LoggerService {
  // private logger: winston.Logger;
  //
  // constructor(label?: string) {
  //   this.initializeLogger(label);
  // }
  //
  // initializeLogger(label?: string) {
  //   this.logger = winston.createLogger({
  //     level: 'silly',
  //     format: winston.format.json(),
  //     transports: [
  //       new LokiTransport({
  //         host: 'http://localhost:3100',
  //         labels: { app: 'backend' },
  //         replaceTimestamp: true,
  //         json: true,
  //         format: winston.format.json(),
  //         onConnectionError: (err) => console.error(err),
  //       }),
  //       new winston.transports.Console({
  //         format: winston.format.simple(),
  //       }),
  //     ],
  //   });
  //   // if (process.env.NODE_ENV !== 'production') {
  //   //   this.logger.add(
  //   //     new winston.transports.Console({
  //   //       format: winston.format.simple(),
  //   //     }),
  //   //   );
  //   // }
  // }
  //
  // error(message: string, trace: string) {
  //   this.logger.log('error', 'MyLogger error - ' + message);
  //   this.logger.error(message, trace);
  // }
  //
  // warn(message: string) {
  //   this.logger.log('warn', 'MyLogger error - ' + message);
  //   //this.logger.warn('warn', message);
  // }
  //
  // log(message: string) {
  //   this.logger.log('info', 'MyLogger error - ' + message);
  //   // this.logger.log('info', message);
  // }
}
