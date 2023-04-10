import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { UserRole } from 'src/type';

export const isAdmin = (req: Request): boolean => {
  try {
    const { user } = req;

    if (user.role === UserRole.admin) {
      return true;
    }
    throw new UnauthorizedException('unauthorized user');
  } catch (err) {
    console.log(err.message);
  }
};
