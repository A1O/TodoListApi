import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const secretKey = <string>process.env.JWT_SECRET_KEY;
    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(401);
      }

      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default authenticateJWT;
