import jwt from 'jsonwebtoken';
import md5 from './auth.json';

function generateToken(params: object = {}): String {
  return jwt.sign({ params }, md5.secret, {
    expiresIn: 86400,
  });
}

export default generateToken;
