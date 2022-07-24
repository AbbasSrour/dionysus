import { env } from "../utils/validate-env.util";
const props = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Dionysus",
    description: "Movie Streaming Service",
    contact: {
      name: "Abbas Srour",
      email: "abbas.mj.srour@gmail.com",
      url: "https://abbassrour.ml",
    },
  },
  servers: [
    {
      url: `http://localhost:${env.PORT}`,
      description: "Local server",
    },
  ],
  tags: {
    name: "User Authentication",
  },
};
export default props;
