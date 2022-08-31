export default () => ({
  //TODO this should reflect environment file
  port: parseInt(process.env.PORT || '3000', 10),
  environment: process.env.NODE_ENV,
  database: process.env.APOLLO_DATABASE_URL,
  messageBroker: process.env.AMQP_URL,
  apolloQueue: process.env.RABBIT_MQ_APOLLO_QUEUE,
  tmdb: {
    apiKey: process.env.TMDB_API_KEY,
    url: process.env.TMDB_ADDRESS,
  },
});
