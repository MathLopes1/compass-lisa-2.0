import HttpError from '../HttpErrorGeneric';

class Unauthorized extends HttpError {
  public statusCode: number;

  public name: string;

  constructor(message) {
    super(401, message);

    this.statusCode = 401;
    this.name = 'Unauthorized';
  }
}

export default Unauthorized;
