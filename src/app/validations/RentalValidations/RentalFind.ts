import Joi from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { IRental } from '../../interfaces/Rental/IRental';

class validationBody implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: Joi.ObjectSchema<IRental> = Joi.object({
        nome: Joi.string().trim().min(3).max(20),
        cnpj: Joi.string().trim().min(14).max(14),
        atividades: Joi.string().min(5).max(40).trim(),
        endereco: Joi.array().min(1).unique('cep')
          .items(
            Joi.object({
              cep: Joi.string().min(8).max(8).trim(),
              number: Joi.string().min(1).trim(),
              complemento: Joi.string().min(5).max(40).trim(),
              isFilial: Joi.boolean(),
            }),
          ),
      });
      const { error } = await validation.validate(req.body, { abortEarly: true });
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

export default validationBody;
