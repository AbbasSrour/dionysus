export default () => ({
  //TODO this should reflect environment file
  port: parseInt(process.env.PORT || '3000', 10),
  environment: process.env.NODE_ENV,
  messageBroker: process.env.AMQP_URL,
  tmdb: {
    apiKey: process.env.TMDB_API_KEY,
    url: process.env.TMDB_ADDRESS,
  },
});
