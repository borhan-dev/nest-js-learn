import { Request } from 'express';

export const isAdmin = (req: Request): boolean => {
  const header = req.headers;
  return true;
};
