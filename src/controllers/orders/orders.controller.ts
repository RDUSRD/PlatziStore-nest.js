import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  home() {
    return {
      message: 'Orders',
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create',
      payload,
    };
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Update',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Delete',
      id,
    };
  }
}
