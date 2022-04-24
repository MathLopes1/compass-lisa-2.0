import Joi, { ObjectSchema } from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';

import { Icar } from '../../interfaces/Car/ICar';

class ValidationPatchCar implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: ObjectSchema<Icar> = Joi.object({
        descricao: Joi.string().trim().required(),
      });
      const { error } = await validation.validate(req.body, {
        abortEarly: false,
        allowUnknown: false,
      });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json({
        details: error.details.map((detail) => ({
          name: detail.path[0],
          description: detail.message,
        })),
      });
    }
  }
}

export default ValidationPatchCar;
