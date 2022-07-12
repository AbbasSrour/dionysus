import winston from "winston";
import { env } from "./validate-env.util";

const { format, createLogger, transports } = winston;
const { timestamp, combine, printf, errors, json } = format;

var { Loggly } = require("winston-loggly-bulk");

// Development Logger Configuration
const devLogConfig = {
  format: combine(
    format.colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    printf(({ level, message, timestamp, stack }) => {
      return `${timestamp} ${level}: ${stack || message}`;
    })
  ),
  transports: [
    new transports.Console(),
    // new Loggly({
    //   token: "f502b35f-cc1e-4621-898f-0eb24d8ad1a8",
    //   subdomain: "abbassrour",
    //   tags: ["Winston-Dionysus-Dev"],
    //   json: true
    // }),
  ],
};

// Production Logger Configuration
const productionLogConfig = {
  format: combine(timestamp(), errors({ stack: true }), json()),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    new Loggly({
      token: "f502b35f-cc1e-4621-898f-0eb24d8ad1a8",
      subdomain: "abbassrour",
      tags: ["Winston-Dionysus-Pro"],
      json: true,
    }),
  ],
};

// Choose logger based on the environment
if (env.NODE_ENV === "development")
  var logger = winston.createLogger(productionLogConfig);
else var logger = winston.createLogger(devLogConfig);

export default logger;
