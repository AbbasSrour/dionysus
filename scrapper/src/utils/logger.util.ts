import winston, { Logger } from "winston";
import { env } from "./validate-env.util";
import LokiTransport from "winston-loki";

const developmentLoggerConfig = {
  level: "silly",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ level, message, timestamp, stack }) => {
      return `${timestamp} ${level}: ${message || stack}`;
    })
  ),
  transports: [new winston.transports.Console()],
};

const stageLoggerConfig = {
  level: "silly",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ level, message, timestamp, stack }) => {
      return `${timestamp} ${level}: ${message} => ${stack} `;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new LokiTransport({
      host: `${env.LOKI_HOST}`,
      labels: { app: "backend" },
      replaceTimestamp: true,
      json: true,
      format: winston.format.json(),
      onConnectionError: (err) => console.error(err),
    }),
  ],
};

const productionLoggerConfig = {
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    new LokiTransport({
      host: `${env.LOKI_HOST}`,
      labels: { app: "backend" },
      replaceTimestamp: true,
      json: true,
      format: winston.format.json(),
      onConnectionError: (err) => console.error(err),
    }),
  ],
};

let log: Logger;
if (env.NODE_ENV === "development")
  log = winston.createLogger(developmentLoggerConfig);
else if (env.NODE_ENV === "stage")
  log = winston.createLogger(developmentLoggerConfig);
else log = winston.createLogger(productionLoggerConfig);

export default log;
