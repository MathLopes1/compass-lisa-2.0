import JoiDate from '@joi/date';
import JOI, { ObjectSchema } from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { Icar } from '../../interfaces/Car/ICar';

const Joi = JOI.extend(JoiDate) as typeof JOI;

class validationBody implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: ObjectSchema<Icar> = Joi.object({
        modelo: Joi.string().min(5).max(25).trim()
          .required(),
        cor: Joi.string().min(3).max(15).trim()
          .required(),
        ano: Joi.date().format('YYYY').min('1950-01-01').max('2022-12-31')
          .required(),
        acessorios: Joi.array()
          .min(1)
          .max(25)
          .items(Joi.object({ descricao: Joi.string().trim().required() }))
          .required()
          .unique('descricao'),
        quantidadePassageiros: Joi.number().integer().min(1).max(5)
          .required(),
      });
      const { error } = await validation.validate(req.body, { abortEarly: true });
      if (error) throw error;

      return next();
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        description: error.message,
      });
    }
  }
}

export default validationBody;
