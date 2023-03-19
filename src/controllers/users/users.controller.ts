import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createUserDto, updateUserDto } from './../../dtos/users/users.dto';
import { UsersService } from './../../services/users/users.service';

@Controller('users')
export class UsersController {
  @Get()
  home() {
    return new UsersService().findAll();
  }

  @Post()
  create(@Body() payload: createUserDto) {
    return new UsersService().create(payload);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() payload: updateUserDto) {
    return new UsersService().update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return new UsersService().delete(id);
  }

  @Get(':id')
  getID(@Param('id') id: number) {
    return new UsersService().findOne(id);
  }

  @Get('filter/:email')
  getEmail(@Param('email') email: string) {
    return new UsersService().findByEmail(email);
  }
}
