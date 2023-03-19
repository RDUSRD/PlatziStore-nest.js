import { Injectable, NotFoundException } from '@nestjs/common';
import { createBrandDto, updateBrandDto } from 'src/dtos/brands/brands.dto';
import { brands } from './../../entities/brands/brands.entities';

@Injectable()
export class BrandsService {
  private Brands: brands[] = [];
  private BrandID = 0;

  findAll() {
    return this.Brands;
  }

  findOne(id: number) {
    const object = this.Brands.find((item) => item.id === id);
    if (!object) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return object;
  }

  create(payload: createBrandDto) {
    this.BrandID++;
    const newBrand = {
      id: this.BrandID,
      ...payload,
    };
    this.Brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: updateBrandDto) {
    const Brand = this.findOne(id);
    if (Brand) {
      const index = this.Brands.findIndex((item) => item.id === id);
      this.Brands[index] = {
        ...Brand,
        ...payload,
      };
      return this.Brands[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.Brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.Brands.splice(index, 1);
    return true;
  }
}
