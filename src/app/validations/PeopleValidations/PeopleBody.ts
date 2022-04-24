import JoiDate from '@joi/date';
import JOI, { ObjectSchema } from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { IPeople } from '../../interfaces/People/IPeople';

import { habilitado } from '../../utils/Enum/enum';

const Joi = JOI.extend(JoiDate) as typeof JOI;

class validationBody implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: ObjectSchema<IPeople> = Joi.object({
        nome: Joi.string().min(3).max(40).trim()
          .required(),
        cpf: Joi.string()
          .min(11)
          .max(11)
          .trim()
          .required(),
        data_nascimento: Joi.date().format('DD/MM/YYYY')
          .required(),
        email: Joi.string()
          .trim()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
          .required(),
        senha: Joi.string().min(6).trim().required(),
        habilitado: Joi.string()
          .required()
          .trim()
          .valid(...Object.values(habilitado)),
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
