import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import CarController from '../../app/controllers/CarController';
import PeopleController from '../../app/controllers/PeopleController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        CarController,
        PeopleController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
