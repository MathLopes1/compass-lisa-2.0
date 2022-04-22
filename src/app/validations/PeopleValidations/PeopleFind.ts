import JoiDate from '@joi/date';
import JOI, { ObjectSchema } from 'joi';

import { NextFunction, Response, Request } from 'express';
import { Middleware } from '@decorators/express';
import { IPeople } from '../../interfaces/People/IPeople';

import { habilitado } from '../../utils/Enum/enum';
import IsValidCpf from '../../utils/Functions/Validations/IsCpfValid';

const Joi = JOI.extend(JoiDate) as typeof JOI;

class validationFind implements Middleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const validation: ObjectSchema<IPeople> = Joi.object({
        nome: Joi.string().min(3).max(40).trim(),
        cpf: Joi.string()
          .min(11)
          .max(11)
          .trim(),
        data_nascimento: Joi.date().format('DD/MM/YYYY'),
        email: Joi.string()
          .trim()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }),
        senha: Joi.string().min(6).trim(),
        habilitado: Joi.string()
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

export default validationFind;
