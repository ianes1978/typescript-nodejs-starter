import { Router } from 'express';
import { logger } from '../core/logger';
import  { ADMIN, BASE }  from '../core/roles';
import {authentication, authorization } from '../middleware/authProvider';
import  {UsersService as usersService} from '../services/usersService';
import  { validateCreateUser, validateEditUser } from '../store/validators';
import { HttpError} from '../models/errors';

const router = Router();

router.get('/', authentication(), authorization([ADMIN, BASE]), async (req, res) => {
  logger.info('You get all users!');
  const result = await usersService.getUsers();

  res.send(result);
});
router.get('/:id', authentication(), authorization([ADMIN, BASE]), async (req, res) => {
  const result = await usersService.getUser(req.params.id);

  if (!result) {throw new HttpError('The user not found.', 404);}

  res.send(result);
});
router.post('/', authentication(), authorization([ADMIN]), async (req, res) => {
  const { error } = validateCreateUser(req.body);

  if (error) {throw new HttpError(error.details[0].message, 400);}

  const result = await usersService.createUser(req.body);

  res.send(result);
});
router.put('/:id', authentication(), authorization([ADMIN]), async (req, res) => {
  const { error } = validateEditUser(req.body);
let user
  if (error) {throw new HttpError(error.details[0].message, 400);}

  if (req.body._id !== req.params.id) {throw new HttpError('The body _id does not match with URL ID', 400);}

  const result = await usersService.getUser(req.params.id);

  if (!result) {throw new HttpError('The user not found.', 404);}


  const responseUpdate = await usersService.updateUser(req.params.id, req.body);
  if (responseUpdate.ok) {user = await usersService.getUser(req.params.id);}
  res.send(user);
});
router.delete('/:id', authentication(), authorization([ADMIN]), async (req, res) => {
  const user = await usersService.getUser(req.params.id);

  if (!user) {throw new HttpError('The user not found.', 404);}

  const responseDelete = await usersService.deleteUser(req.params.id);
  res.send(responseDelete);
});

export { router };
