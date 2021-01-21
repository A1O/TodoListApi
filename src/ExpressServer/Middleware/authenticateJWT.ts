import { NextFunction, Request, Response } from 'express';
import httpContext from 'express-http-context';
import jwt from 'jsonwebtoken';

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const secretKey = <string>process.env.JWT_SECRET_KEY;
    const token = authHeader.split(' ')[1];

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
