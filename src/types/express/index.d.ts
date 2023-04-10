import { User } from 'src/core/entities/User';
export {};

declare global {
  namespace Express {
    export interface Request {
      language?: Language;
      user?: User;
      cookies?: { token: string };
    }
  }
}
