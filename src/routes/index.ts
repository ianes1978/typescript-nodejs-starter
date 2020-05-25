import { router as usersRoute } from './users';
const homeRoute = require('../routes/home');
import { Express } from 'express';

// const { errorMidLogger } = require('../middleware/midErrors');

export default function (app: Express) {
  app.use('/api/users', usersRoute);
  app.use('/', homeRoute);

  //   app.use(errorMidLogger);
}
