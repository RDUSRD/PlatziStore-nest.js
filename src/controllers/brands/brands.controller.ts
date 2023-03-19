import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { createBrandDto, updateBrandDto } from 'src/dtos/brands/brands.dto';
import { BrandsService } from 'src/services/brands/brands.service';

@Controller('brands')
export class BrandsController {
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  home() {
    return new BrandsService().findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return new BrandsService().findOne(id);
  }

  @Post()
  create(@Body() payload: createBrandDto) {
    return new BrandsService().create(payload);
  }

  @Put('Update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateBrandDto,
  ) {
    return new BrandsService().update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return new BrandsService().delete(id);
  }
}
