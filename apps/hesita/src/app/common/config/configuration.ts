import * as process from 'process';

export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),
  origin: process.env.ORIGIN,
  lokiUrl: process.env.LOKI_HOST,
  rmqUrl: process.env.AMQP_URL,
  tmdb: {
    address: process.env.TMDB_ADDRESS,
    apiKey: process.env.TMDB_API_KEY,
    imageAddress: process.env.TMDB_IMAGE_ADDRESS,
  },
});
