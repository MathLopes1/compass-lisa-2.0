import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import CarController from '../../app/controllers/CarController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        CarController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
