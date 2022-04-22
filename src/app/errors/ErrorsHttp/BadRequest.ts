import HttpError from '../HttpErrorGeneric';

class BadRequest extends HttpError {
  public statusCode: number;

  public name: string;

  constructor(message) {
    super(400, message);

    this.statusCode = 400;
    this.name = 'Bad Request';
  }
}

export default BadRequest;
