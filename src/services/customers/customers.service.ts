import { Injectable } from '@nestjs/common';
import {
  createCustomerDto,
  updateCustomerDto,
} from './../../dtos/customers/customers.dto';
import { customer } from './../../entities/customers/customers.entities';

@Injectable()
export class CustomersService {
  private Customer: customer[] = [];
  private CustomerID = 0;

  findAll() {
    return this.Customer;
  }

  findOne(id: number) {
    return this.Customer.find((item) => item.id === id);
  }

  create(payload: createCustomerDto) {
    this.CustomerID++;
    const newCustomer = {
      id: this.CustomerID,
      ...payload,
    };
    this.Customer.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: updateCustomerDto) {
    const customer = this.findOne(id);
    if (!customer) {
      return null;
    }
    const index = this.Customer.findIndex((item) => item.id === id);
    this.Customer[index] = {
      ...customer,
      ...payload,
    };
    return this.Customer[index];
  }

  delete(id: number) {
    const index = this.Customer.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    this.Customer.splice(index, 1);
    return { deleted: true };
  }
}
