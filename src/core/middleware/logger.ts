import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: (error?: any) => void) {
    console.log(
      `
        Method : ${req.method}

        Url     : ${req.url}

        IP       :${req.ip}
        `,
    );
    next();
  }
}
