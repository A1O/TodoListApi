import { NextFunction, Request, Response } from 'express';
import httpContext from 'express-http-context';
import jwt from 'jsonwebtoken';

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (token) {
    const secretKey = <string>process.env.JWT_SECRET_KEY;

    jwt.verify(token, secretKey, (err, payload) => {
      if (err || !payload || !('id' in payload)) {
        return res.sendStatus(401);
      }

      httpContext.set('userId', (payload as Record<string, unknown>).id);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default authenticateJWT;
