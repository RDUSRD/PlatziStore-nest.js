import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createOrderDto, updateOrderDto } from 'src/dtos/orders/orders.dto';
import { OrdersService } from 'src/services/orders/orders.service';

@Controller('orders')
export class OrdersController {
  @Get()
  home() {
    return new OrdersService().findAll();
  }

  @Post()
  create(@Body() payload: createOrderDto) {
    return new OrdersService().create(payload);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() payload: updateOrderDto) {
    return new OrdersService().update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return new OrdersService().delete(id);
  }
}
