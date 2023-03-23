import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.entities';
import { createProductDto, updateProductDto } from './product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find;
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where: { id },
    });
  }

  create(payload: createProductDto) {
    const newProduct = this.productRepository.create(payload);
    this.productRepository.save(newProduct);
  }

  update(id: number, payload: updateProductDto) {
    const product = this.productRepository.findOne({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.productRepository.update(id, payload);
  }

  delete(id: number) {
    return this.productRepository.delete({ id });
  }
}
