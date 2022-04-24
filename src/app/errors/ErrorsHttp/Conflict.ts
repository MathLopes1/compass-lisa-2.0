import HttpError from '../HttpErrorGeneric';

class Conflit extends HttpError {
  public statusCode: number;

  public name: string;

  constructor(message) {
    super(409, message);

    this.statusCode = 409;
    this.name = 'Conflict';
  }
}

export default Conflit;
