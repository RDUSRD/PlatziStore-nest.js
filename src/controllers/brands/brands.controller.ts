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

@Controller('brands')
export class BrandsController {
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  home() {
    return {
      message: 'Brands',
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create',
      payload,
    };
  }

  @Put('Update/:id')
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
