import  * as jwt from 'jsonwebtoken';
import { HttpError} from '../models/errors';
export const authentication = function () {
  const JWT_KEY = ''; // insert here JWT key;

  return function getUser(req, res, next) {
    const token = req.headers['authorization'] || req.headers['x-access-token'];

    res.locals.authInfo = null;
    console.log('authentication...', token || 'unknow user');

    if (token) {
      try {
          
        const decoded = jwt.verify(token, JWT_KEY)as object;

        res.locals.authInfo = { ...decoded, JWT: token };
      } catch (err) {
        throw new HttpError(err, 403);
      }
    }
    next();
  };
};
export const authorization = function (routeValidRoles) {
  return function getAccess(req, res, next) {
    if (!res.locals.authInfo) {
      throw new HttpError('User is not authenticated.', 401);
    }
    if (!routeValidRoles.includes(res.locals.authInfo.roleName)) {
      throw new HttpError('User does not have the right roles.', 401);
    }
    console.log('authorization...', routeValidRoles);
    next();
  };
};


