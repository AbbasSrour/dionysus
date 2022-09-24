export default () => ({
  //TODO this should reflect environment file
  port: parseInt(process.env.PORT || '3000', 10),
  environment: process.env.NODE_ENV,
  database: process.env.APOLLO_DATABASE_URL,
  rmqUrl: process.env.AMQP_URL,
  coeusQueue: process.env.RABBIT_MQ_COEUS_QUEUE,
});
