import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { RoleGuard } from 'src/core/guards/roleGuard';
import { UserGuard } from 'src/core/guards/userGuard';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getUsers() {
    return this.userService.findUsers();
  }

  @Post()
  async createUser(@Body(new ValidationPipe()) creatUserDto: UserDto) {
    return this.userService.createUser(creatUserDto);
  }

  @UseGuards(RoleGuard)
  @Patch(':id')
  async updateUser(
    @Body(new ValidationPipe()) updateUserDto: UserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updateUser(updateUserDto, Number(id));
  }
}
