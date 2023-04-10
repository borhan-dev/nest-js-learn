import {
  BadGatewayException,
  Controller,
  Get,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './features/httpException';

@UseFilters(HttpExceptionFilter)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new BadGatewayException();
  }
}
