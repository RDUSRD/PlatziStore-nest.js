import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  home() {
    return {
      message: 'Users',
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
