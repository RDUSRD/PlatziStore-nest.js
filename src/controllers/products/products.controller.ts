import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';
import {
  createProductDto,
  updateProductDto,
} from '../../dtos/products/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  home() {
    // return {
    //   message: 'Products',
    // };
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: createProductDto) {
    // return {
    //   message: 'Create',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateProductDto,
  ) {
    // return {
    //   message: 'Update',
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    // return {
    //   message: 'Delete',
    //   id,
    // };
    return this.productsService.delete(id);
  }
}
