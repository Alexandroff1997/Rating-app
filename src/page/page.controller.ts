/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PageModel } from './page.model';
import { FindPageDto } from './dto/find-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('page')
export class PageController {
  constructor(private readonly configService: ConfigService) {}

  @Post('create')
  async create(@Body() dto: Omit<PageModel, '_id'>) {
    this.configService.get('BD');
  }

  @Get(':id')
  async getById(@Param('id') id: string) {}

  @Delete(':id')
  async deleteById(@Param('id') id: string) {}

  @Patch(':id')
  async patchById(@Param('id') id: string, dto: PageModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindPageDto) {}
}
