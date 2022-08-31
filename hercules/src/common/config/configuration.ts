export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  environment: process.env.NODE_ENV,
  redis: {
    secret: process.env.REDIS_STORE_SECRET,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  rmqUrl: process.env.AMQP_URL,
  lokiUrl: process.env.LOKI_HOST,
});
