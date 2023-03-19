import { Injectable } from '@nestjs/common';
import { createUserDto, updateUserDto } from './../../dtos/users/users.dto';
import { user } from './../../entities/users/users.entities';

@Injectable()
export class UsersService {
  private User: user[] = [];
  private UserID = 0;

  findAll() {
    return this.User;
  }

  findOne(id: number) {
    return this.User.find((item) => item.id === id);
  }

  create(payload: createUserDto) {
    this.UserID++;
    const newUser = {
      id: this.UserID,
      ...payload,
    };
    this.User.push(newUser);
    return newUser;
  }

  update(id: number, payload: updateUserDto) {
    const user = this.findOne(id);
    if (!user) {
      return null;
    }
    const index = this.User.findIndex((item) => item.id === id);
    this.User[index] = {
      ...user,
      ...payload,
    };
    return this.User[index];
  }

  delete(id: number) {
    const index = this.User.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    this.User.splice(index, 1);
    return { deleted: true };
  }

  findByEmail(email: string) {
    return this.User.find((item) => item.email === email);
  }
}
