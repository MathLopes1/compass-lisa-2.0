import Joi from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';

class VadalidationId implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: Joi.ObjectSchema<string> = Joi.object({
        id: Joi.string()
          .min(24)
          .max(24)
          .trim()
          .pattern(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
          .required(),
      });

      const { error } = await validation.validate(req.params, { abortEarly: true });
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

export default VadalidationId;
