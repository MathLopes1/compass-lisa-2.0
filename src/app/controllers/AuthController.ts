import { Request, Response } from 'express';
import { Controller, Post } from '@decorators/express';

import { Inject } from '@decorators/di';

import AuthService from '../services/AuthServices';
import { IAuthService } from '../interfaces/Auth/IAuthService';
import { IPeople } from '../interfaces/People/IPeople';
import { IAuth } from '../interfaces/Auth/IAuth';

@Controller('/authenticate')
class AuthController {
  private readonly authService: IAuthService;

  constructor(@Inject(AuthService) authService: IAuthService) {
    this.authService = authService;
  }

  @Post('/')
  async authenticate(req: Request, res: Response): Promise<Response> {
    const data: IPeople = req.body;
    try {
      const auth: IAuth = await this.authService.authenticate(data);
      return res.status(201).json(auth);
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        description: error.message,
      });
    }
  }
}

export default AuthController;
