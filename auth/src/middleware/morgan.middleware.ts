import morgan, { StreamOptions } from "morgan";
import log from "../utils/logger.util";

const stream: StreamOptions = {
  write: (message) => log.info(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream }
);

export default morganMiddleware;
