require('dotenv').config();
import express, { Request, Response } from 'express';
import config from 'config';
import ValidateEnv from './utils/ValidateEnv';
import { AppDataSource } from './utils/data-source';
import RedisClient from './utils/ConnectRedis';

AppDataSource.initialize()
  .then(async () => {
    // VALIDATE ENV
    ValidateEnv();

    const app = express();

    // MIDDLEWARE

    // 1. Body parser
    app.use(express.json({ limit: '10kb' }));

    // 2. Logger

    // 3. Cookie Parser

    // 4. Cors

    // ROUTES

    // HEALTH CHECKER
    app.get('/api/healthchecker', async (req: Request, res: Response) => {
      const message = await RedisClient.get('try');
      res.status(200).json({
        status: 'success',
        message,
      });
    });

    // UNHANDLED ROUTE

    // GLOBAL ERROR HANDLER

    const port = config.get<number>('port');
    app.listen(port);

    console.log(`Server started on port: ${port}`);
  })
  .catch((error) => console.log(error));


