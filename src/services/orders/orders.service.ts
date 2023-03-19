import { Injectable } from '@nestjs/common';
import { orders } from 'src/entities/orders/orders.entities';
import { createOrderDto, updateOrderDto } from 'src/dtos/orders/orders.dto';

@Injectable()
export class OrdersService {
  private order: orders[] = [];
  private orderID = 0;

  findAll() {
    return this.order;
  }

  findOne(id: number) {
    return this.order.find((item) => item.id === id);
  }

  create(payload: createOrderDto) {
    this.orderID++;
    const newOrder = {
      id: this.orderID,
      ...payload,
    };
    this.order.push(newOrder);
    return newOrder;
  }

  update(id: number, payload: updateOrderDto) {
    const order = this.findOne(id);
    if (order) {
      const index = this.order.findIndex((item) => item.id === id);
      this.order[index] = {
        ...order,
        ...payload,
      };
      return this.order[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.order.findIndex((item) => item.id === id);
    if (index > -1) {
      this.order.splice(index, 1);
      return true;
    }
    return false;
  }
}
