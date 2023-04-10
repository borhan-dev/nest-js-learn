import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { RoleGuard } from 'src/guards/roleGuard';
import { UserGuard } from 'src/guards/userGuard';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/service/users/users.service';

@UseGuards(UserGuard)
@UseGuards(RoleGuard)
@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/')
  async getUsers() {
    return this.userService.findUsers();
  }

  @Post('/')
  async createUser(@Body() creatUserDto: UserDto) {
    return this.userService.createUser(creatUserDto);
  }

  @Patch('/:id')
  async updateUser(
    @Body() updateUserDto: UserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updateUser(updateUserDto, Number(id));
  }
}
