import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createBrandDto } from 'src/dtos/brands/brands.dto';
import { BrandsService } from 'src/services/brands/brands.service';

@Controller('brands')
export class BrandsController {
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  home() {
    return new BrandsService().findAll();
  }

  @Post()
  create(@Body() payload: createBrandDto) {
    return new BrandsService().create(payload);
  }

  @Put('Update/:id')
  update(@Param('id') id: number, @Body() payload: createBrandDto) {
    return new BrandsService().update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return new BrandsService().delete(id);
  }
}
