import { Request } from 'express';

export const isAuthenticated = (req: Request): boolean => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
  }
};
