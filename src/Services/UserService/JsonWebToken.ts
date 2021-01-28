import { injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { IJsonWebToken } from './types';

@injectable()
class JsonWebToken implements IJsonWebToken {
  secretKey: string;

  constructor() {
    this.secretKey = <string>process.env.JWT_SECRET_KEY;
  }

  sign(id: string) {
    return jwt.sign({ id }, this.secretKey);
  }

  decode(token: string) {
    return jwt.verify(token, this.secretKey);
  }
}

export default JsonWebToken;
