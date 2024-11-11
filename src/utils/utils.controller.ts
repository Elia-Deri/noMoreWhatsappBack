import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { CreateUtilDto } from './dto/create-util.dto';

@Controller('utils')
export class UtilsController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post()
  create(@Body() createUtilDto: CreateUtilDto) {
    return this.utilsService.create(createUtilDto);
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.utilsService.findOne(name);
  }
}
