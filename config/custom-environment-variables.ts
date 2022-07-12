export default {
  environment: 'NODE_ENV',
  port: 'PORT',
  key: 'ENC_KEY',
  redis_port: 'REDIS_PORT',
  postgresConfig: {
    host: 'PSQL_DB_URL',
    port: 'PSQL_DB_PORT',
    username: 'PSQL_DB_USER_NAME',
    password: 'PSQL_DB_PASSWORD',
    database: 'PSQL_DB_NAME',
  },
  accessTokenPrivateKey: 'JWT_ACCESS_TOKEN_PRIVATE_KEY',
  accessTokenPublicKey: 'JWT_ACCESS_TOKEN_PUBLIC_KEY',
  refreshTokenPrivateKey: 'JWT_REFRESH_TOKEN_PRIVATE_KEY',
  refreshTokenPublicKey: 'JWT_REFRESH_TOKEN_PUBLIC_KEY',
  smtp:{
    user: "EMAIL_USER",
    pass: "EMAIL_PASS",
    host: "EMAIL_HOST",
    port: "EMAIL_PASS"
  },
};
