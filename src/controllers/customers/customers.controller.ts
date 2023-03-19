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

  @Post()
  create(@Body() payload: any) {
    return new CustomersService().create(payload);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() payload: any) {
    return new CustomersService().update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return new CustomersService().delete(id);
  }
}
