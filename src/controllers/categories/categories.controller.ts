import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return new CategoriesService().findOne(id);
  }

  @Post()
  create(@Body() payload: createCategoriesDto) {
    return new CategoriesService().create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateCategoriesDto,
  ) {
    return new CategoriesService().update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return new CategoriesService().delete(id);
  }
}
