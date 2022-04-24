import { Request, Response, NextFunction } from 'express';
import { Middleware } from '@decorators/express';

import jwt from 'jsonwebtoken';
import Auth from '../auth/auth.json';
import Unauthorized from '../errors/ErrorsHttp/Unauthorized';

class TokenBearer implements Middleware {
  use(req: Request, res: Response, next: NextFunction): void {
    try {
      const gettingTokenFromRequestHeader: string = req.headers.authorization
        .split(' ')[1];
      const token: string = gettingTokenFromRequestHeader;
      jwt.verify(token, Auth.secret);
      return next();
    } catch (error) {
      throw new Unauthorized(error.message);
    }
  }
}

export default TokenBearer;
