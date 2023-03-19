import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  createCategoriesDto,
  updateCategoriesDto,
} from './../../dtos/categories/categories.dto';
import { CategoriesService } from './../../services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  @Get()
  home() {
    return new CategoriesService().findAll();
  }

  @Post()
  create(@Body() payload: createCategoriesDto) {
    return new CategoriesService().create(payload);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() payload: updateCategoriesDto) {
    return new CategoriesService().update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return new CategoriesService().delete(id);
  }
}
