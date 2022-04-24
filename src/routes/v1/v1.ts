import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import CarController from '../../app/controllers/CarController';
import PeopleController from '../../app/controllers/PeopleController';
import AuthController from '../../app/controllers/AuthController';
import RentalController from '../../app/controllers/RentalController';

class RoutesV1 {
  static routes(): Router {
    const router = Router();

    attachControllers(
      router,
      [
        CarController,
        PeopleController,
        AuthController,
        RentalController,
      ],
    );
    return router;
  }
}

export default RoutesV1;
