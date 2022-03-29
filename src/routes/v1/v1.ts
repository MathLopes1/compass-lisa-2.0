import { Router } from 'express';
import { attachControllers } from '@decorators/express';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [

      ],
    );
    return router;
  }
}

export default RoutesV1;
