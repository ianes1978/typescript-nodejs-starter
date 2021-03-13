import usersRoute from './users';
import homeRoute from '../routes/home';
import { Express } from 'express';

import  { errorMidLogger } from '../middleware/midErrors';

export default function(req, res, next) {
  const app = req.app
  app.use('/api/users', usersRoute);
  app.use('/', homeRoute);
  app.use(errorMidLogger);
  next();
};