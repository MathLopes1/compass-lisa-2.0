import { Router } from 'express';
import { attachControllers } from '@decorators/express';

import swaggerUI from 'swagger-ui-express';
import SwaggerDoc from '../../../swagger.json';

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

    router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(SwaggerDoc));
    return router;
  }
}

export default RoutesV1;
