import HttpError from '../HttpErrorGeneric';

class NotFound extends HttpError {
  public statusCode: number;

  public name: string;

  constructor(message) {
    super(404, message);

    this.statusCode = 404;
    this.name = 'Not Found';
  }
}

export default NotFound;
