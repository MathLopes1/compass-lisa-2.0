import { Router } from 'express';
import RoutesV1 from './v1/v1';

class IndexRoutes {
  static routes(): Router {
    const router = Router();

    router.use('/v1', RoutesV1.routes());

    return router;
  }
}

export default IndexRoutes;
