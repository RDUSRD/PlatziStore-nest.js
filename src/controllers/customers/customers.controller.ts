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

import {
  createCustomerDto,
  updateCustomerDto,
} from 'src/dtos/customers/customers.dto';
import { CustomersService } from 'src/services/customers/customers.service';
@Controller('customers')
export class CustomersController {
  @Get()
  home() {
    return new CustomersService().findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return new CustomersService().findOne(id);
  }

  @Post()
  create(@Body() payload: createCustomerDto) {
    return new CustomersService().create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateCustomerDto,
  ) {
    return new CustomersService().update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return new CustomersService().delete(id);
  }
}
