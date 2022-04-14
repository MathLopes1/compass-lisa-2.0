import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import CarController from '../../app/controllers/CarController';
import PeopleController from '../../app/controllers/PeopleController';
import AuthController from '../../app/controllers/AuthController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        CarController,
        PeopleController,
        AuthController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
