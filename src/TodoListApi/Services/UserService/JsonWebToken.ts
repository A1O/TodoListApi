import jwt from 'jsonwebtoken';

class JsonWebToken {
  secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  sign(id: string) {
    return jwt.sign({ id }, this.secretKey);
  }

  decode(token: string) {
    return jwt.verify(token, this.secretKey);
  }
}

export default JsonWebToken;
