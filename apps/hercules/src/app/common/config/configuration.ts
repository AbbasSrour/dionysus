import * as process from 'process';

export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),
  database: process.env.HERCULES_DB_URL,
  redis: {
    secret: process.env.REDIS_STORE_SECRET,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    expiration: process.env.REDIS_CACHE_EXPIRATION,
  },
  origin: process.env.ORIGIN,
  rmqUrl: process.env.AMQP_URL,
  herculesQueue: process.env.RABBIT_MQ_HERCULES_QUEUE,
  lokiUrl: process.env.LOKI_HOST,
  jwt: {
    accessToken: {
      privateKey: process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY,
      publicKey: process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY,
      expiration: process.env.ACCESS_TOKEN_EXPIRATION,
    },
    refreshToken: {
      privateKey: process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
      publicKey: process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY,
      expiration: process.env.REFRESH_TOKEN_EXPIRATION,
    },
  },
  smtp: {
    service: process.env.EMAIL_SERVICE || 'Gmail',
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  encKey: process.env.ENC_KEY,
});
