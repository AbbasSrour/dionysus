import winston, { Logger } from "winston";
import { env } from "./validate-env.util";
import LokiTransport from "winston-loki";

// var { Loggly } = require("winston-loggly-bulk");

// // Development Logger Configuration
// const devLogConfig = {
//   // format: winston.format.combine(
//   //   winston.format.colorize(),
//   //   winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
//   //   winston.format.errors({ stack: true }),
//   //   winston.format.printf(({ level, message, timestamp, stack }) => {
//   //     return `${timestamp} ${level}: ${stack || message}`;
//   //   })
//   // ),
//   transports: [
//     new winston.transports.Console(),
//     new LokiTransport({
//       host: `${env.LOKI_HOST}`,
//       labels: { app: "api" },
//       basicAuth: `${env.LOKI_API}`,
//       replaceTimestamp: true,
//       // json: true,
//       // format: winston.format.json(),
//       // onConnectionError: (err) => console.error(err),
//     }),
//     // new Loggly({
//     //   token: "f502b35f-cc1e-4621-898f-0eb24d8ad1a8",
//     //   subdomain: "abbassrour",
//     //   tags: ["Winston-Dionysus-Dev"],
//     //   json: true
//     // }),
//   ],
// };
//
// // Production Logger Configuration
// const productionLogConfig = {
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.errors({ stack: true }),
//     winston.format.json()
//   ),
//   defaultMeta: { service: "user-service" },
//   transports: [
//     new winston.transports.Console(),
//     new LokiTransport({
//       host: `${env.LOKI_HOST}`,
//       basicAuth: `${env.LOKI_API}`,
//       labels: { app: "api" },
//       json: true,
//       format: winston.format.json(),
//       replaceTimestamp: true,
//       onConnectionError: (err) => console.error(err),
//     }),
//
//     // new Loggly({
//     //   token: "f502b35f-cc1e-4621-898f-0eb24d8ad1a8",
//     //   subdomain: "abbassrour",
//     //   tags: ["Winston-Dionysus-Pro"],
//     //   json: true,
//     // }),
//   ],
// };
//
// let logger: Logger;
//
// if (env.NODE_ENV === "development") logger = winston.createLogger(devLogConfig);
// else logger = winston.createLogger(productionLogConfig);

let logger: Logger;

const initializeLogger = () => {
  if (logger) {
    return
  }
  logger = winston.createLogger({
    transports: [new LokiTransport({
      host: "http://loki:3100",
      labels: { app: 'api'},
      json: true,
      format: winston.format.json(),
      replaceTimestamp: true,
      onConnectionError: (err) => console.error(err)
    }),
      new winston.transports.Console({
        format: winston.format.combine(winston.format.simple(), winston.format.colorize())
      })]
  })
}

export const getLogger = () => {
  initializeLogger()
  return logger
}
