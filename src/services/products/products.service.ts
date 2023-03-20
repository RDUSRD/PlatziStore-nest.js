import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/products/products.entities';
import {
  createProductDto,
  updateProductDto,
} from '../../dtos/products/product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private productID = 0;

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const object = this.products.find((item) => item.id === id);
    if (!object) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return object;
  }

  create(payload: createProductDto) {
    this.productID++;
    const newProduct = {
      id: this.productID,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: updateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
